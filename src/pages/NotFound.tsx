
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ParticleBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card text-center p-8 rounded-2xl max-w-md"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-orbitron font-bold mb-4 text-primary"
        >
          404
        </motion.h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Página não encontrada</p>
        <a href="/" className="inline-block glass-card px-6 py-3 rounded-lg text-white transition-all duration-300 hover:bg-primary/20 hover:scale-105">
          Voltar para Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
