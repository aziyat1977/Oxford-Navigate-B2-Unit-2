import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <header className="h-screen w-full flex flex-col justify-center items-center text-center bg-radial-hero relative px-8 overflow-hidden">
      <FadeIn delay={0}>
        <div className="text-2xl md:text-4xl text-lux-gold uppercase tracking-[0.3em] mb-12 font-sans font-light">
          Unit 2.1 & 2.2 Masterclass
        </div>
      </FadeIn>
      
      <FadeIn delay={200}>
        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl 3xl:text-[10rem] text-lux-cream mb-10 tracking-tight leading-tight">
          I'll Never <br />
          <span className="text-lux-gold italic relative inline-block">
            Forget That Day
            <span className="absolute -bottom-4 left-0 w-full h-[3px] bg-lux-gold opacity-50"></span>
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={400}>
        <p className="text-lux-gray font-light max-w-5xl mx-auto text-2xl md:text-4xl opacity-80 leading-relaxed">
          A cinematic journey through Narrative Forms & Unbelievable Hoaxes.
        </p>
      </FadeIn>

      <div className="absolute bottom-12 animate-bounce text-lux-gold text-5xl opacity-70 cursor-pointer">
        ↓
      </div>
    </header>
  );
};

export default Hero;