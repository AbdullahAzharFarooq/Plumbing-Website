const businessData = {
companyName: "Elite Plumbing",

phone: "+1 555-123-4567",

email: "info@eliteplumbing.com",

location: "Toronto, Canada",

about: `
    Elite Plumbing is a professional residential plumbing company
    serving customers throughout Toronto and nearby areas.

    We provide reliable plumbing solutions for common household
    plumbing problems, emergency situations, repairs, maintenance,
    and installations.

    Our goal is to provide fast, professional, and transparent
    plumbing services while helping customers understand their
    plumbing problems and available solutions.
`,

services: [
    {
        name: "Emergency Plumbing",
        description:
            "Emergency plumbing assistance for urgent problems such as major leaks, burst pipes, overflowing fixtures, and other serious plumbing issues.",
        availability: "24/7 emergency service"
    },

    {
        name: "Drain Cleaning",
        description:
            "Professional drain cleaning for slow or blocked sinks, showers, bathtubs, and other household drains."
    },

    {
        name: "Water Heater Repair",
        description:
            "Diagnosis and repair of common residential water heater problems, including lack of hot water, unusual noises, and leaks."
    },

    {
        name: "Water Heater Installation",
        description:
            "Installation and replacement of residential water heaters."
    },

    {
        name: "Pipe Repair",
        description:
            "Repair of damaged, leaking, or corroded household plumbing pipes."
    },

    {
        name: "Leak Detection",
        description:
            "Inspection and identification of visible and suspected plumbing leaks."
    },

    {
        name: "Faucet Repair",
        description:
            "Repair or replacement of leaking, damaged, or malfunctioning faucets."
    },

    {
        name: "Toilet Repair",
        description:
            "Repair of common toilet problems including leaks, running toilets, clogs, and flushing issues."
    },

    {
        name: "Sump Pump Services",
        description:
            "Inspection, repair, and replacement of residential sump pumps."
    },

    {
        name: "Plumbing Maintenance",
        description:
            "Routine plumbing inspections and maintenance designed to help identify potential problems before they become major issues."
    }
],

serviceAreas: [
    "Toronto",
    "Mississauga",
    "Brampton"
],

hours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Emergency calls only"
},

emergencyService: {
    available: true,
    availability: "24/7",
    description: `
        Emergency plumbing assistance is available 24/7 for urgent
        plumbing situations such as burst pipes, major leaks,
        overflowing toilets, and serious water-related problems.
    `
},

customers: [
    "Residential homeowners",
    "Tenants",
    "Property managers",
    "Residential landlords"
],

pricing: {
    policy: `
        Customers should contact Elite Plumbing for current pricing.
        Prices can vary depending on the type of plumbing problem,
        required parts, labor, and the complexity of the job.
    `,
    quoteAvailable: true
},

paymentMethods: [
    "Credit card",
    "Debit card",
    "Cash"
],

booking: {
    available: true,
    method: `
        Customers can contact Elite Plumbing by phone to discuss
        their plumbing problem and arrange a service visit.
    `
},

responseTime: `
    Elite Plumbing aims to respond to customer inquiries as quickly
    as possible. Emergency situations are prioritized.
`,

guarantees: `
    Elite Plumbing focuses on professional workmanship and reliable
    service. Customers should contact the company directly for
    information about any applicable service or workmanship guarantees.
`,

commonProblems: [
    "Leaking faucets",
    "Clogged drains",
    "Running toilets",
    "Low water pressure",
    "Water heater problems",
    "Burst pipes",
    "Pipe leaks",
    "Overflowing toilets",
    "Slow drains",
    "Sump pump problems"
],

emergencyExamples: [
    "Burst pipe",
    "Major water leak",
    "Overflowing toilet that cannot be stopped",
    "Severe water damage caused by plumbing",
    "Major loss of water supply",
    "Serious water heater leak"
],

customerGuidance: {
    burstPipe: `
        If a customer has a burst pipe, they should turn off the
        main water supply if it is safe to do so and contact Elite
        Plumbing for emergency assistance.
    `,

    majorLeak: `
        For a major plumbing leak, customers should stop the water
        supply if possible and contact Elite Plumbing immediately.
    `,

    cloggedDrain: `
        Customers experiencing a clogged drain can contact Elite
        Plumbing for professional drain cleaning and diagnosis.
    `,

    noHotWater: `
        If a customer has no hot water, Elite Plumbing can inspect
        the water heater and determine the cause of the problem.
    `
},

contact: {
    phone: "+1 555-123-4567",
    email: "info@eliteplumbing.com",
    location: "Toronto, Canada"
},

chatbotRules: [
    "Only provide information contained in this business information.",
    "Never invent services.",
    "Never invent prices.",
    "Never invent business hours.",
    "Never invent guarantees.",
    "Never claim that an appointment has been booked.",
    "Never claim that a payment has been completed.",
    "Do not request passwords, payment card numbers, or other sensitive information.",
    "For emergencies, encourage the customer to contact Elite Plumbing immediately.",
    "If the requested information is not available, tell the customer that you do not have that information.",
    "Keep answers concise, helpful, professional, and friendly.",
    "Use previous conversation context when answering follow-up questions."
]


};

module.exports = businessData;