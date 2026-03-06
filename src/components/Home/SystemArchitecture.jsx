import React from 'react';

export default function SystemArchitecture() {
  
  // Coordinates for placing the 8 nodes in a perfect circle around the core
  const nodes = [
    { label: "Endpoint Agents", top: "0%", left: "50%" },
    { label: "Event Pipeline", top: "14.64%", left: "85.35%" },
    { label: "ML Engine", top: "50%", left: "100%" },
    { label: "Risk Engine", top: "85.35%", left: "85.35%" },
    { label: "Response Engine", top: "100%", left: "50%" },
    { label: "SOC Dashboard", top: "85.35%", left: "14.64%" },
    { label: "Computer Vision", top: "50%", left: "0%" },
    { label: "App Security", top: "14.64%", left: "14.64%" },
  ];

  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans ">
      
      {/* ========================================== */}
      {/* BACKGROUND EFFECTS                         */}
      {/* ========================================== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.15] z-0 pointer-events-none"></div>
      
      {/* Ambient Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/80 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse"></span>
            System Architecture
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
            AICYRO Security <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Intelligence Core (ASIC)
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            A unified AI brain that connects every security component — from endpoint agents to computer vision — into a single autonomous intelligence system.
          </p>
        </div>

        {/* ========================================== */}
        {/* ORBITAL ARCHITECTURE VISUALIZER            */}
        {/* ========================================== */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-16 md:py-24">
          
          {/* The Circular Track Container */}
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
            
            {/* Outer Rotating Dashed Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-color)] animate-[spin_40s_linear_infinite] opacity-50 z-0"></div>
            
            {/* Inner Rotating Energy Ring */}
            <div className="absolute inset-[15%] rounded-full border-t-2 border-l-2 border-[var(--primary)]/30 animate-[spin_20s_linear_infinite_reverse] z-0"></div>

            {/* SVG Connecting Lines (Data Streams) */}
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
              {nodes.map((node, i) => (
                <line 
                  key={i}
                  x1="50%" 
                  y1="50%" 
                  x2={node.left} 
                  y2={node.top} 
                  stroke="var(--primary)" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6" 
                  className="animate-[dashFlow_2s_linear_infinite] opacity-40"
                />
              ))}
            </svg>

            {/* ======================================= */}
            {/* THE CENTRAL ASIC CORE                   */}
            {/* ======================================= */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] p-[1px] rounded-full shadow-[0_0_60px_rgba(138,43,226,0.3)] z-20 group cursor-pointer hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-[#050505] rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Core Pulsing Energy */}
                <div className="absolute inset-0 bg-[var(--primary)]/10 animate-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] opacity-30"></div>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] relative z-10">
                  <path d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" />
                  <path d="M18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" />
                </svg>
                <span className="font-bold text-white text-xs md:text-sm tracking-wider relative z-10">ASIC</span>
                <span className="text-[9px] text-[var(--accent-blue)] font-mono uppercase tracking-widest relative z-10">AI Brain</span>
              </div>
            </div>

            {/* ======================================= */}
            {/* THE SATELLITE NODES                     */}
            {/* ======================================= */}
            {nodes.map((node, index) => (
              <div 
                key={index}
                className="absolute w-max z-10 group"
                style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] px-3 py-2 md:px-5 md:py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all duration-300 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_20px_rgba(138,43,226,0.2)] group-hover:scale-105 cursor-default">
                  {/* Subtle hover glow inside the pill */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
                  
                  {/* Data indicator dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_5px_var(--primary)] relative z-10"></div>
                  
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[var(--foreground)] whitespace-nowrap relative z-10">
                    {node.label}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ========================================== */}
        {/* BOTTOM DESCRIPTION                         */}
        {/* ========================================== */}
        <div className="max-w-4xl mx-auto mt-12 bg-[var(--card-bg)]/30 backdrop-blur-lg border border-[var(--border-color)] rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent-blue)]"></div>
          
          <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed text-center md:text-left">
            The <strong className="text-[var(--foreground)]">ASIC</strong> connects endpoint monitoring agents, event streaming pipelines, machine learning engines, risk scoring systems, automated response engines, the SOC dashboard, computer vision modules, and application security scanners into a single, unified intelligence platform. <br/><br/>
            <span className="text-[var(--primary)] font-medium">Every component feeds data bidirectionally through the core, enabling correlated threat detection and autonomous response across all security domains.</span>
          </p>
        </div>

      </div>

      {/* Global CSS for Data Stream Lines */}
      <style>{`
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </section>
  );
}