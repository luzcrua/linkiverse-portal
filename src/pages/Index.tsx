
import React, { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import LinkCard from "@/components/LinkCard";
import NewsletterForm from "@/components/NewsletterForm";
import { links } from "@/data/links";
import { motion } from "framer-motion";

const Index = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleTypingComplete = () => {
    setShowLinks(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-16 lg:py-0 overflow-hidden">
      <ParticleBackground />
      
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center mb-12"
        >
          <TypewriterText 
            text="Bem-vindo ao meu universo digital. Escolha seu destino." 
            delay={2000}
            className="text-white mb-8"
            onComplete={handleTypingComplete}
          />
          
          {showLinks && (
            <div className="w-full space-y-3 md:space-y-4">
              {links.map((link, index) => (
                <LinkCard 
                  key={link.id} 
                  link={link} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 w-full"
        >
          <NewsletterForm />
        </motion.div>
      </div>

      <footer className="w-full mt-16 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} HubLink - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Index;
