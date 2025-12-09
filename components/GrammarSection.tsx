import React, { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

// Helper component to trigger animations when SVG enters viewport
const AnimatedTimeline: React.FC<{ children: (inView: boolean) => React.ReactNode, className?: string }> = ({ children, className = "" }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.6 } // Wait until 60% visible for better impact
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <div ref={ref} className={`w-full h-full ${className}`}>{children(inView)}</div>;
};

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
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a0a0a] min-h-screen text-lux-gray">
      <style>{`
        /* --- CORE ANIMATIONS --- */
        
        @keyframes drawPath {
            to { stroke-dashoffset: 0; }
        }

        @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            60% { transform: scale(1.3); opacity: 1; }
            80% { transform: scale(0.9); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ripple {
            0% { transform: scale(1); opacity: 0.8; stroke-width: 0; }
            100% { transform: scale(3.5); opacity: 0; stroke-width: 2px; }
        }

        @keyframes dashFlow {
            to { stroke-dashoffset: -100; }
        }
        
        @keyframes glowPulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(212,175,55,0.5)); }
            50% { filter: drop-shadow(0 0 8px rgba(212,175,55,1)); }
        }

        /* --- UTILITY CLASSES --- */

        .timeline-base {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            transition: opacity 0.5s;
        }
        .active .timeline-base {
            animation: drawPath 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .timeline-action {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
        }
        .active .timeline-action {
            animation: drawPath 3s ease-out forwards;
        }
        
        .timeline-dot-group {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
        }
        .active .timeline-dot-group {
            animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .ripple-circle {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
        }
        .active .ripple-circle {
            animation: ripple 2s infinite linear;
            animation-delay: 2s; /* Start rippling after dot appears */
        }

        .text-label {
            opacity: 0;
        }
        .active .text-label {
            animation: fadeUp 1s ease-out forwards;
        }
        
        /* Specific adjustments */
        .wave-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
        }
        .active .wave-path {
            animation: drawPath 4s linear forwards; /* Very slow draw for continuous action */
        }

        .arc-dashed {
            stroke-dasharray: 10, 10;
            stroke-dashoffset: 400; /* Start hidden */
        }
        .active .arc-dashed {
            animation: drawPath 3s ease-in-out forwards;
        }

      `}</style>

      <div className="max-w-6xl mx-auto space-y-48">
        
        {/* HEADER */}
        <div>
            <FadeIn>
                <h2 className="font-serif text-5xl md:text-7xl text-center text-lux-cream mb-6">The Architecture of a Story</h2>
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-lux-gold to-transparent mx-auto"></div>
                <p className="text-center text-lux-gold uppercase tracking-[0.2em] text-sm mt-6">Unit 2.1 Grammar Focus</p>
            </FadeIn>
        </div>

        {/* TENSE 1: PAST SIMPLE */}
        <FadeIn delay={100}>
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lux-gold/5 to-transparent blur-2xl opacity-50 rounded-full pointer-events-none"></div>
                <div className="flex flex-col justify-center bg-[#0f0f0f] border-y border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-lux-gold/20 transition-all duration-1000">
                    
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
                        <div>
                            <h3 className="font-serif text-5xl md:text-6xl text-lux-gold mb-4">01. Past Simple</h3>
                            <p className="text-lg text-gray-400 font-light max-w-lg">
                                The heartbeat of the narrative. Used for <strong className="text-white">completed actions</strong> that move the story forward.
                            </p>
                        </div>
                        <div className="text-right hidden md:block opacity-50 font-serif italic text-2xl">
                            "Then this happened."
                        </div>
                    </div>

                    {/* ANIMATED TIMELINE: PAST SIMPLE */}
                    <div className="w-full h-64 bg-[#050505] rounded-lg border border-white/5 relative shadow-inner flex items-center justify-center overflow-hidden">
                         {/* Grid Background */}
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                         
                         <AnimatedTimeline className="w-full h-full flex items-center justify-center">
                            {(inView) => (
                                 <svg viewBox="0 0 1000 300" className={`w-full h-full ${inView ? 'active' : ''}`} preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <filter id="glowGold">
                                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#8a7e57" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#d4af37" />
                                            <stop offset="100%" stopColor="#8a7e57" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* 1. Base Axis (Draws first) */}
                                    <line x1="100" y1="150" x2="900" y2="150" stroke="#333" strokeWidth="2" className="timeline-base" style={{ animationDelay: '0s' }} />
                                    
                                    {/* 2. Markers (NOW and PAST) */}
                                    <g className="text-label" style={{ animationDelay: '1s' }}>
                                        <text x="100" y="200" fill="#444" fontSize="14" fontFamily="sans-serif" letterSpacing="2">PAST</text>
                                        <line x1="100" y1="140" x2="100" y2="160" stroke="#444" strokeWidth="2" />
                                    </g>
                                    <g className="text-label" style={{ animationDelay: '1.2s' }}>
                                        <text x="850" y="200" fill="#666" fontSize="14" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">NOW</text>
                                        <line x1="850" y1="120" x2="850" y2="180" stroke="#666" strokeWidth="2" />
                                    </g>

                                    {/* 3. The Event (Main Action) */}
                                    <g className="timeline-dot-group" style={{ animationDelay: '2s' }}>
                                        {/* Ripple Effect */}
                                        <circle cx="400" cy="150" r="15" fill="none" stroke="#d4af37" strokeWidth="1" className="ripple-circle" />
                                        
                                        {/* Main Dot */}
                                        <circle cx="400" cy="150" r="12" fill="#d4af37" filter="url(#glowGold)" />
                                        
                                        {/* Label */}
                                        <g className="text-label" style={{ animationDelay: '2.5s' }}>
                                            <line x1="400" y1="150" x2="400" y2="90" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                                            <text x="400" y="70" fill="#d4af37" fontSize="24" textAnchor="middle" fontFamily="serif" fontStyle="italic">"Knocked"</text>
                                            <text x="400" y="240" fill="#888" fontSize="14" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1" opacity="0.7">SINGLE COMPLETED EVENT</text>
                                        </g>
                                    </g>
                                 </svg>
                            )}
                         </AnimatedTimeline>
                    </div>

                    <div className="mt-8 pl-6 border-l-2 border-lux-gold/30">
                        <p className="font-serif text-3xl md:text-4xl text-lux-cream leading-relaxed">
                            "Something <span className="text-lux-gold bg-lux-gold/10 px-2 rounded">knocked</span> into the boat."
                        </p>
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* TENSE 2: PAST CONTINUOUS */}
        <FadeIn delay={100}>
            <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/10 to-transparent blur-2xl opacity-50 rounded-full pointer-events-none"></div>
                 <div className="flex flex-col justify-center bg-[#0f0f0f] border-y border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-1000">
                    
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
                        <div>
                            <h3 className="font-serif text-5xl md:text-6xl text-blue-400 mb-4">02. Past Continuous</h3>
                            <p className="text-lg text-gray-400 font-light max-w-lg">
                                Setting the scene. Actions that were <strong className="text-white">in progress</strong> around a specific time.
                            </p>
                        </div>
                         <div className="text-right hidden md:block opacity-50 font-serif italic text-2xl">
                            "It was happening..."
                        </div>
                    </div>

                    {/* ANIMATED TIMELINE: PAST CONTINUOUS */}
                    <div className="w-full h-64 bg-[#050505] rounded-lg border border-white/5 relative shadow-inner flex items-center justify-center overflow-hidden">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                         <AnimatedTimeline className="w-full h-full flex items-center justify-center">
                            {(inView) => (
                                 <svg viewBox="0 0 1000 300" className={`w-full h-full ${inView ? 'active' : ''}`} preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <filter id="glowBlue">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                            <stop offset="20%" stopColor="#3b82f6" />
                                            <stop offset="80%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* 1. Base Axis */}
                                    <line x1="100" y1="150" x2="900" y2="150" stroke="#333" strokeWidth="2" className="timeline-base" style={{ animationDelay: '0s' }} />

                                     {/* 2. Markers */}
                                    <g className="text-label" style={{ animationDelay: '1.2s' }}>
                                        <text x="850" y="200" fill="#666" fontSize="14" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">NOW</text>
                                        <line x1="850" y1="120" x2="850" y2="180" stroke="#666" strokeWidth="2" />
                                    </g>

                                    {/* 3. The Wave (Duration) */}
                                    <g className="timeline-action" style={{ animationDelay: '1.5s' }}>
                                        {/* Background highlight for duration */}
                                        <rect x="250" y="100" width="400" height="100" fill="url(#blueGrad)" opacity="0" className="text-label" style={{ animationDelay: '2s', opacity: 0.05 }} />
                                        
                                        {/* The Sine Wave */}
                                        <path 
                                            d="M 250 150 Q 300 110 350 150 T 450 150 T 550 150 T 650 150" 
                                            fill="none" 
                                            stroke="#60a5fa" 
                                            strokeWidth="6" 
                                            strokeLinecap="round" 
                                            className="wave-path" 
                                            filter="url(#glowBlue)"
                                        />

                                        {/* Label */}
                                        <g className="text-label" style={{ animationDelay: '3.5s' }}>
                                            <text x="450" y="80" fill="#60a5fa" fontSize="24" textAnchor="middle" fontFamily="serif" fontStyle="italic">"Was Setting"</text>
                                            <text x="450" y="240" fill="#888" fontSize="14" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1" opacity="0.7">CONTINUOUS DURATION</text>
                                        </g>
                                    </g>
                                 </svg>
                            )}
                         </AnimatedTimeline>
                    </div>

                    <div className="mt-8 pl-6 border-l-2 border-blue-500/30">
                        <p className="font-serif text-3xl md:text-4xl text-lux-cream leading-relaxed">
                            "The sun <span className="text-blue-400 bg-blue-900/20 px-2 rounded">was setting</span>..."
                        </p>
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* TENSE 3: PAST PERFECT */}
        <FadeIn delay={100}>
            <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-amber-900/10 to-transparent blur-2xl opacity-50 rounded-full pointer-events-none"></div>
                 <div className="flex flex-col justify-center bg-[#0f0f0f] border-y border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-amber-600/20 transition-all duration-1000">
                    
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
                        <div>
                            <h3 className="font-serif text-5xl md:text-6xl text-amber-600 mb-4">03. Past Perfect</h3>
                            <p className="text-lg text-gray-400 font-light max-w-lg">
                                The flashback. Events that happened <strong className="text-white">before</strong> the main story timeline.
                            </p>
                        </div>
                        <div className="text-right hidden md:block opacity-50 font-serif italic text-2xl">
                            "Before that happened..."
                        </div>
                    </div>

                    {/* ANIMATED TIMELINE: PAST PERFECT */}
                     <div className="w-full h-64 bg-[#050505] rounded-lg border border-white/5 relative shadow-inner flex items-center justify-center overflow-hidden">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                         <AnimatedTimeline className="w-full h-full flex items-center justify-center">
                            {(inView) => (
                                 <svg viewBox="0 0 1000 300" className={`w-full h-full ${inView ? 'active' : ''}`} preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <filter id="glowAmber">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* 1. Base Axis */}
                                    <line x1="100" y1="150" x2="900" y2="150" stroke="#333" strokeWidth="2" className="timeline-base" style={{ animationDelay: '0s' }} />

                                     {/* 2. NOW Marker */}
                                    <g className="text-label" style={{ animationDelay: '1.2s' }}>
                                        <text x="850" y="200" fill="#666" fontSize="14" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">NOW</text>
                                        <line x1="850" y1="120" x2="850" y2="180" stroke="#666" strokeWidth="2" />
                                    </g>

                                    {/* 3. Main Past Event (The Reference Point) */}
                                    <g className="timeline-dot-group" style={{ animationDelay: '2s' }}>
                                        <circle cx="600" cy="150" r="8" fill="#555" />
                                        <text x="600" y="190" fill="#777" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Main Story</text>
                                        <line x1="600" y1="140" x2="600" y2="160" stroke="#555" strokeWidth="2" />
                                    </g>

                                    {/* 4. The Flashback Arc (Tracing Backwards) */}
                                    {/* Path: From 600 (Main) back to 300 (Earlier) */}
                                    <path 
                                        d="M 600 150 Q 450 50 300 150" 
                                        fill="none" 
                                        stroke="#d97706" 
                                        strokeWidth="2" 
                                        className="arc-dashed"
                                        style={{ animationDelay: '3s' }}
                                    />

                                    {/* 5. The Earlier Event */}
                                    <g className="timeline-dot-group" style={{ animationDelay: '4.5s' }}>
                                        <circle cx="300" cy="150" r="14" fill="#d97706" filter="url(#glowAmber)" />
                                        
                                        {/* Ripple */}
                                        <circle cx="300" cy="150" r="14" fill="none" stroke="#d97706" strokeWidth="1" className="ripple-circle" />

                                        <text x="300" y="80" fill="#d97706" fontSize="24" textAnchor="middle" fontFamily="serif" fontStyle="italic">"Had Been"</text>
                                        <text x="300" y="240" fill="#888" fontSize="14" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1" opacity="0.7">PREVIOUS ACTION</text>
                                    </g>

                                 </svg>
                            )}
                         </AnimatedTimeline>
                    </div>

                    <div className="mt-8 pl-6 border-l-2 border-amber-600/30">
                        <p className="font-serif text-3xl md:text-4xl text-lux-cream leading-relaxed">
                            "I <span className="text-amber-600 bg-amber-900/20 px-2 rounded">had been</span> a river guide for years."
                        </p>
                    </div>
                </div>
            </div>
        </FadeIn>

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
                                <span className="text-sm md:text-base">{item.text}</span>
                                <select 
                                    className="bg-lux-charcoal border border-gray-700 rounded px-2 py-1 text-sm focus:border-lux-gold outline-none ml-4 w-32 md:w-40"
                                    onChange={(e) => setMatchAnswers(prev => ({...prev, [item.id]: e.target.value}))}
                                >
                                    <option value="">Select...</option>
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
                            <div className="mt-4 text-lux-gold animate-pulse font-bold">
                                {matchAnswers['1'] === 'before' && matchAnswers['2'] === 'background' && matchAnswers['3'] === 'main' 
                                    ? "Perfect match." 
                                    : "Check your logic again."}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </FadeIn>

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