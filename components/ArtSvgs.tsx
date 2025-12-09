import React from 'react';

export const HippoSvg = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full object-cover bg-[#0a0a0a]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="throatGradient" cx="50%" cy="60%" r="50%" fx="50%" fy="60%">
        <stop offset="0%" stopColor="#2a0a0a" />
        <stop offset="100%" stopColor="#0f0505" />
      </radialGradient>
      <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f5f5dc" />
        <stop offset="50%" stopColor="#d4cfa7" />
        <stop offset="100%" stopColor="#8a7e57" />
      </linearGradient>
      <filter id="wetShine">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lightingColor="#bbbbbb" result="specOut">
          <fePointLight x="-5000" y="-10000" z="20000" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
      </filter>
    </defs>
    
    {/* Throat Depth */}
    <rect width="800" height="600" fill="url(#throatGradient)" />
    
    {/* Gum Texture */}
    <path d="M 0 600 C 200 450 600 450 800 600 V 600 H 0 Z" fill="#3d1e1e" />
    
    {/* Lower Teeth (Tusks) */}
    <path d="M 150 600 Q 200 350 250 600" fill="url(#toothGradient)" filter="url(#wetShine)" />
    <path d="M 550 600 Q 600 350 650 600" fill="url(#toothGradient)" filter="url(#wetShine)" />
    
    {/* Upper Teeth */}
    <path d="M 250 0 Q 280 150 310 0" fill="url(#toothGradient)" filter="url(#wetShine)" opacity="0.8" />
    <path d="M 490 0 Q 520 150 550 0" fill="url(#toothGradient)" filter="url(#wetShine)" opacity="0.8" />

    {/* Water Line Overlay */}
    <rect width="800" height="600" fill="#000" opacity="0.2" />
    <path d="M 0 520 Q 200 500 400 520 T 800 520 V 600 H 0 Z" fill="#0a0a0a" opacity="0.6" />
    
    {/* Text for Art Direction */}
    <text x="50%" y="95%" textAnchor="middle" fill="#d4af37" fontSize="14" fontFamily="serif" opacity="0.5" letterSpacing="2">FIG I. THE ENCOUNTER</text>
  </svg>
);

export const WatermelonSvg = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-cover bg-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="blueFlesh" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="30%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
      <linearGradient id="rind" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <filter id="noise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
    </defs>

    {/* Table/Background */}
    <rect width="600" height="400" fill="#111" />
    
    {/* Shadow */}
    <ellipse cx="300" cy="320" rx="220" ry="30" fill="#000" opacity="0.8" filter="blur(10px)" />

    {/* Rind Back */}
    <path d="M 100 280 Q 300 380 500 280" fill="none" stroke="url(#rind)" strokeWidth="18" strokeLinecap="round"/>

    {/* Flesh */}
    <path d="M 100 280 Q 300 50 500 280 Z" fill="url(#blueFlesh)" />
    
    {/* Texture Overlay */}
    <path d="M 100 280 Q 300 50 500 280 Z" fill="#fff" opacity="0.1" filter="url(#noise)" style={{mixBlendMode: 'overlay'}} />

    {/* Seeds */}
    <g fill="#050505">
        <ellipse cx="250" cy="220" rx="4" ry="8" transform="rotate(-15 250 220)" />
        <ellipse cx="350" cy="220" rx="4" ry="8" transform="rotate(15 350 220)" />
        <ellipse cx="300" cy="180" rx="4" ry="8" />
        <ellipse cx="220" cy="270" rx="4" ry="8" transform="rotate(-30 220 270)" />
        <ellipse cx="380" cy="270" rx="4" ry="8" transform="rotate(30 380 270)" />
    </g>
    
    <text x="50%" y="90%" textAnchor="middle" fill="#3b82f6" fontSize="12" fontFamily="sans-serif" opacity="0.6" letterSpacing="4">HOAX #1</text>
  </svg>
);

export const BalloonSvg = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-cover bg-[#87CEEB]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <radialGradient id="silverSheen" cx="40%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="600" height="400" fill="url(#skyGradient)" />
    
    {/* Clouds (Abstract) */}
    <path d="M 0 300 Q 150 250 300 300 T 600 300 V 400 H 0 Z" fill="#fff" opacity="0.05" />

    {/* Balloon Entity */}
    <g transform="translate(300, 200)">
        <ellipse cx="0" cy="0" rx="120" ry="70" fill="url(#silverSheen)" filter="url(#glow)" />
        {/* Ridge */}
        <path d="M -120 0 A 120 70 0 0 0 120 0" fill="none" stroke="#475569" strokeWidth="1" opacity="0.3" />
        {/* Highlight */}
        <ellipse cx="-40" cy="-20" rx="30" ry="10" fill="#fff" opacity="0.6" transform="rotate(-10)" />
        
        {/* Basket/Bottom */}
        <rect x="-20" y="50" width="40" height="20" fill="#333" />
        <line x1="-15" y1="50" x2="-30" y2="10" stroke="#666" strokeWidth="1" />
        <line x1="15" y1="50" x2="30" y2="10" stroke="#666" strokeWidth="1" />
    </g>

    <text x="50%" y="90%" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontFamily="sans-serif" opacity="0.6" letterSpacing="4">HOAX #2</text>
  </svg>
);

export const SkullSvg = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-cover bg-[#0a0a0a]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="boneGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e5e5e5" />
        <stop offset="100%" stopColor="#a3a3a3" />
      </radialGradient>
    </defs>

    {/* Background Context */}
    <rect width="600" height="400" fill="#121212" />
    <circle cx="300" cy="200" r="150" fill="#lux-gold" opacity="0.05" filter="blur(40px)" />

    {/* Skull Shape (Profile) */}
    <g transform="translate(300, 200) scale(1.2)">
        {/* Cranium */}
        <path d="M -40 -60 C -100 -60 -100 20 -60 40 C -50 60 -30 60 0 60 L 40 60 C 60 60 70 40 70 20 C 70 -40 40 -60 -40 -60" fill="#d4d4d4" />
        
        {/* Jaw (Different color to imply fake) */}
        <path d="M -20 50 L 40 50 L 60 80 L 0 90 L -30 70 Z" fill="#78350f" />
        
        {/* Eye Socket */}
        <path d="M 20 0 Q 40 0 40 20 Q 40 35 20 35 Q 0 35 0 20 Q 0 0 20 0" fill="#000" opacity="0.8" />
        
        {/* Nasal Cavity */}
        <path d="M 45 30 L 55 45 L 45 45 Z" fill="#000" opacity="0.8" />
        
        {/* Teeth */}
        <g fill="#fff">
            <rect x="20" y="50" width="8" height="10" />
            <rect x="30" y="50" width="8" height="10" />
            <rect x="40" y="50" width="8" height="10" />
        </g>
    </g>

    <text x="50%" y="90%" textAnchor="middle" fill="#d4af37" fontSize="12" fontFamily="sans-serif" opacity="0.6" letterSpacing="4">HOAX #3</text>
  </svg>
);
