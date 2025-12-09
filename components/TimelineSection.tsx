import React, { useState } from 'react';
import FadeIn from './FadeIn';

const TimelineSection: React.FC = () => {
  // Ex 5a State
  const [balloonAnswers, setBalloonAnswers] = useState<{ [key: number]: string }>({});
  const [showBalloonResult, setShowBalloonResult] = useState(false);
  
  // Ex 6 State
  const [ruleAnswers, setRuleAnswers] = useState<{ [key: number]: string }>({});
  const [showRuleResult, setShowRuleResult] = useState(false);
  
  // Ex 7a State
  const [piltdownAnswers, setPiltdownAnswers] = useState<{ [key: number]: string }>({});
  const [showPiltdownResult, setShowPiltdownResult] = useState(false);

  // Ex 8b State
  const [vocabAnswers, setVocabAnswers] = useState<{ [key: number]: string }>({});
  const [showVocabResult, setShowVocabResult] = useState(false);

  // --- ANSWERS ---
  const correctBalloon = {
    1: 'as soon as',
    2: 'until',
    3: 'by the time',
    4: 'during',
    5: 'meanwhile',
    6: 'while'
  };

  const correctRules = {
      1: 'while',
      2: 'as soon as',
      3: 'meanwhile',
      4: 'by the time',
      5: 'during',
      6: 'until'
  }

  const correctPiltdown = {
    1: 'During',
    2: 'while',
    3: 'As soon as',
    4: 'during',
    5: 'until',
    6: 'Meanwhile',
    7: 'by the time'
  };
  
  const correctVocab = {
    1: 'announced',
    2: 'told',
    3: 'claimed',
    4: 'reported',
    5: 'admitted',
    6: 'invented'
  };

  // --- HANDLERS ---
  const checkBalloon = () => setShowBalloonResult(true);
  const checkRules = () => setShowRuleResult(true);
  const checkPiltdown = () => setShowPiltdownResult(true);
  const checkVocab = () => setShowVocabResult(true);

  // --- COMPONENTS ---
  const InlineInput = ({ id, answers, setAnswers, showResult, correctMap, width = "w-48" }: any) => {
    const val = answers[id] || "";
    // Robust logic to handle "by the time (that)" vs "by the time"
    const correctVal = correctMap[id].toLowerCase().replace('(that)', '').trim();
    const userVal = val.toLowerCase().trim();
    
    // Check if user included 'that' appropriately or omitted it
    const isCorrect = showResult && (
        userVal === correctVal || 
        userVal === correctMap[id].toLowerCase().replace('(', '').replace(')', '') // matches "by the time that"
    );
    
    const isWrong = showResult && !isCorrect;

    return (
        <input 
            type="text" 
            value={val}
            onChange={(e) => setAnswers({...answers, [id]: e.target.value})}
            className={`bg-transparent border-b-4 ${isCorrect ? 'border-green-500 text-green-400' : isWrong ? 'border-red-500 text-red-400' : 'border-gray-600 focus:border-lux-gold'} text-center outline-none mx-2 text-lux-cream text-3xl h-16 font-serif placeholder-white/10 ${width}`}
        />
    );
  };

  const InlineSelect = ({ id, options, answers, setAnswers, showResult, correctMap }: any) => {
      const val = answers[id] || "";
      const isCorrect = showResult && val === correctMap[id];
      const isWrong = showResult && val !== "" && !isCorrect;

      return (
        <select
            value={val}
            onChange={(e) => setAnswers({...answers, [id]: e.target.value})}
            className={`bg-transparent border-b-4 cursor-pointer py-2 mx-2 focus:outline-none transition-colors appearance-none font-bold text-3xl
                ${isCorrect ? 'border-green-500 text-green-400' : isWrong ? 'border-red-500 text-red-400' : 'border-lux-gold text-lux-gold'}`}
        >
            <option value="" disabled className="bg-black text-gray-500">Select...</option>
            {options.map((opt: string) => (
                <option key={opt} value={opt} className="bg-black text-lux-cream text-2xl">{opt}</option>
            ))}
        </select>
      );
  };

  return (
    <section className="py-32 px-8 lg:px-24 bg-lux-black text-lux-gray relative">
        <div className="max-w-[95%] mx-auto space-y-32">
            
            <FadeIn>
                <h2 className="font-serif text-7xl md:text-8xl text-center text-lux-cream mb-6">Sequencing the Lie</h2>
                <div className="flex justify-center">
                    <div className="h-2 w-64 bg-lux-gold"></div>
                </div>
                <p className="text-center text-lux-gold uppercase tracking-[0.3em] text-2xl mt-8">Unit 2.2 Grammar & Vocabulary</p>
            </FadeIn>

            {/* EXERCISE 5: BALLOON BOY CLOZE */}
            <FadeIn delay={100}>
                <div className="bg-[#111] p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                    <h3 className="font-serif text-5xl text-lux-cream mb-12 flex justify-between items-center border-b border-white/10 pb-8">
                        <span>The Balloon Boy Story</span>
                        <span className="text-2xl font-sans text-gray-500 uppercase tracking-widest border border-gray-600 px-6 py-2 rounded-full">Exercise 5a</span>
                    </h3>
                    
                    <div className="bg-black/50 p-8 mb-16 rounded-2xl text-2xl text-lux-gold font-mono text-center flex flex-wrap justify-center gap-8 border border-white/5">
                        <span className="bg-white/5 px-4 py-2 rounded">as soon as</span>
                        <span className="bg-white/5 px-4 py-2 rounded">by the time (that)</span>
                        <span className="bg-white/5 px-4 py-2 rounded">during</span>
                        <span className="bg-white/5 px-4 py-2 rounded">meanwhile</span>
                        <span className="bg-white/5 px-4 py-2 rounded">until</span>
                        <span className="bg-white/5 px-4 py-2 rounded">while</span>
                    </div>

                    <div className="space-y-12 leading-loose font-light text-3xl text-gray-300">
                        <p>
                            <span className="text-lux-gold font-serif mr-4 font-bold text-4xl">1.</span>
                            A couple, Richard and Mayumi Heene, let a large gas balloon float off into the air and then, 
                            <InlineInput id={1} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} width="w-64" /> 
                            it was high in the sky, they claimed that their six-year-old son was inside the balloon.
                        </p>
                        <p>
                            <span className="text-lux-gold font-serif mr-4 font-bold text-4xl">2.</span>
                            The police were informed and helicopters were sent up to track the balloon
                            <InlineInput id={2} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} /> 
                            they could find a safe way of getting him down.
                        </p>
                        <p>
                            <span className="text-lux-gold font-serif mr-4 font-bold text-4xl">3.</span>
                            <InlineInput id={3} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} width="w-64" /> 
                            the balloon landed an hour or so later, about 80 km away, the story was live on television.
                        </p>
                         <p>
                            <span className="text-lux-gold font-serif mr-4 font-bold text-4xl">4.</span>
                            When the boy was not found inside, the media reported that he had fallen out
                            <InlineInput id={4} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} /> 
                            the flight, and a huge search started.
                            <InlineInput id={5} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} width="w-64" /> 
                            , the boy was actually safe at home, hiding.
                        </p>
                        <p>
                            <span className="text-lux-gold font-serif mr-4 font-bold text-4xl">5.</span>
                            We can't say for sure because the couple never admitted it, but
                            <InlineInput id={6} answers={balloonAnswers} setAnswers={setBalloonAnswers} showResult={showBalloonResult} correctMap={correctBalloon} /> 
                            reporters were interviewing the family on TV, the boy accidentally mentioned that they'd done it to be on TV.
                        </p>
                    </div>

                    <div className="mt-16 flex justify-end">
                        <button onClick={checkBalloon} className="px-12 py-6 border-4 border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-2xl font-bold rounded-xl">
                            Check Answers
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* EXERCISE 6: GRAMMAR FOCUS */}
            <FadeIn delay={200}>
                <div className="border-4 border-lux-gold/30 p-16 rounded-[3rem] bg-gradient-to-br from-[#1a1a1a] to-black relative overflow-hidden">
                     {/* Decorative background element */}
                     <div className="absolute top-0 right-0 w-96 h-96 bg-lux-gold opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

                     <h3 className="font-serif text-5xl text-lux-gold mb-16 text-center">Grammar Focus: Time Linkers</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-2xl">
                        {[
                            { id: 1, text: "describes when something happened but not for how long", options: ["while", "until"] },
                            { id: 2, text: "describes an event that happens immediately after an event", options: ["as soon as", "by the time"] },
                            { id: 3, text: "describes a contrasting event that happens simultaneously", options: ["until", "meanwhile"] },
                            { id: 4, text: "describes an action that happened before the main events", options: ["by the time", "during"] },
                            { id: 5, text: "describes an action that happens at a point within this period", options: ["during", "as soon as"] },
                            { id: 6, text: "describes an action that continued up to a point and then stops", options: ["until", "during"] }
                        ].map((rule) => {
                             return (
                                <div key={rule.id} className="flex flex-col gap-6 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <span className="text-gray-300 leading-snug">{rule.text}</span>
                                    <div className="flex gap-4 mt-auto">
                                        {rule.options.map(opt => (
                                            <button 
                                                key={opt}
                                                onClick={() => setRuleAnswers({...ruleAnswers, [rule.id]: opt})}
                                                className={`flex-1 py-4 text-xl font-bold border-2 rounded-xl transition-colors uppercase tracking-wider
                                                    ${ruleAnswers[rule.id] === opt 
                                                        ? (showRuleResult 
                                                            ? (opt === correctRules[rule.id as keyof typeof correctRules] ? 'bg-green-600 border-green-600 text-white' : 'bg-red-600 border-red-600 text-white')
                                                            : 'bg-lux-gold text-black border-lux-gold')
                                                        : 'border-gray-600 text-gray-500 hover:border-lux-gold hover:text-white'}
                                                `}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                             )
                        })}
                     </div>
                     <div className="mt-16 flex justify-center">
                        <button onClick={checkRules} className="px-12 py-6 border-4 border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-2xl font-bold rounded-xl">
                            Check Rules
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* EXERCISE 7a: PILTDOWN MAN */}
            <FadeIn delay={300}>
                <div className="bg-[#151515] p-16 rounded-[3rem] border border-white/5 shadow-2xl">
                     <h3 className="font-serif text-5xl text-lux-cream mb-4">The Piltdown Man</h3>
                     <p className="text-xl font-sans text-gray-500 uppercase tracking-widest mb-12">Exercise 7a: Choose the best time linker</p>

                     <div className="prose prose-invert prose-2xl max-w-none font-light leading-loose text-gray-300">
                        <p>
                            <InlineSelect id={1} options={['During', 'While']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                            the early twentieth century, scientists were keen to find some evidence that would prove the link between early man and apes. In 1912 that evidence seemed to have been found
                            <InlineSelect id={2} options={['meanwhile', 'while']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                            Dawson and Woodward were digging on a site in Piltdown, in the south of England.
                        </p>
                        <p>
                             <InlineSelect id={3} options={['As soon as', 'Until']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                             they saw the jawbone and the skull, they decided that this must be the evidence science needed. Woodward claimed that both bones belonged to a human being who had lived about half a million years ago, 
                             <InlineSelect id={4} options={['by the time', 'during']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                             what is known as the Lower Pleistocene period.
                        </p>
                        <p>
                            Most scientists accepted this opinion
                            <InlineSelect id={5} options={['until', 'while']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                            nearly forty years later, when it was discovered that the Piltdown Man was a fake.
                            <InlineSelect id={6} options={['By the time', 'Meanwhile']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                            , Dawson, who most people consider responsible for making the fake, had died.
                        </p>
                         <p>
                            The Piltdown Man hoax truly damaged science because
                            <InlineSelect id={7} options={['while', 'by the time']} answers={piltdownAnswers} setAnswers={setPiltdownAnswers} showResult={showPiltdownResult} correctMap={correctPiltdown} />
                            the hoax was discovered, scientists had wasted nearly forty years believing a lie.
                         </p>
                     </div>

                    <div className="mt-16 flex justify-end">
                        <button onClick={checkPiltdown} className="px-12 py-6 border-4 border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-black transition-all uppercase tracking-widest text-2xl font-bold rounded-xl">
                            Check Story
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* EXERCISE 8b: VOCABULARY */}
            <FadeIn delay={400}>
                <div className="border-t border-white/10 pt-32">
                    <h3 className="font-serif text-5xl text-lux-gold mb-16">Vocabulary & Speaking</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        
                        {/* Box 1 */}
                        <div className="bg-white/5 p-12 rounded-[2rem] border-l-8 border-blue-500">
                             <div className="text-xl text-blue-400 mb-8 uppercase font-bold tracking-wider">announce • claim • interview • mention • tell</div>
                             <p className="leading-loose text-3xl font-light">
                                Police (1) <InlineInput id={1} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-48" />
                                yesterday that calls to the emergency 999 number had risen sharply. They (2) <InlineInput id={2} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-32" />
                                the public to ignore a hoax story which (3) <InlineInput id={3} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-48" />
                                that dialling 999 will charge your phone battery.
                             </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white/5 p-12 rounded-[2rem] border-l-8 border-amber-500">
                             <div className="text-xl text-amber-500 mb-8 uppercase font-bold tracking-wider">admit • inform • invent • keep quiet • report</div>
                             <p className="leading-loose text-3xl font-light">
                                The newspaper which recently (4) <InlineInput id={4} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-48" />
                                that Beijing was showing digital sunrises on huge screens because air pollution was too bad has now (5) <InlineInput id={5} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-48" />
                                that a journalist actually (6) <InlineInput id={6} answers={vocabAnswers} setAnswers={setVocabAnswers} showResult={showVocabResult} correctMap={correctVocab} width="w-48" />
                                the story.
                             </p>
                        </div>

                    </div>
                    <div className="mt-24 flex justify-center">
                        <button onClick={checkVocab} className="px-16 py-8 bg-lux-gold text-black font-sans text-3xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] rounded-2xl">
                            Check Vocabulary
                        </button>
                    </div>
                </div>
            </FadeIn>

        </div>
    </section>
  );
};

export default TimelineSection;