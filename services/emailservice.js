const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendEmail(name, email, phone, message) {
 
    await transporter.sendMail(
        {
            from : process.env.EMAIL_USER,
            to : process.env.EMAIL_USER,
            subject : "New Website Lead",

            text : `
            
            NEW FORM SUBMISSION
               Name : ${name}
               Email : ${email}
               Phone Number: ${phone || "Not Provided"}

               Message : ${message}

            `

        }
    )
}

module.exports = sendEmail;