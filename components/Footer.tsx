import React from 'react';
import FadeIn from './FadeIn';

const Footer: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="h-[50vh] bg-lux-gold flex items-center justify-center text-center p-6 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <FadeIn className="relative z-10 max-w-xl flex flex-col items-center">
            <h2 className="text-black font-serif text-4xl mb-6 border-b-2 border-black pb-2 inline-block">Your Turn</h2>
            <p className="text-black/80 font-sans text-xl md:text-2xl font-semibold mb-6">
                "Create your own Hoax."
            </p>
            <p className="text-black/70 italic font-serif text-lg">
                Required vocabulary: <br/>
                <span className="not-italic font-bold mt-2 block tracking-wide">Claim • Admit • Meanwhile • As Soon As</span>
            </p>
            <button className="mt-10 px-8 py-3 bg-black text-lux-gold font-sans uppercase tracking-widest hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-2xl">
                Start Writing
            </button>
            
            <button 
                onClick={handlePrint}
                className="mt-16 text-black/50 hover:text-black text-sm uppercase tracking-widest font-bold flex items-center gap-2 transition-colors print:hidden"
            >
                <span>🖨️</span> Print Student Handout (PDF)
            </button>
        </FadeIn>
    </footer>
  );
};

export default Footer;