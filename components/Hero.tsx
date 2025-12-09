import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center bg-radial-hero relative px-4 overflow-hidden">
      <FadeIn delay={0}>
        <div className="text-lg md:text-xl text-lux-gold uppercase tracking-[0.25em] mb-8 font-sans font-light">
          Unit 2.1 & 2.2 Masterclass
        </div>
      </FadeIn>
      
      <FadeIn delay={200}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-lux-cream mb-6 tracking-tight leading-tight">
          I'll Never <br />
          <span className="text-lux-gold italic relative">
            Forget That Day
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-lux-gold opacity-50"></span>
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={400}>
        <p className="text-lux-gray font-light max-w-lg mx-auto text-lg md:text-xl opacity-80">
          A journey through Narrative Forms & Unbelievable Hoaxes.
        </p>
      </FadeIn>

      <div className="absolute bottom-8 animate-bounce text-lux-gold text-2xl opacity-70">
        ↓
      </div>
    </header>
  );
};

export default Hero;