
import React from "react";
// import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className=" relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6 overflow-hidden">
      
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <TorusKnot args={[1, 0.4, 100, 16]} position={[0, 0, -2]}>
            <meshStandardMaterial color="cyan" wireframe />
          </TorusKnot>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">[Asralt Enkhbadral]</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A <span className="text-cyan-400">Full-Stack Developer</span> creating unique web experiences using <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Three.js</span>.
        </p>

        <div className="mt-6 flex justify-center space-x-6">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg shadow-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
