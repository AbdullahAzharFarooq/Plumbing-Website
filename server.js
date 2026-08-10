const express = require("express");
const cors = require("cors");
const pool = require("./database/db");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const businessData = require("../businessdata");

const sendEmail = require("./services/emailservice");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const app = express();

/* =========================
   DATABASE CONNECTION
========================= */

pool.query("SELECT NOW()")
    .then(result => {
        console.log("DATABASE CONNECTED:", result.rows[0]);
    })
    .catch(error => {
        console.error("DATABASE ERROR:", error.message);
    });

/* =========================
   MIDDLEWARE
========================= */

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);

app.use(express.json());

/* =========================
   HEALTH CHECK
========================= */

app.get("/", (req, res) => {
    res.json({
        message: "Elite Plumbing API is running"
    });
});

/* =========================
   CONTACT API
========================= */

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Name is required!"
            });
        }

        if (!email) {
            return res.status(400).json({
                message: "Email is required!"
            });
        }

        if (!message) {
            return res.status(400).json({
                message: "Message field is required!"
            });
        }

        // Add contact to database
        await pool.query(
            `INSERT INTO contact_messages
            (full_name, email, phone, message)
            VALUES ($1, $2, $3, $4)`,
            [name, email, phone, message]
        );

        // Send email
        await sendEmail(
            name,
            email,
            phone,
            message
        );

        return res.status(201).json({
            message: "Successfully added in the database..."
        });

    } catch (error) {
        console.error("CONTACT ERROR:", error);

        return res.status(500).json({
            message: error.message
        });
    }
});

/* =========================
   CHAT API
========================= */

app.post("/api/chat", async (req, res) => {
    try {
        const { messages = [] } = req.body;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Messages are required"
            });
        }

        // Keep only the last 10 messages
        const recentMessages = messages.slice(-10);

        // Last message = current user question
        const currentMessage =
            recentMessages[recentMessages.length - 1];

        if (
            !currentMessage ||
            currentMessage.role !== "user" ||
            !currentMessage.content
        ) {
            return res.status(400).json({
                success: false,
                message: "A valid user message is required"
            });
        }

        // Previous messages
        const previousMessages = recentMessages.slice(0, -1);

        const reply = await generateGeminiResponse(
            currentMessage.content,
            previousMessages
        );

        return res.status(200).json({
            success: true,
            reply
        });

    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

/* =========================
   GEMINI RESPONSE
========================= */

async function generateGeminiResponse(message, history) {

    const chatHistory = history
        .map(item => {
            return `${item.role}: ${item.content}`;
        })
        .join("\n");

    const prompt = `
You are the official AI assistant for ${businessData.companyName}.

Your job is to help website visitors with questions about the plumbing company.

BUSINESS INFORMATION:

${JSON.stringify(businessData, null, 2)}

PREVIOUS CONVERSATION:

${chatHistory || "No previous conversation."}

CURRENT CUSTOMER QUESTION:

${message}

RULES:

1. Only provide information supported by the business information.
2. Do not invent prices.
3. Do not invent services.
4. Do not invent business hours.
5. Do not book appointments.
6. Do not process payments.
7. Do not request sensitive personal information.
8. If the customer needs urgent plumbing assistance, encourage them to call ${businessData.phone}.
9. Be concise, professional and friendly.
10. If you don't know the answer, say so and recommend contacting the company directly.
11. Use the previous conversation to understand the customer's context.
12. Do not repeat information unnecessarily.
13. Answer the customer's current question directly.
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt
    });

    return response.text;
}

/* =========================
   VERCEL EXPORT
========================= */

module.exports = app;