require("dotenv").config(); // Use require instead of import
const express = require("express");
const cors = require("cors");  // Fix incorrect syntax
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

app.post("/send-email", async (req, res) => {
  console.log("Received request:", req.body);

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    console.log("❌ All fields are required");
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: "enkhbadralasralt063@gmail.com",
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent!");
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email failed:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
