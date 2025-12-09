import React from 'react';
import Hero from './components/Hero';
import NarrativeSection from './components/NarrativeSection';
import GrammarSection from './components/GrammarSection';
import HoaxSection from './components/HoaxSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-lux-black selection:bg-lux-gold selection:text-black">
      <Hero />
      <NarrativeSection />
      <GrammarSection />
      <HoaxSection />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default App;