import React, { useState } from "react";
// import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5001", formData);
      setSuccess(response.data.message);
      alert("Message Sent! 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && <p className="mt-4 text-green-400">{success}</p>}

      {/* Social Media Icons */}
      {/* <div className="absolute bottom-8 flex space-x-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-4xl hover:scale-110 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-500 text-4xl hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-400 text-4xl hover:scale-110 transition" />
        </a>
        <a href="mailto:your.email@gmail.com">
          <FaEnvelope className="text-red-500 text-4xl hover:scale-110 transition" />
        </a>
      </div> */}
    </motion.div>
  );
};

export default Contact;
