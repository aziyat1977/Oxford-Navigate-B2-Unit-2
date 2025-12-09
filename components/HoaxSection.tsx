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
    <section className="py-32 px-8 lg:px-24 min-h-screen bg-gradient-to-b from-lux-black to-[#121212] text-lux-gray">
      <div className="max-w-[95%] mx-auto space-y-32">
        
        {/* HEADER */}
        <div className="text-center">
            <FadeIn>
                <div className="text-lux-gold uppercase tracking-[0.2em] mb-8 text-3xl font-bold">Unit 2.2</div>
                <h2 className="font-serif text-8xl md:text-[10rem] text-lux-cream mb-12">Unbelievable?</h2>
                <p className="max-w-6xl mx-auto text-4xl font-light opacity-80 leading-relaxed">
                    Blue watermelons. Flying saucers. Ancient skulls. Why do we believe the lie?
                </p>
            </FadeIn>
        </div>

        {/* EXERCISE 1a: THE ARTICLES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Story 1 */}
            <FadeIn delay={100} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-[3rem] overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col shadow-2xl">
                    <div className="h-[25rem] overflow-hidden relative w-full">
                        <WatermelonSvg />
                        <div className="absolute top-8 left-8 bg-blue-500 text-white text-2xl font-bold px-6 py-3 uppercase tracking-wider rounded-xl">Hoax #1</div>
                    </div>
                    <div className="p-12 flex-1 flex flex-col">
                        <h3 className="font-serif text-5xl text-blue-300 mb-8">The Moon Melon</h3>
                        <p className="text-2xl leading-relaxed text-gray-400 font-light flex-1">
                            Recently a picture has been circulating on the internet of a bright blue watermelon, described as a Japanese moon melon. It seems the fruit grows in Japan and eating it will change the taste of anything you eat afterwards, making sweet things taste sour, and so on. Each watermelon is supposed to cost about $200, but no one is actually offering it for sale, because it doesn't exist.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Story 2 */}
            <FadeIn delay={200} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-[3rem] overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col shadow-2xl">
                     <div className="h-[25rem] overflow-hidden relative w-full">
                        <BalloonSvg />
                        <div className="absolute top-8 left-8 bg-gray-500 text-white text-2xl font-bold px-6 py-3 uppercase tracking-wider rounded-xl">Hoax #2</div>
                    </div>
                    <div className="p-12 flex-1 flex flex-col">
                        <h3 className="font-serif text-5xl text-gray-300 mb-8">The Balloon Boy</h3>
                        <p className="text-2xl leading-relaxed text-gray-400 font-light flex-1">
                            On October 15, 2009, the media reported that a six-year-old boy was inside a large silver balloon floating high in the sky. When the balloon landed, the boy was nowhere to be found, leading to fears that he had fallen out. However, it was later discovered that the whole story had been made up by the boy's parents, in an attempt to get a reality TV deal.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Story 3 */}
            <FadeIn delay={300} className="h-full">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-[3rem] overflow-hidden h-full hover:border-lux-gold/50 transition-colors group flex flex-col shadow-2xl">
                     <div className="h-[25rem] overflow-hidden relative w-full">
                        <SkullSvg />
                         <div className="absolute top-8 left-8 bg-amber-700 text-white text-2xl font-bold px-6 py-3 uppercase tracking-wider rounded-xl">Hoax #3</div>
                    </div>
                    <div className="p-12 flex-1 flex flex-col">
                        <h3 className="font-serif text-5xl text-amber-600 mb-8">The Piltdown Man</h3>
                        <p className="text-2xl leading-relaxed text-gray-400 font-light flex-1">
                            In the early twentieth century, scientists were keen to find evidence linking early man and apes. In 1912, evidence was found in Piltdown, England: a human skull with an ape-like jaw. For more than thirty years, everyone believed this 'Piltdown Man' was genuine; but in 1953 researchers discovered it was a fake, made from an ancient human skull and a modern ape jaw.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* EXERCISE 2: COMPREHENSION */}
        <FadeIn delay={400}>
            <div className="bg-lux-charcoal p-16 rounded-[3rem] border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <h3 className="font-serif text-6xl text-lux-cream">Analyze the Stories</h3>
                    <p className="text-3xl uppercase tracking-widest text-lux-gold">Exercise 2: Which story...?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {[
                        { q: 1, text: "is the oldest?" },
                        { q: 2, text: "is going round online?" },
                        { q: 3, text: "did people believe for the longest time?" },
                        { q: 4, text: "was a result of wanting to be famous?" }
                    ].map((item) => (
                        <div key={item.q} className="flex flex-col xl:flex-row xl:items-center justify-between p-10 bg-black/40 rounded-3xl border border-white/5 hover:border-lux-gold/30 transition-colors gap-8">
                            <span className="text-gray-300 text-3xl font-light">{item.q}. {item.text}</span>
                            <div className="flex gap-6">
                                {[1, 2, 3].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => setQuizAnswers(prev => ({ ...prev, [item.q]: String(num) }))}
                                        className={`w-24 h-24 rounded-2xl text-4xl font-serif font-bold transition-all transform hover:scale-110 shadow-lg border-2
                                            ${quizAnswers[item.q] === String(num)
                                                ? (showQuizResult 
                                                    ? (correctQuiz[item.q as keyof typeof correctQuiz] === String(num) ? 'bg-green-600 border-green-500 text-white' : 'bg-red-600 border-red-500 text-white')
                                                    : 'bg-lux-gold border-lux-gold text-black scale-110')
                                                : 'bg-transparent border-gray-700 text-gray-500 hover:border-lux-gold hover:text-lux-gold'}
                                        `}
                                    >
                                        #{num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <button onClick={checkQuiz} className="px-16 py-8 border-4 border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-3xl font-bold rounded-2xl">
                        Check Comprehension
                    </button>
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default HoaxSection;