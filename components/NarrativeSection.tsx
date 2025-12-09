import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { HippoSvg } from './ArtSvgs';

const NarrativeSection: React.FC = () => {
  // Exercise 3 State
  const [storyAnswers, setStoryAnswers] = useState<{ [key: number]: string }>({});
  const [showStoryResults, setShowStoryResults] = useState(false);

  // Exercise 4a State
  const [vocabAnswers, setVocabAnswers] = useState<{ [key: number]: string }>({});
  const [showVocabResults, setShowVocabResults] = useState(false);

  const correctStoryAnswers = {
    1: 'forget', 2: 'expected', 3: 'realized', 4: 'remember', 
    5: 'wondering', 6: 'disappeared', 7: 'believe', 
    8: 'reminded', 9: 'appeared', 10: 'screamed', 11: 'recognized'
  };

  const correctVocabAnswers = {
    1: ['realize'], 
    2: ['remember', 'remembers', 'remembered'], // Accepted forms
    3: ['wondering'], 
    4: ['believe'], 
    5: ['recognized'], 
    6: ['remind'], 
    7: ['expect']
  };

  const handleStoryChange = (id: number, val: string) => {
    setStoryAnswers(prev => ({ ...prev, [id]: val }));
  };

  const checkStory = () => setShowStoryResults(true);
  const checkVocab = () => setShowVocabResults(true);

  // Helper for inline select in story
  const InlineSelect = ({ id, options }: { id: number, options: string[] }) => {
    const isCorrect = showStoryResults && storyAnswers[id] === correctStoryAnswers[id as keyof typeof correctStoryAnswers];
    const isWrong = showStoryResults && storyAnswers[id] !== correctStoryAnswers[id as keyof typeof correctStoryAnswers];
    
    return (
      <span className="inline-block mx-1 relative">
        <select 
          onChange={(e) => handleStoryChange(id, e.target.value)}
          className={`appearance-none bg-transparent border-b-2 font-serif italic cursor-pointer py-0.5 pr-6 focus:outline-none transition-colors
            ${isCorrect ? 'border-green-500 text-green-400' : 
              isWrong ? 'border-red-500 text-red-400' : 
              'border-lux-gold text-lux-cream hover:text-lux-gold'}`}
          value={storyAnswers[id] || ""}
        >
          <option value="" disabled className="bg-lux-black text-gray-500">Select...</option>
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-lux-black text-lux-cream">{opt}</option>
          ))}
        </select>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs opacity-50">▼</span>
      </span>
    );
  };

  // Helper for vocab input
  const checkVocabInput = (id: number, val: string) => {
      const answers = correctVocabAnswers[id as keyof typeof correctVocabAnswers];
      return answers.includes(val.toLowerCase().trim());
  };

  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-lux-black text-lux-gray">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* HEADER & LEAD-IN (Ex 1 & 2) */}
        <div className="text-center space-y-8">
            <FadeIn>
                <h2 className="font-serif text-5xl md:text-6xl text-lux-cream">A Bad Day at Work</h2>
                <div className="w-24 h-1 bg-lux-gold mx-auto mt-6"></div>
            </FadeIn>
            
            <FadeIn delay={200}>
                <div className="bg-[#111] p-6 rounded border border-white/5 text-left md:text-center">
                    <p className="text-lux-gold font-bold uppercase tracking-widest text-xs mb-3">Reflection</p>
                    <p className="italic text-lg">
                        "What do you consider to be a bad day at work? How could a hippo be related to it?"
                    </p>
                </div>
            </FadeIn>
        </div>

        {/* EXERCISE 3: THE STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                 <FadeIn blur className="h-[400px] w-full sticky top-24">
                    <div className="w-full h-full bg-[#111] overflow-hidden rounded-sm relative border border-lux-gold/20 group shadow-2xl">
                        {/* REPLACED IMG WITH SVG */}
                        <HippoSvg />
                    </div>
                </FadeIn>
            </div>

            <div className="lg:col-span-8">
                <FadeIn delay={200}>
                    <div className="prose prose-invert prose-lg max-w-none font-light leading-loose">
                        <p>
                            I'll never <InlineSelect id={1} options={['forget', 'remind']} /> that day. It started out as just an ordinary day at work. I never <InlineSelect id={2} options={['expected', 'wondered']} /> that within a few hours I would be in great danger!
                        </p>
                        <p>
                            I was 27 and had been a river guide for several years, taking people down the Zambezi River. The sun was setting and we were reaching the end of the tour one evening, when something knocked into the boat.
                        </p>
                        <p>
                            Thinking it was the other boat, I turned round to push it away, when suddenly everything went dark. I was stuck inside something, I managed to free one hand and felt around - my hand touched a hippo's nose. It was only then that I <InlineSelect id={3} options={['believed', 'realized']} /> I was underwater, my upper body actually in the hippo's mouth! I tried to move as much as I could, and when he opened his mouth, I managed to swim away. But seconds later, he struck again, pulling me under the water. I <InlineSelect id={4} options={['remember', 'remind']} /> looking up at the surface of the water, and <InlineSelect id={5} options={['recognizing', 'wondering']} /> which of us could hold his breath the longest.
                        </p>
                        <p>
                            Suddenly the hippo released me. By chance, a medical team was nearby, and they helped me to reach a hospital. Meanwhile, the hippo had quietly <InlineSelect id={6} options={['appeared', 'disappeared']} />.
                        </p>
                        <p>
                            I <InlineSelect id={7} options={['believe', 'expect']} />, though, that I met him one more time. Two years later I was travelling down the Zambezi again. Being there obviously <InlineSelect id={8} options={['recognized', 'reminded']} /> me of what had happened. Then, just as we were going past the same place in the river, a huge hippo suddenly <InlineSelect id={9} options={['appeared', 'realized']} />.
                        </p>
                        <p>
                            I <InlineSelect id={10} options={['screamed', 'whispered']} /> so loudly that those with me said they'd never heard anything like it. He went back under the water and was never seen again. I'm sure I <InlineSelect id={11} options={['recognized', 'realized']} /> the same hippo, still just as angry.
                        </p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                        <button onClick={checkStory} className="px-6 py-2 border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-sm">
                            Check Story
                        </button>
                    </div>
                </FadeIn>
            </div>
        </div>

        {/* EXERCISE 4a: VOCABULARY */}
        <FadeIn delay={300}>
            <div className="border-t border-white/10 pt-16">
                <h3 className="font-serif text-3xl text-lux-gold mb-8">Vocabulary Focus</h3>
                <div className="bg-[#151515] p-8 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Complete using: <span className="text-white">believe, expect, realize, recognize, remember, remind, wonder</span></p>
                    
                    <div className="space-y-6">
                        {/* Q1 */}
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-lux-gold font-serif">1.</span>
                            <span>When did the writer</span>
                            <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(1, vocabAnswers[1]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 1: e.target.value}))}
                            />
                            <span>that his head was inside a hippo?</span>
                        </div>

                        {/* Q2 */}
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-lux-gold font-serif">2.</span>
                            <span>Why do you think the writer</span>
                            <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(2, vocabAnswers[2]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 2: e.target.value}))}
                            />
                            <span>so clearly what he was seeing and</span>
                             <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(3, vocabAnswers[3]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 3: e.target.value}))}
                            />
                            <span>about while he was underwater?</span>
                        </div>

                         {/* Q3 */}
                         <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-lux-gold font-serif">3.</span>
                            <span>Do you</span>
                            <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(4, vocabAnswers[4]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 4: e.target.value}))}
                            />
                            <span>the writer really</span>
                             <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(5, vocabAnswers[5]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 5: e.target.value}))}
                            />
                            <span>the same hippo, or did it just</span>
                             <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(6, vocabAnswers[6]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 6: e.target.value}))}
                            />
                            <span>him of the attack?</span>
                        </div>

                        {/* Q4 */}
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-lux-gold font-serif">4.</span>
                            <span>Did you</span>
                            <input 
                                type="text" 
                                className={`bg-transparent border-b ${showVocabResults && checkVocabInput(7, vocabAnswers[7]||'') ? 'border-green-500 text-green-400' : showVocabResults ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} outline-none w-32 text-center text-lux-cream`}
                                onChange={(e) => setVocabAnswers(prev => ({...prev, 7: e.target.value}))}
                            />
                            <span>the writer to return to being a guide?</span>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                        <button onClick={checkVocab} className="px-6 py-2 border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-sm">
                            Check Vocabulary
                        </button>
                    </div>
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default NarrativeSection;