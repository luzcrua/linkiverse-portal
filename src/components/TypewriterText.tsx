
import React, { useEffect, useState, memo } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = memo(({ 
  text, 
  delay = 3000, 
  className = "", 
  onComplete 
}: TypewriterTextProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const typingDuration = 3000; // 3 seconds for typing
    const stayDuration = delay; // how long to stay visible after typing

    // Call onComplete after typing finishes
    const typingTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, typingDuration);

    // Set visibility to false after stayDuration
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(false);
    }, typingDuration + stayDuration);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(visibilityTimeout);
    };
  }, [delay, onComplete]);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 
        className={`typewriter text-2xl md:text-3xl lg:text-4xl font-orbitron font-medium text-center ${className}`}
        aria-label={text}
      >
        {text}
      </h1>
    </div>
  );
});

TypewriterText.displayName = "TypewriterText";

export default TypewriterText;
