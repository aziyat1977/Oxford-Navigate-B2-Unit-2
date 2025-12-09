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
    2: ['remember', 'remembers', 'remembered'], 
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

  const checkVocabInput = (id: number, val: string) => {
    const validAnswers = correctVocabAnswers[id as keyof typeof correctVocabAnswers];
    return validAnswers ? validAnswers.includes(val.trim().toLowerCase()) : false;
  };

  // Helper for inline select in story
  const InlineSelect = ({ id, options }: { id: number, options: string[] }) => {
    const isCorrect = showStoryResults && storyAnswers[id] === correctStoryAnswers[id as keyof typeof correctStoryAnswers];
    const isWrong = showStoryResults && storyAnswers[id] !== correctStoryAnswers[id as keyof typeof correctStoryAnswers];
    
    return (
      <span className="inline-block mx-2 relative align-middle">
        <select 
          onChange={(e) => handleStoryChange(id, e.target.value)}
          className={`appearance-none bg-transparent border-b-4 font-serif italic cursor-pointer py-1 pr-10 pl-2 text-3xl focus:outline-none transition-colors h-14
            ${isCorrect ? 'border-green-500 text-green-400' : 
              isWrong ? 'border-red-500 text-red-400' : 
              'border-lux-gold text-lux-cream hover:text-lux-gold'}`}
          value={storyAnswers[id] || ""}
        >
          <option value="" disabled className="bg-lux-black text-gray-500">Select...</option>
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-lux-black text-lux-cream text-2xl">{opt}</option>
          ))}
        </select>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-lux-gold text-lg">▼</span>
      </span>
    );
  };

  return (
    <section className="py-32 px-8 lg:px-24 bg-lux-black text-lux-gray min-h-screen">
      <div className="max-w-[95%] mx-auto space-y-32">
        
        {/* HEADER & LEAD-IN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
                <h2 className="font-serif text-7xl md:text-9xl text-lux-cream leading-tight">A Bad Day <br/> at Work</h2>
                <div className="w-48 h-3 bg-lux-gold mt-8"></div>
            </FadeIn>
            
            <FadeIn delay={200}>
                <div className="bg-[#111] p-12 rounded-3xl border border-white/5 shadow-2xl">
                    <p className="text-lux-gold font-bold uppercase tracking-[0.2em] text-2xl mb-8">Reflection</p>
                    <p className="italic text-4xl md:text-5xl font-serif text-lux-cream leading-normal">
                        "What do you consider to be a bad day at work? How could a hippo be related to it?"
                    </p>
                </div>
            </FadeIn>
        </div>

        {/* EXERCISE 3: THE STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Sticky Image for Smart board context - Stays on left while scrolling text on right */}
            <div className="lg:col-span-5 relative hidden lg:block">
                 <FadeIn blur className="h-[80vh] w-full sticky top-24">
                    <div className="w-full h-full bg-[#111] overflow-hidden rounded-3xl relative border border-lux-gold/20 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <HippoSvg />
                    </div>
                </FadeIn>
            </div>

            <div className="lg:col-span-7">
                <FadeIn delay={200}>
                    <div className="prose prose-invert prose-2xl md:prose-3xl max-w-none font-light leading-loose text-gray-300">
                        <p className="mb-12">
                            I'll never <InlineSelect id={1} options={['forget', 'remind']} /> that day. It started out as just an ordinary day at work. I never <InlineSelect id={2} options={['expected', 'wondered']} /> that within a few hours I would be in great danger!
                        </p>
                        <p className="mb-12">
                            I was 27 and had been a river guide for several years, taking people down the Zambezi River. The sun was setting and we were reaching the end of the tour one evening, when something knocked into the boat.
                        </p>
                        <p className="mb-12">
                            Thinking it was the other boat, I turned round to push it away, when suddenly everything went dark. I was stuck inside something, I managed to free one hand and felt around - my hand touched a hippo's nose. It was only then that I <InlineSelect id={3} options={['believed', 'realized']} /> I was underwater, my upper body actually in the hippo's mouth! I tried to move as much as I could, and when he opened his mouth, I managed to swim away. But seconds later, he struck again, pulling me under the water. I <InlineSelect id={4} options={['remember', 'remind']} /> looking up at the surface of the water, and <InlineSelect id={5} options={['recognizing', 'wondering']} /> which of us could hold his breath the longest.
                        </p>
                        <p className="mb-12">
                            Suddenly the hippo released me. By chance, a medical team was nearby, and they helped me to reach a hospital. Meanwhile, the hippo had quietly <InlineSelect id={6} options={['appeared', 'disappeared']} />.
                        </p>
                        <p className="mb-12">
                            I <InlineSelect id={7} options={['believe', 'expect']} />, though, that I met him one more time. Two years later I was travelling down the Zambezi again. Being there obviously <InlineSelect id={8} options={['recognized', 'reminded']} /> me of what had happened. Then, just as we were going past the same place in the river, a huge hippo suddenly <InlineSelect id={9} options={['appeared', 'realized']} />.
                        </p>
                        <p className="mb-12">
                            I <InlineSelect id={10} options={['screamed', 'whispered']} /> so loudly that those with me said they'd never heard anything like it. He went back under the water and was never seen again. I'm sure I <InlineSelect id={11} options={['recognized', 'realized']} /> the same hippo, still just as angry.
                        </p>
                    </div>
                    
                    <div className="mt-24 flex justify-end">
                        <button onClick={checkStory} className="px-12 py-6 border-4 border-lux-gold text-lux-gold text-3xl font-bold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                            Check Story
                        </button>
                    </div>
                </FadeIn>
            </div>
        </div>

        {/* EXERCISE 4a: VOCABULARY */}
        <FadeIn delay={300}>
            <div className="border-t border-white/10 pt-32">
                <h3 className="font-serif text-6xl text-lux-gold mb-16">Vocabulary Focus</h3>
                <div className="bg-[#151515] p-16 rounded-3xl border border-white/5">
                    <p className="text-2xl text-gray-400 mb-12 uppercase tracking-wider">Complete using: <span className="text-white font-bold">believe, expect, realize, recognize, remember, remind, wonder</span></p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 text-2xl font-light">
                        {[
                            {id: 1, text: "Wait... I didn't ____ you were here!"},
                            {id: 2, text: "I can't ____ where I put my keys."},
                            {id: 3, text: "I was ____ if you'd like to join us?"},
                            {id: 4, text: "Do you ____ in ghosts?"},
                            {id: 5, text: "I didn't ____ him with his new haircut."},
                            {id: 6, text: "Please ____ me to call mom."},
                            {id: 7, text: "I didn't ____ the exam to be so hard."}
                        ].map((item) => (
                             <div key={item.id} className="flex items-center gap-6 group">
                                <span className="text-lux-gold font-serif text-3xl">{item.id}.</span>
                                <div className="flex-1 border-b-2 border-gray-700 pb-2 group-focus-within:border-lux-gold transition-colors relative">
                                    {item.text.split('____')[0]}
                                    <input 
                                        type="text" 
                                        className={`bg-transparent outline-none w-48 text-center font-bold text-white placeholder-gray-600 focus:placeholder-transparent
                                        ${showVocabResults 
                                            ? (checkVocabInput(item.id, vocabAnswers[item.id] || '') ? 'text-green-400' : 'text-red-400') 
                                            : ''}`}
                                        placeholder="?"
                                        onChange={(e) => setVocabAnswers({...vocabAnswers, [item.id]: e.target.value})}
                                    />
                                    {item.text.split('____')[1]}
                                </div>
                             </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <button onClick={checkVocab} className="px-10 py-5 bg-lux-gold text-black font-bold text-2xl uppercase tracking-widest hover:bg-white transition-all rounded shadow-lg">
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