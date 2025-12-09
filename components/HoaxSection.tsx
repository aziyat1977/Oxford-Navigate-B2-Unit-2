import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { WatermelonSvg, BalloonSvg, SkullSvg } from './ArtSvgs';

const HoaxSection: React.FC = () => {
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const correctQuiz = {
    1: '3', // Oldest (Piltdown)
    2: '1', // Online (Watermelon)
    3: '3', // Longest time (Piltdown)
    4: '2'  // Famous/Reality TV (Balloon)
  };

  const checkQuiz = () => setShowQuizResult(true);

  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 min-h-screen bg-gradient-to-b from-lux-black to-[#121212] text-lux-gray">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HEADER */}
        <div className="text-center">
            <FadeIn>
                <div className="text-lux-gold uppercase tracking-[0.2em] mb-4 text-sm font-bold">Unit 2.2</div>
                <h2 className="font-serif text-5xl md:text-6xl text-lux-cream mb-6">Unbelievable?</h2>
                <p className="max-w-2xl mx-auto text-lg font-light opacity-80">
                    Blue watermelons. Flying saucers. Ancient skulls. Why do we believe the lie?
                </p>
            </FadeIn>
        </div>

        {/* EXERCISE 1a: THE ARTICLES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <FadeIn delay={100} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                        <WatermelonSvg />
                        <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Hoax #1</div>
                    </div>
                    <div className="p-6 flex-1">
                        <h3 className="font-serif text-2xl text-blue-300 mb-4">The Moon Melon</h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Recently a picture has been circulating on the internet of a bright blue watermelon, described as a Japanese moon melon. It seems the fruit grows in Japan and eating it will change the taste of anything you eat afterwards, making sweet things taste sour, and so on. Each watermelon is supposed to cost about $200, but no one is actually offering it for sale, because it doesn't exist.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Story 2 */}
            <FadeIn delay={200} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col">
                     <div className="h-48 overflow-hidden relative">
                        <BalloonSvg />
                        <div className="absolute top-4 left-4 bg-gray-500 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Hoax #2</div>
                    </div>
                    <div className="p-6 flex-1">
                        <h3 className="font-serif text-2xl text-gray-300 mb-4">The Balloon Boy</h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            On October 15, 2009, the media reported that a six-year-old boy was inside a large silver balloon floating high in the sky. When the balloon landed, the boy was nowhere to be found, leading to fears that he had fallen out. However, it was later discovered that the whole story had been made up by the boy's parents, in an attempt to get a reality TV deal.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Story 3 */}
            <FadeIn delay={300} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col">
                     <div className="h-48 overflow-hidden relative">
                        <SkullSvg />
                         <div className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Hoax #3</div>
                    </div>
                    <div className="p-6 flex-1">
                        <h3 className="font-serif text-2xl text-amber-600 mb-4">The Piltdown Man</h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            In the early twentieth century, scientists were keen to find evidence linking early man and apes. In 1912, evidence was found in Piltdown, England: a human skull with an ape-like jaw. For more than thirty years, everyone believed this 'Piltdown Man' was genuine; but in 1953 researchers discovered it was a fake, made from an ancient human skull and a modern ape jaw.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* EXERCISE 2: COMPREHENSION */}
        <FadeIn delay={400}>
            <div className="bg-lux-charcoal p-8 md:p-12 rounded-lg border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h3 className="font-serif text-3xl text-lux-cream">Analyze the Stories</h3>
                    <p className="text-xs uppercase tracking-widest text-lux-gold">Exercise 2: Which story...?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { q: 1, text: "is the oldest?" },
                        { q: 2, text: "is going round online?" },
                        { q: 3, text: "did people believe for the longest time?" },
                        { q: 4, text: "was a result of wanting to be famous?" }
                    ].map((item) => (
                        <div key={item.q} className="flex items-center justify-between p-4 bg-black/40 rounded border border-white/5 hover:border-lux-gold/30 transition-colors">
                            <span className="text-gray-300">{item.q}. {item.text}</span>
                            <div className="flex gap-2">
                                {[1, 2, 3].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => setQuizAnswers(prev => ({ ...prev, [item.q]: String(num) }))}
                                        className={`w-8 h-8 rounded-full border text-xs font-bold transition-all
                                            ${quizAnswers[item.q] === String(num) 
                                                ? 'bg-lux-gold text-black border-lux-gold' 
                                                : 'border-gray-600 text-gray-500 hover:border-lux-gold hover:text-lux-gold'
                                            }
                                            ${showQuizResult && correctQuiz[item.q as keyof typeof correctQuiz] === String(num) && 'ring-2 ring-green-500'}
                                            ${showQuizResult && quizAnswers[item.q] === String(num) && correctQuiz[item.q as keyof typeof correctQuiz] !== String(num) && 'ring-2 ring-red-500'}
                                        `}
                                    >
                                        #{num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 flex justify-end">
                     <button onClick={checkQuiz} className="px-6 py-2 border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-sm">
                        Check Analysis
                    </button>
                </div>
            </div>
        </FadeIn>

        {/* EXERCISE 4: DISCUSSION */}
        <FadeIn delay={500}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-16">
                 <div>
                    <h3 className="font-serif text-3xl text-lux-gold mb-6">Motivation</h3>
                    <p className="text-gray-400 mb-4">
                        <strong className="text-white">Ex 4b.</strong> Why do people carry out hoaxes? Select the reasons mentioned in the radio programme (inferred).
                    </p>
                     <ul className="space-y-4">
                        {[
                            "To make money", 
                            "To become famous / Reality TV", 
                            "To prove a scientific theory",
                            "Just for a laugh"
                        ].map((reason, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-lux-gray">
                                <input type="checkbox" className="accent-lux-gold w-5 h-5" />
                                <span>{reason}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
                 <div className="bg-black/40 p-8 rounded border border-white/5 italic text-center">
                    <p className="text-xl mb-4 text-lux-cream">"Have you heard any of these stories before? Or similar ones?"</p>
                    <div className="w-12 h-1 bg-lux-gold mx-auto opacity-50"></div>
                 </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default HoaxSection;
