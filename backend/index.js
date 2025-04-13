require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const path = require("path");

const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001;
app.use(
  cors({
    origin: ["http://localhost:5173","https://integrated-pro.onrender.com"],
    credentials: true,
  })
);

app.use(cors());
app.use(express.json()); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, 
  },
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


app.post("/", async (req, res) => {
  console.log("Received request:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "enkhbadralasralt063@gmail.com", 
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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
