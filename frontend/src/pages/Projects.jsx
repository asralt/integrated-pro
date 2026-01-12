import React from "react";
// import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MockChatApp",
    description: "An interactive portfolio built with Three.js & React.",
    image: '/chat.png',
    link: "https://chatapp-vcu9.onrender.com/",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A full-stack MERN e-commerce application.",
    image: "",
    link: "",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "A chatbot powered by OpenAI API and Node.js.",
    image: "",
    link: "",
  },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => {
  return (
    <div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition overflow-hidden group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg group-hover:opacity-80 transition"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300 mt-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition shadow-md"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-10 pt-20" // ✅ Added `pt-20` to push content down
    >
      <h2 className="text-center text-5xl font-bold text-white mb-12">
        My Projects
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
