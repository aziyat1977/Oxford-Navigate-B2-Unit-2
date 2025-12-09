import React, { useState } from 'react';
import FadeIn from './FadeIn';

const GrammarSection: React.FC = () => {
  // Ex 7a State
  const [escapeAnswers, setEscapeAnswers] = useState<{ [key: number]: string }>({});
  const [showEscapeResults, setShowEscapeResults] = useState(false);

  // Ex 5 State
  const [matchAnswers, setMatchAnswers] = useState<{ [key: string]: string }>({});
  
  const correctEscape = {
    1: ['was'],
    2: ['decided'],
    3: ['was looking'],
    4: ['fell'],
    5: ['broke'],
    6: ['tried'],
    7: ['wasn\'t working', 'did not work', 'didn\'t work'],
    8: ['had dropped'],
    9: ['were looking', 'looked'],
    10: ['found'],
    11: ['had brought'],
    12: ['survived', 'had survived']
  };

  const checkEscape = () => setShowEscapeResults(true);

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] min-h-screen text-lux-gray">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* PART 1: CARDS & EXERCISE 5 */}
        <div>
            <FadeIn>
                <h2 className="font-serif text-3xl md:text-5xl text-center text-lux-cream mb-4">The Architecture of a Story</h2>
                <p className="text-center text-lux-gray/50 mb-16 uppercase tracking-widest text-sm">Unit 2.1 Grammar Focus</p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Past Simple Card */}
                <FadeIn delay={0}>
                    <div className="h-full bg-white/5 backdrop-blur-md p-6 border-l-2 border-lux-gold rounded-r-lg hover:bg-white/10 transition-colors flex flex-col">
                        <h3 className="font-serif text-2xl text-lux-gold mb-2">01. Past Simple</h3>
                        <p className="text-gray-400 mb-4 text-sm font-light">Main events in a story. A completed action.</p>
                        
                        {/* Timeline SVG - Improved */}
                        <div className="mb-6 h-16 w-full">
                           <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                {/* Base Line */}
                                <line x1="10" y1="30" x2="190" y2="30" stroke="#444" strokeWidth="2" strokeLinecap="round" />
                                
                                {/* Marker for Now */}
                                <line x1="170" y1="20" x2="170" y2="40" stroke="#888" strokeWidth="2" />
                                <text x="170" y="55" fill="#888" fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NOW</text>
                                
                                {/* Past Event - Cross or Dot */}
                                <circle cx="80" cy="30" r="6" fill="#d4af37" />
                                <text x="80" y="15" fill="#d4af37" fontSize="11" textAnchor="middle" fontFamily="serif" fontStyle="italic">Action</text>
                                
                                {/* Arrow for clarity */}
                                <path d="M 190 30 L 185 27 L 185 33 Z" fill="#444" />
                           </svg>
                        </div>

                        <div className="p-4 bg-black/40 rounded border border-white/5 mt-auto">
                            <p className="font-serif italic text-lux-cream">"Something <span className="text-lux-gold">knocked</span> into the boat."</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Past Continuous Card */}
                <FadeIn delay={150}>
                    <div className="h-full bg-white/5 backdrop-blur-md p-6 border-l-2 border-lux-gold rounded-r-lg hover:bg-white/10 transition-colors flex flex-col">
                        <h3 className="font-serif text-2xl text-lux-gold mb-2">02. Past Continuous</h3>
                        <p className="text-gray-400 mb-4 text-sm font-light">Background events or actions in progress.</p>
                        
                        {/* Timeline SVG - Improved */}
                        <div className="mb-6 h-16 w-full">
                           <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                <line x1="10" y1="30" x2="190" y2="30" stroke="#444" strokeWidth="2" strokeLinecap="round" />
                                <line x1="170" y1="20" x2="170" y2="40" stroke="#888" strokeWidth="2" />
                                <text x="170" y="55" fill="#888" fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NOW</text>
                                
                                {/* Continuous Event - Wavy line or Block */}
                                <path d="M 40 30 Q 50 20 60 30 T 80 30 T 100 30 T 120 30" stroke="#d4af37" strokeWidth="4" fill="none" opacity="0.8" />
                                <rect x="35" y="26" width="90" height="8" fill="url(#pattern-stripe)" opacity="0.2" />
                                
                                <text x="80" y="15" fill="#d4af37" fontSize="11" textAnchor="middle" fontFamily="serif" fontStyle="italic">In Progress</text>
                                <path d="M 190 30 L 185 27 L 185 33 Z" fill="#444" />
                           </svg>
                        </div>

                        <div className="p-4 bg-black/40 rounded border border-white/5 mt-auto">
                            <p className="font-serif italic text-lux-cream">"The sun <span className="text-lux-gold">was setting</span>..."</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Past Perfect Card */}
                <FadeIn delay={300}>
                    <div className="h-full bg-white/5 backdrop-blur-md p-6 border-l-2 border-lux-gold rounded-r-lg hover:bg-white/10 transition-colors flex flex-col">
                        <h3 className="font-serif text-2xl text-lux-gold mb-2">03. Past Perfect</h3>
                        <p className="text-gray-400 mb-4 text-sm font-light">Events before the main past story.</p>
                        
                        {/* Timeline SVG - Improved */}
                        <div className="mb-6 h-16 w-full">
                           <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                <line x1="10" y1="30" x2="190" y2="30" stroke="#444" strokeWidth="2" strokeLinecap="round" />
                                <line x1="170" y1="20" x2="170" y2="40" stroke="#888" strokeWidth="2" />
                                <text x="170" y="55" fill="#888" fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NOW</text>
                                
                                {/* Main Past Event */}
                                <circle cx="120" cy="30" r="4" fill="#666" />
                                <text x="120" y="50" fill="#666" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Main Story</text>
                                
                                {/* Earlier Event */}
                                <circle cx="50" cy="30" r="6" fill="#d4af37" />
                                {/* Curve connecting them */}
                                <path d="M 50 30 Q 85 10 120 30" stroke="#d4af37" fill="none" strokeWidth="1" strokeDasharray="3,3" />
                                <text x="50" y="15" fill="#d4af37" fontSize="11" textAnchor="middle" fontFamily="serif" fontStyle="italic">Earlier</text>
                                <path d="M 190 30 L 185 27 L 185 33 Z" fill="#444" />
                           </svg>
                        </div>

                        <div className="p-4 bg-black/40 rounded border border-white/5 mt-auto">
                            <p className="font-serif italic text-lux-cream">"I <span className="text-lux-gold">had been</span> a guide for years."</p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* EXERCISE 5: MATCHING */}
            <FadeIn delay={300}>
                <div className="bg-[#111] p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lux-gold blur-[100px] opacity-10"></div>
                    <h3 className="font-serif text-2xl text-lux-cream mb-8">Match verbs to descriptions (Ex. 5)</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {[
                                { id: '1', text: "1. I had been a river guide..." },
                                { id: '2', text: "2. The sun was setting..." },
                                { id: '3', text: "3. ...something knocked into the boat." },
                            ].map((item) => (
                                <div key={item.id} className="p-4 border border-white/10 rounded bg-black/40 flex justify-between items-center group hover:border-lux-gold/50 transition-colors">
                                    <span>{item.text}</span>
                                    <select 
                                        className="bg-lux-charcoal border border-gray-700 rounded px-2 py-1 text-sm focus:border-lux-gold outline-none ml-4 w-40"
                                        onChange={(e) => setMatchAnswers(prev => ({...prev, [item.id]: e.target.value}))}
                                    >
                                        <option value="">Select Function...</option>
                                        <option value="background">Background</option>
                                        <option value="main">Main Event</option>
                                        <option value="before">Before Story</option>
                                    </select>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center space-y-4 text-sm text-gray-400 italic p-6 bg-black/20 rounded">
                            <p>a) Setting the background to the story</p>
                            <p>b) The main events in a story</p>
                            <p>c) An event that happened before the main events</p>
                            
                            {Object.keys(matchAnswers).length === 3 && (
                                <div className="mt-4 text-lux-gold animate-pulse">
                                    {matchAnswers['1'] === 'before' && matchAnswers['2'] === 'background' && matchAnswers['3'] === 'main' 
                                        ? "Perfect match." 
                                        : "Check your logic again."}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* PART 2: A LUCKY ESCAPE (Ex 7a) */}
        <FadeIn delay={400}>
            <div className="border-t border-white/10 pt-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                    <div>
                        <h3 className="font-serif text-4xl text-lux-gold mb-2">A Lucky Escape</h3>
                        <p className="text-gray-500 uppercase tracking-widest text-xs">Complete with correct verb forms</p>
                    </div>
                     <div className="bg-lux-charcoal px-4 py-2 rounded text-xs text-gray-400 mt-4 md:mt-0">
                        Verbs: be, decide, look, fall, break, try, work, drop, find, bring, survive
                    </div>
                </div>

                <div className="bg-[#151515] p-8 md:p-12 rounded-lg border border-white/5 leading-loose text-lg font-light shadow-2xl">
                    <p>
                        That reminds me of another story I heard about a man who had a lucky escape. He (1)
                        <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 1: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[1].includes(escapeAnswers[1]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (be) at a barbecue restaurant on top of a mountain, and after the meal he (2)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 2: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[2].includes(escapeAnswers[2]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (decide) not to take the cable car down, but to walk instead.
                    </p>
                    <p className="mt-4">
                        While he (3)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 3: e.target.value}))} className={`bg-transparent border-b mx-2 w-28 text-center outline-none ${showEscapeResults ? (correctEscape[3].includes(escapeAnswers[3]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (look) for the path, he (4)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 4: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[4].includes(escapeAnswers[4]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (fall) into a stream and (5)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 5: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[5].includes(escapeAnswers[5]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (break) his leg. Unable to move, he (6)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 6: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[6].includes(escapeAnswers[6]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (try) to phone for help, but his mobile (7)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 7: e.target.value}))} className={`bg-transparent border-b mx-2 w-32 text-center outline-none ${showEscapeResults ? (correctEscape[7].includes(escapeAnswers[7]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (work) because he (8)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 8: e.target.value}))} className={`bg-transparent border-b mx-2 w-32 text-center outline-none ${showEscapeResults ? (correctEscape[8].includes(escapeAnswers[8]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (drop) it in the stream.
                    </p>
                     <p className="mt-4">
                        Knowing he was missing, teams of people (9)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 9: e.target.value}))} className={`bg-transparent border-b mx-2 w-32 text-center outline-none ${showEscapeResults ? (correctEscape[9].includes(escapeAnswers[9]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (look) for him, but it was twenty-four days before they (10)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 10: e.target.value}))} className={`bg-transparent border-b mx-2 w-24 text-center outline-none ${showEscapeResults ? (correctEscape[10].includes(escapeAnswers[10]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (find) him. Luckily he (11)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 11: e.target.value}))} className={`bg-transparent border-b mx-2 w-32 text-center outline-none ${showEscapeResults ? (correctEscape[11].includes(escapeAnswers[11]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (bring) a bottle of barbecue sauce, and he (12)
                         <input type="text" onChange={e => setEscapeAnswers(p=>({...p, 12: e.target.value}))} className={`bg-transparent border-b mx-2 w-28 text-center outline-none ${showEscapeResults ? (correctEscape[12].includes(escapeAnswers[12]?.toLowerCase()) ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500') : 'border-gray-600 focus:border-lux-gold'}`} />
                        (survive) by drinking water mixed with it.
                    </p>
                    
                    <div className="mt-8 flex justify-end">
                        <button onClick={checkEscape} className="px-8 py-3 bg-lux-gold text-black font-sans uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            Check Answers
                        </button>
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* PRONUNCIATION (Ex 8) */}
        <FadeIn delay={500}>
             <div className="bg-gradient-to-r from-lux-charcoal to-black p-8 rounded border border-white/5 flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-lux-gold flex items-center justify-center text-lux-gold font-serif text-3xl italic">
                    P
                </div>
                <div>
                    <h4 className="text-xl text-lux-cream font-serif mb-2">Pronunciation: Auxiliary Verbs</h4>
                    <p className="text-gray-400 text-sm">
                        Notice the difference? <br/>
                        <strong className="text-white">was/were</strong> are usually pronounced weakly (/wəz/, /wə(r)/) in these sentences. <br/>
                        <strong className="text-white">had</strong> is often contracted to <strong className="text-white">'d</strong> (e.g., "He'd been").
                    </p>
                </div>
             </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GrammarSection;
