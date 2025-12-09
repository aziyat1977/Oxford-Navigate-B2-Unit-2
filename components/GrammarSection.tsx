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
            { threshold: 0.5 } 
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <div ref={ref} className={`w-full h-full ${className}`}>{children(inView)}</div>;
};

const GrammarSection: React.FC = () => {
  return (
    <section className="py-32 px-8 lg:px-24 bg-[#0a0a0a] min-h-screen text-lux-gray overflow-hidden">
      <style>{`
        /* --- HIGH FIDELITY ANIMATIONS --- */
        
        @keyframes drawLine {
            to { stroke-dashoffset: 0; }
        }

        @keyframes expandDot {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes rippleEffect {
            0% { transform: scale(1); opacity: 0.8; stroke-width: 0px; }
            50% { opacity: 0.5; stroke-width: 2px; }
            100% { transform: scale(4); opacity: 0; stroke-width: 0px; }
        }

        @keyframes neonPulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(212,175,55,0.3)); stroke: #d4af37; }
            50% { filter: drop-shadow(0 0 10px rgba(212,175,55,0.8)); stroke: #fff; }
        }

        @keyframes floatLabel {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- CLASSES --- */

        .path-draw {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            transition: opacity 0.5s;
        }
        
        /* Slow motion drawing for clarity */
        .active .path-draw-fast { animation: drawLine 2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .active .path-draw-slow { animation: drawLine 4s linear forwards; }
        .active .path-draw-delay { animation: drawLine 3s ease-out forwards; animation-delay: 1.5s; }

        .dot-pop { opacity: 0; transform-origin: center; transform-box: fill-box; }
        .active .dot-pop { animation: expandDot 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: 1s; }
        
        .ripple { opacity: 0; transform-origin: center; transform-box: fill-box; }
        .active .ripple { animation: rippleEffect 3s infinite linear; animation-delay: 1.8s; }

        .neon-glow { animation: neonPulse 4s infinite ease-in-out; }
        
        .label-reveal { opacity: 0; }
        .active .label-reveal { animation: floatLabel 1s ease-out forwards; animation-delay: 0.5s; }
        .active .label-reveal-delay { animation: floatLabel 1s ease-out forwards; animation-delay: 2s; }

      `}</style>

      <div className="max-w-[95%] mx-auto space-y-48">
        
        {/* HEADER */}
        <div className="text-center space-y-8">
            <FadeIn>
                <h2 className="font-serif text-8xl md:text-9xl text-lux-cream">The Architecture of Time</h2>
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-lux-gold to-transparent mx-auto mt-8"></div>
                <p className="text-lux-gold uppercase tracking-[0.3em] text-3xl mt-8">Grammar Visualization</p>
            </FadeIn>
        </div>

        {/* TENSE 01: PAST SIMPLE */}
        <FadeIn delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                     <AnimatedTimeline className="aspect-[16/9] w-full bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
                        {(inView) => (
                            <svg viewBox="0 0 800 450" className={`w-full h-full ${inView ? 'active' : ''}`}>
                                {/* Grid Background */}
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.05"/>
                                    </pattern>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                    </filter>
                                </defs>
                                <rect width="800" height="450" fill="url(#grid)" />

                                {/* The Time Line (Base) */}
                                <line x1="50" y1="225" x2="750" y2="225" stroke="#333" strokeWidth="2" />
                                <text x="50" y="260" fill="#666" fontSize="14" fontFamily="monospace">PAST</text>
                                <text x="700" y="260" fill="#666" fontSize="14" fontFamily="monospace">NOW</text>

                                {/* The Event (X marks the spot) */}
                                <g className="dot-pop">
                                    <circle cx="400" cy="225" r="8" fill="#d4af37" filter="url(#glow)" />
                                    <circle cx="400" cy="225" r="120" stroke="#d4af37" fill="none" className="ripple" />
                                    <circle cx="400" cy="225" r="80" stroke="#d4af37" fill="none" className="ripple" style={{animationDelay: '2.5s'}} />
                                </g>

                                {/* The Label */}
                                <g className="label-reveal-delay">
                                    <line x1="400" y1="225" x2="400" y2="150" stroke="#d4af37" strokeDasharray="4 4" />
                                    <rect x="300" y="100" width="200" height="50" rx="4" fill="#1a1a1a" stroke="#d4af37" />
                                    <text x="400" y="130" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="serif" letterSpacing="1">SINGLE EVENT</text>
                                </g>
                            </svg>
                        )}
                    </AnimatedTimeline>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <h3 className="font-serif text-7xl text-lux-gold">01. Past Simple</h3>
                    <p className="text-4xl text-gray-400 font-light leading-relaxed">
                        A distinct, completed action. Like a camera shutter clicking. It happens, it finishes, the story moves on.
                    </p>
                    <div className="pl-8 border-l-4 border-lux-gold/30 py-4">
                        <p className="text-3xl text-lux-cream italic">"Something <span className="text-lux-gold font-bold">knocked</span> into the boat."</p>
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* TENSE 02: PAST CONTINUOUS */}
        <FadeIn delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-8">
                    <h3 className="font-serif text-7xl text-blue-400">02. Past Continuous</h3>
                    <p className="text-4xl text-gray-400 font-light leading-relaxed">
                        The background scenery. It's a flowing river of time that gets interrupted by the main events.
                    </p>
                    <div className="pl-8 border-l-4 border-blue-500/30 py-4">
                        <p className="text-3xl text-lux-cream italic">"We <span className="text-blue-400 font-bold">were reaching</span> the end of the tour..."</p>
                    </div>
                </div>
                <div>
                     <AnimatedTimeline className="aspect-[16/9] w-full bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
                        {(inView) => (
                            <svg viewBox="0 0 800 450" className={`w-full h-full ${inView ? 'active' : ''}`}>
                                <defs>
                                    <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <rect width="800" height="450" fill="url(#grid)" />
                                
                                <line x1="50" y1="225" x2="750" y2="225" stroke="#333" strokeWidth="2" />

                                {/* Wavy Line for Continuous */}
                                <path 
                                    d="M 100 225 Q 150 180 200 225 T 300 225 T 400 225 T 500 225 T 600 225" 
                                    fill="none" 
                                    stroke="url(#blueGrad)" 
                                    strokeWidth="6" 
                                    strokeLinecap="round"
                                    className="path-draw-slow"
                                />

                                {/* Interruption */}
                                <g className="dot-pop" style={{animationDelay: '2.5s'}}>
                                    <line x1="400" y1="180" x2="400" y2="270" stroke="#fff" strokeWidth="2" />
                                    <text x="400" y="300" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="sans-serif">INTERRUPTION</text>
                                </g>

                                <text x="100" y="180" fill="#60a5fa" fontSize="24" fontFamily="serif" className="label-reveal">Duration / Background</text>
                            </svg>
                        )}
                    </AnimatedTimeline>
                </div>
            </div>
        </FadeIn>

        {/* TENSE 03: PAST PERFECT */}
        <FadeIn delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                     <AnimatedTimeline className="aspect-[16/9] w-full bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
                        {(inView) => (
                            <svg viewBox="0 0 800 450" className={`w-full h-full ${inView ? 'active' : ''}`}>
                                <rect width="800" height="450" fill="url(#grid)" />
                                <line x1="50" y1="225" x2="750" y2="225" stroke="#333" strokeWidth="2" />

                                {/* The "Before" Event */}
                                <path 
                                    d="M 150 225 Q 275 100 400 225" 
                                    fill="none" 
                                    stroke="#ec4899" 
                                    strokeWidth="2" 
                                    strokeDasharray="8 8"
                                    className="path-draw-delay"
                                />
                                <g className="dot-pop">
                                    <circle cx="150" cy="225" r="8" fill="#ec4899" />
                                    <text x="150" y="260" textAnchor="middle" fill="#ec4899" fontSize="16">ACTION 1</text>
                                </g>

                                {/* The "Main" Event */}
                                <g className="dot-pop" style={{animationDelay: '2s'}}>
                                    <circle cx="400" cy="225" r="8" fill="#fff" />
                                    <text x="400" y="260" textAnchor="middle" fill="#fff" fontSize="16">ACTION 2</text>
                                </g>

                                {/* Arrow */}
                                <path d="M 160 225 L 390 225" stroke="#ec4899" strokeWidth="1" markerEnd="url(#arrow)" className="path-draw-fast" style={{opacity: 0.5}} />
                                
                                <text x="275" y="150" textAnchor="middle" fill="#ec4899" fontSize="20" fontFamily="serif" className="label-reveal-delay">The Past of the Past</text>
                            </svg>
                        )}
                    </AnimatedTimeline>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <h3 className="font-serif text-7xl text-pink-500">03. Past Perfect</h3>
                    <p className="text-4xl text-gray-400 font-light leading-relaxed">
                        Time travel within a story. We jump back to explain <em>why</em> something is happening now.
                    </p>
                    <div className="pl-8 border-l-4 border-pink-500/30 py-4">
                        <p className="text-3xl text-lux-cream italic">"The hippo <span className="text-pink-500 font-bold">had quietly disappeared</span>."</p>
                    </div>
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GrammarSection;