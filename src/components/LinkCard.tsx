
import React, { memo } from "react";
import { LinkItem } from "../data/links";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

const LinkCard = memo(({ link, index }: LinkCardProps) => {
  const { title, url, description, icon: Icon } = link;

  // Determine if this is an internal anchor link
  const isInternalLink = url.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
      className="w-full"
    >
      <a
        href={url}
        target={isInternalLink ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "group glass-card flex items-center p-4 md:p-5 rounded-2xl",
          "transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_30px_-4px_rgba(142,81,255,0.3)]",
          "focus:outline-none focus:ring-2 focus:ring-primary/50"
        )}
        aria-label={`Link para ${title}: ${description}`}
      >
        <div className="flex w-full items-center space-x-4">
          <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 backdrop-blur group-hover:bg-primary/30 transition-colors duration-300">
            <Icon 
              className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" 
              strokeWidth={1.5} 
              aria-hidden="true"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-orbitron font-medium text-white group-hover:text-glow transition-all duration-300">{title}</h2>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <div className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16667 10H15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4.16667L15.8333 10L10 15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
});

LinkCard.displayName = "LinkCard";

export default LinkCard;
