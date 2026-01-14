import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // ✅ Fix: Import Icons

const Social = () => {
  return (
    <div className="flex justify-center items-center mt-4 space-x-6">
      <a href="https://github.com/asralt" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-300 text-4xl hover:text-white transition" />
      </a>
      <a href="https://www.linkedin.com/in/asralt-enkhbadral-5b483716a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-400 text-4xl hover:text-blue-500 transition" />
      </a>
      <a href="https://www.instagram.com/askaphaethon/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-400 text-4xl hover:text-pink-500 transition" />
      </a>
    </div>
  );
};


export default Social;
