
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, informe seu email para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá atualizações e conteúdos exclusivos em breve.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      id="newsletter"
      className="w-full max-w-xl mx-auto glass-card rounded-2xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-orbitron font-medium text-center mb-2">
        Fique conectado com novidades!
      </h2>
      <p className="text-gray-300 text-center mb-6">
        Inscreva-se para receber atualizações e conteúdos exclusivos diretamente no seu e-mail.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1 block">
            Nome (opcional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full p-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1 block">
            E-mail <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            className="w-full p-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
            ${isSuccess 
              ? 'bg-green-600 text-white' 
              : 'bg-primary hover:bg-primary/90 text-white'
            }
            disabled:opacity-70 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processando...
            </span>
          ) : isSuccess ? (
            <span className="flex items-center justify-center">
              <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Inscrito com sucesso!
            </span>
          ) : (
            "Inscrever-se"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default NewsletterForm;
