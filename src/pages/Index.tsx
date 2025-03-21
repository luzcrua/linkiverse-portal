
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import { links } from "@/data/links";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const LinkCard = lazy(() => import("@/components/LinkCard"));
const NewsletterForm = lazy(() => import("@/components/NewsletterForm"));

// Loading fallback
const LinkCardSkeleton = () => (
  <Skeleton className="w-full h-20 rounded-2xl my-3" />
);

const NewsletterSkeleton = () => (
  <Skeleton className="w-full h-40 rounded-2xl mt-16" />
);

const Index = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add IntersectionObserver for performance optimization
    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lazyLoadObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '100px' });

    document.querySelectorAll('.lazy-load').forEach(el => {
      lazyLoadObserver.observe(el);
    });

    return () => {
      lazyLoadObserver.disconnect();
    };
  }, []);

  const handleTypingComplete = () => {
    setShowLinks(true);
  };

  return (
    <>
      <Helmet>
        <title>HubLink - Seu Portal Digital de Links</title>
        <meta name="description" content="Seu portal digital para acessar portfólio, redes sociais e se inscrever na newsletter. Conecte-se através desse hub personalizado." />
        <link rel="canonical" href="https://hublink.example.com/" />
      </Helmet>
      
      <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-16 lg:py-0 overflow-hidden">
        <ParticleBackground />
        
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
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
                <Suspense fallback={
                  <>
                    {Array(5).fill(0).map((_, i) => (
                      <LinkCardSkeleton key={i} />
                    ))}
                  </>
                }>
                  {links.map((link, index) => (
                    <LinkCard 
                      key={link.id} 
                      link={link} 
                      index={index} 
                    />
                  ))}
                </Suspense>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 w-full lazy-load"
          >
            <Suspense fallback={<NewsletterSkeleton />}>
              <NewsletterForm />
            </Suspense>
          </motion.div>
        </div>

        <footer className="w-full mt-16 text-center text-sm">
          <p className="text-gray-400">© {new Date().getFullYear()} HubLink - Todos os direitos reservados</p>
          <p className="text-gray-500 text-xs mt-1">
            <a 
              href="https://arinelson.space/contato" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Quer construir o seu próprio HubLinks ou link da bio personalizado? Entre em contato.
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
