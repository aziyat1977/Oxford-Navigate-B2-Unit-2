import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "", blur = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const transitionStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: '1000ms',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const baseClasses = "transform transition-all";
  const visibleClasses = isVisible 
    ? "opacity-100 translate-y-0 blur-0" 
    : `opacity-0 translate-y-12 ${blur ? 'blur-sm' : ''}`;

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${visibleClasses} ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};

export default FadeIn;