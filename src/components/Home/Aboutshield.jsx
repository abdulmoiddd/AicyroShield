// // import React from 'react';

// // export default function AboutHero() {
// //   return (
// //     <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans">
      
// //       {/* ========================================== */}
// //       {/* CINEMATIC BACKGROUND EFFECTS                 */}
// //       {/* ========================================== */}
      
// //       {/* Base Grid */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-20 z-0"></div>
      
// //       {/* Deep Space Glows */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-transparent opacity-[0.08] blur-[100px] rounded-full pointer-events-none z-0"></div>
      
// //       {/* Radar Ping Animation */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-[var(--primary)]/10 rounded-full animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none z-0"></div>
// //       <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-[var(--accent-blue)]/10 rounded-full animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none z-0 delay-700"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
// //         {/* ========================================== */}
// //         {/* HERO TYPOGRAPHY & MISSION                  */}
// //         {/* ========================================== */}
        
// //         {/* Overline Badge */}
// //         <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[var(--card-bg)]/40 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(138,43,226,0.15)] backdrop-blur-xl animate-fade-in-up">
// //           <span className="relative flex h-2 w-2">
// //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
// //             <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
// //           </span>
// //           Our Mission
// //         </div>

// //         {/* Massive Headline */}
// //         <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-[var(--foreground)] tracking-tighter leading-[1.05] mb-8 animate-fade-in-up animation-delay-100">
// //           Engineering the end of <br className="hidden md:block" />
// //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] bg-[length:200%_auto] animate-gradient-text">
// //             cyber threats.
// //           </span>
// //         </h1>

// //         {/* Subheadline / Thesis */}
// //         <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-3xl mb-16 animate-fade-in-up animation-delay-200">
// //           Aicyro was founded on a singular vision: to outpace adversaries with artificial intelligence. We are removing human limitations from the cybersecurity equation to build a safer, autonomous digital future.
// //         </p>

// //         {/* ========================================== */}
// //         {/* FLOATING CORE VALUES (Glassmorphic)        */}
// //         {/* ========================================== */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-fade-in-up animation-delay-300">
          
// //           {/* Value 1 */}
// //           <div className="group relative bg-[var(--card-bg)]/30 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary)]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(138,43,226,0.1)] overflow-hidden text-left">
// //             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[40px] rounded-full group-hover:bg-[var(--primary)]/20 transition-colors duration-500 pointer-events-none"></div>
// //             <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 tracking-tight">AI-First DNA</h3>
// //             <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
// //               We don't bolt AI onto legacy systems. We build autonomous engines from the ground up to operate at machine speed.
// //             </p>
// //           </div>

// //           {/* Value 2 */}
// //           <div className="group relative bg-[var(--card-bg)]/30 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,191,255,0.1)] overflow-hidden text-left md:translate-y-6">
// //             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)]/10 blur-[40px] rounded-full group-hover:bg-[var(--accent-blue)]/20 transition-colors duration-500 pointer-events-none"></div>
// //             <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 tracking-tight">Zero Compromise</h3>
// //             <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
// //               Security is binary. We engineer platforms that assume breach, verify everything, and lock down threats flawlessly.
// //             </p>
// //           </div>

// //           {/* Value 3 */}
// //           <div className="group relative bg-[var(--card-bg)]/30 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary)]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(138,43,226,0.1)] overflow-hidden text-left">
// //             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[40px] rounded-full group-hover:bg-[var(--primary)]/20 transition-colors duration-500 pointer-events-none"></div>
// //             <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 tracking-tight">Autonomous Scale</h3>
// //             <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
// //               As your infrastructure grows, Aicyro scales its defenses automatically, providing enterprise protection without the overhead.
// //             </p>
// //           </div>

// //         </div>

// //       </div>

// //       {/* Required Custom Keyframes for Smooth Entry Animations */}
// //       <style>{`
// //         @keyframes fadeInUp {
// //           from { opacity: 0; transform: translateY(20px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         @keyframes gradientText {
// //           0% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //           100% { background-position: 0% 50%; }
// //         }
// //         .animate-fade-in-up {
// //           animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           opacity: 0;
// //         }
// //         .animate-gradient-text {
// //           animation: gradientText 6s ease infinite;
// //         }
// //         .animation-delay-100 { animation-delay: 100ms; }
// //         .animation-delay-200 { animation-delay: 200ms; }
// //         .animation-delay-300 { animation-delay: 300ms; }
// //       `}</style>
      
// //     </section>
// //   );
// // }

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// // import React from 'react';
// // import Navbar from '../Essential/Navbar';

// // export default function AboutHero() {
// //   return (
// //     <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans border-b border-[var(--border-color)]/50">
// //       <Navbar />
// //       {/* ========================================== */}
// //       {/* BACKGROUND ELEMENTS                        */}
// //       {/* ========================================== */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_100%_at_0%_0%,#000_10%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
// //       {/* Soft Side Glow */}
// //       <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
// //         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
// //           {/* ========================================== */}
// //           {/* LEFT: Content & Mission                    */}
// //           {/* ========================================== */}
// //           <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
// //             {/* Status Badge */}
// //             <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold tracking-widest uppercase">
// //               <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
// //               The Aicyro Mission
// //             </div>

// //             <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tighter leading-[1.05] mb-6">
// //               Outpacing <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// //                 adversaries
// //               </span> <br />
// //               with AI.
// //             </h1>

// //             <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed mb-10 max-w-lg">
// //               We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
// //             </p>

// //             {/* Core Values List */}
// //             <div className="flex flex-col gap-4 w-full max-w-md">
// //               {[
// //                 { label: "AI-First DNA", desc: "Built from the ground up for autonomous defense." },
// //                 { label: "Zero Compromise", desc: "Assume breach. Verify everything. Lock down instantly." },
// //                 { label: "Infinite Scale", desc: "Defenses that grow automatically with your infrastructure." }
// //               ].map((item, i) => (
// //                 <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--card-bg)]/40 border border-[var(--border-color)] hover:border-[var(--primary)]/40 transition-colors group">
// //                   <div className="mt-1 w-6 h-6 rounded-full bg-[var(--background)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
// //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
// //                       <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
// //                     </svg>
// //                   </div>
// //                   <div>
// //                     <h4 className="text-[var(--foreground)] font-bold text-sm">{item.label}</h4>
// //                     <p className="text-[var(--foreground-muted)] text-xs mt-1">{item.desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //           </div>

// //           {/* ========================================== */}
// //           {/* RIGHT: Live AI Processing Visual           */}
// //           {/* ========================================== */}
// //           <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-[1000px]">
            
// //             {/* Ambient Backlight for the visual */}
// //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-20 blur-[80px] rounded-full"></div>

// //             {/* Main Floating Glass Panel */}
// //             <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--background)]/90 backdrop-blur-2xl border border-[var(--primary)]/30 shadow-[0_20px_50px_rgba(138,43,226,0.15)] flex items-center justify-center transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden group">
              
// //               {/* Internal Radar Sweep */}
// //               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/10 to-transparent h-[200%] animate-[scan_4s_linear_infinite]"></div>

// //               {/* The "AI Core" Rings */}
// //               <div className="relative w-48 h-48 flex items-center justify-center">
// //                 {/* Outer dashed ring */}
// //                 <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-color)] animate-[spin_20s_linear_infinite]"></div>
// //                 {/* Middle colored ring */}
// //                 <div className="absolute inset-4 rounded-full border border-[var(--primary)]/40 border-t-[var(--accent-blue)] animate-[spin_10s_linear_infinite_reverse]"></div>
// //                 {/* Inner glowing core */}
// //                 <div className="absolute inset-10 rounded-full bg-[var(--background)] border border-[var(--primary)] shadow-[0_0_30px_var(--primary)] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
// //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
// //                   </svg>
// //                 </div>
// //               </div>

// //               {/* Floating "Threat Neutralized" Badges */}
// //               <div className="absolute top-8 left-8 bg-[var(--background)]/80 backdrop-blur border border-green-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg animate-[float_4s_ease-in-out_infinite]">
// //                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
// //                 <span className="text-green-400 font-mono text-[10px] uppercase font-bold tracking-wider">Payload Blocked</span>
// //               </div>

// //               <div className="absolute bottom-12 right-8 bg-[var(--background)]/80 backdrop-blur border border-[var(--accent-blue)]/30 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg animate-[float_5s_ease-in-out_infinite_reverse]">
// //                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-ping"></div>
// //                 <span className="text-[var(--accent-blue)] font-mono text-[10px] uppercase font-bold tracking-wider">Network Secured</span>
// //               </div>

// //               {/* Simulated Terminal Log */}
// //               <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[var(--background)] to-transparent flex items-end p-6">
// //                 <div className="w-full flex flex-col gap-1 font-mono text-[8px] sm:text-[10px] text-[var(--foreground-muted)] opacity-70">
// //                   <p>› [SYS] Initializing Aicyro Neural Net...</p>
// //                   <p>› [DEF] Mapping endpoint architecture... 100%</p>
// //                   <p className="text-[var(--primary)]">› [AI] Autonomous defense matrix online.</p>
// //                 </div>
// //               </div>

// //             </div>

// //           </div>

// //         </div>
// //       </div>

// //       {/* Global Animations for this component */}
// //       <style>{`
// //         @keyframes scan {
// //           0% { transform: translateY(-50%); }
// //           100% { transform: translateY(0%); }
// //         }
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-10px); }
// //         }
// //       `}</style>
      
// //     </section>
// //   );
// // }

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// // import React from 'react';

// // export default function AboutHero() {
// //   return (
// //     <section className="relative pt-20 pb-10 lg:pt-16 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans ">
    
      
// //       {/* ========================================== */}
// //       {/* BACKGROUND ELEMENTS                        */}
// //       {/* ========================================== */}
// //       {/* Moving Tech Grid */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
// //       {/* Deep Ambient Glows */}
// //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>
// //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 lg:mt-20">
        
// //         {/* ========================================== */}
// //         {/* TOP SPLIT: Headline & Visual               */}
// //         {/* ========================================== */}
// //         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-24">
          
// //           {/* LEFT: Content & Mission */}
// //           <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20">
            
// //             {/* Holographic Status Badge */}
// //             <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-[var(--background)] border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(138,43,226,0.15)] backdrop-blur-md">
// //               <span className="relative flex h-2 w-2">
// //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
// //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]"></span>
// //               </span>
// //               The Aicyro Mission
// //             </div>

// //             <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[var(--foreground)] tracking-tighter leading-[1.05] mb-6 drop-shadow-sm">
// //               Aicyro
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] relative inline-block">
// //                 Shield
                
// //               </span>
              
// //             </h1>

// //             <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-lg border-l-2 border-[var(--primary)]/50 pl-6">
// //               We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
// //             </p>

            

// //           </div>

// //           {/* RIGHT: Threat Telemetry Dashboard Visual */}
// //           <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            
// //             <div className="relative w-full max-w-[550px] bg-[#050505]/80 backdrop-blur-2xl border border-[var(--border-color)]/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              
// //               {/* Mac-style Window Header */}
// //               <div className="w-full h-10 bg-[var(--card-bg)]/50 border-b border-[var(--border-color)]/50 flex items-center px-4 gap-2">
// //                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
// //                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
// //                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
// //                 <span className="ml-4 font-mono text-[10px] text-[var(--foreground-muted)] tracking-wider">AICYRO_NEURAL_DEFENSE_v4.2</span>
// //               </div>

// //               {/* Dashboard Body */}
// //               <div className="relative p-6 h-[320px] flex flex-col">
                
// //                 {/* World Map Dot Grid (Abstract) */}
// //                 <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-wrap gap-2 p-4 justify-center items-center overflow-hidden">
// //                   {[...Array(150)].map((_, i) => (
// //                     <div key={i} className="w-1 h-1 bg-[var(--foreground-muted)] rounded-full"></div>
// //                   ))}
// //                 </div>

// //                 {/* Animated Connections Map */}
// //                 <div className="relative flex-1 flex items-center justify-between px-4 z-10">
                  
// //                   {/* Incoming Threat Node */}
// //                   <div className="relative flex flex-col items-center gap-2 animate-[pulse_3s_infinite]">
// //                     <div className="w-12 h-12 rounded-full border border-red-500/50 bg-red-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)]">
// //                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
// //                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// //                       </svg>
// //                     </div>
// //                     <span className="font-mono text-[9px] text-red-400 uppercase tracking-widest">Malicious Actor</span>
// //                   </div>

// //                   {/* Connecting Laser Beam */}
// //                   <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 via-[var(--primary)] to-[var(--accent-blue)] relative mx-4">
// //                     {/* Travelling Data Packet */}
// //                     <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-1.5 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2s_infinite]"></div>
// //                   </div>

// //                   {/* Aicyro AI Core Node */}
// //                   <div className="relative flex flex-col items-center gap-2">
// //                     <div className="w-16 h-16 rounded-full border border-[var(--primary)] bg-[var(--primary)]/20 flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.3)]">
// //                       {/* Spinning inner dashed ring */}
// //                       <div className="absolute inset-2 rounded-full border border-dashed border-[var(--accent-blue)] animate-spin-slow"></div>
// //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
// //                         <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
// //                       </svg>
// //                     </div>
// //                     <span className="font-mono text-[9px] text-[var(--accent-blue)] uppercase tracking-widest">Aicyro Shield</span>
                    
// //                   </div>

// //                 </div>

// //                 {/* Live Console Output */}
// //                 <div className="mt-auto h-20 bg-black/50 border border-white/5 rounded-lg p-3 font-mono text-[9px] sm:text-[10px] text-[var(--foreground-muted)] flex flex-col justify-end overflow-hidden">
// //                   <p className="opacity-50">› Initializing perimeter scan...</p>
// //                   <p className="opacity-75">› Anomaly detected on port 443.</p>
// //                   <p className="text-red-400">› WARNING: Unauthorized payload identified.</p>
// //                   <p className="text-green-400 animate-pulse">› AI Intercept: Payload isolated and destroyed.</p>
// //                 </div>

// //               </div>
// //             </div>

// //           </div>

// //         </div>

// //         {/* ========================================== */}
// //         {/* BOTTOM BENTO GRID: Core Values             */}
// //         {/* ========================================== */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[var(--border-color)]/30">
// //           {[
// //             {
// //               label: "AI-First DNA",
// //               desc: "Built from the ground up for autonomous defense. We don't bolt AI onto legacy systems.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
// //             },
// //             {
// //               label: "Zero Compromise",
// //               desc: "Security is binary. We assume breach, verify everything, and lock down infrastructure instantly.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
// //             },
// //             {
// //               label: "Infinite Scale",
// //               desc: "As your digital footprint expands, Aicyro's autonomous defenses scale automatically without SOC overhead.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
// //             }
// //           ].map((item, i) => (
// //             <div key={i} className="group relative bg-[var(--card-bg)]/30 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--primary)]/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(138,43,226,0.1)] overflow-hidden">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--primary)]/10 to-transparent blur-2xl rounded-full group-hover:from-[var(--primary)]/20 transition-colors"></div>
              
// //               <div className="mb-6 w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
// //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //                   {item.icon}
// //                 </svg>
// //               </div>
              
// //               <h4 className="text-[var(--foreground)] font-bold text-xl mb-3">{item.label}</h4>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{item.desc}</p>
// //             </div>
// //           ))}
// //         </div>

// //       </div>

// //       {/* Required Animations */}
// //       <style>{`
// //         @keyframes shootRight {
// //           0% { left: 10%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
// //           20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
// //           80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
// //           100% { left: 90%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
// //         }
// //         .animate-spin-slow {
// //           animation: spin 8s linear infinite;
// //         }
// //       `}</style>
      
// //     </section>
// //   );
// // }


// // import React from 'react';

// // export default function Aboutshield() {
// //   return (
// //     <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans">
     
      
// //       {/* ========================================== */}
// //       {/* AMBIENT BACKGROUND                         */}
// //       {/* ========================================== */}
// //       {/* Ultra-fine technical mesh */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_10%,#000_20%,transparent_100%)] opacity-[0.15] pointer-events-none"></div>
      
// //       {/* Central Deep Glow */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-transparent opacity-[0.07] blur-[150px] rounded-full pointer-events-none"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 lg:mt-16">
        
// //         {/* ========================================== */}
// //         {/* BENTO GRID LAYOUT                          */}
// //         {/* ========================================== */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
// //           {/* ------------------------------------------ */}
// //           {/* BENTO BLOCK 1: Main Mission (Spans 7 cols)   */}
// //           {/* ------------------------------------------ */}
// //           <div className="lg:col-span-7 relative bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--background)]/50 backdrop-blur-2xl border border-[var(--border-color)]/80 rounded-[2.5rem] p-10 md:p-14 overflow-hidden group hover:border-[var(--primary)]/50 transition-colors duration-500 shadow-2xl">
            
// //             {/* Inner Glow */}
// //             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

// //             <div className="relative z-10 h-full flex flex-col justify-center">
// //               {/* Status Badge */}
// //               <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] text-xs font-bold tracking-widest uppercase shadow-sm w-max">
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
// //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]"></span>
// //                 </span>
// //                 The Aicyro Mission
// //               </div>

// //               <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--foreground)] tracking-tighter leading-[1.05] mb-6">
// //                 Aicyro <br/>
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] relative">
// //                   Shield
// //                   {/* Glowing Underline */}
// //                   <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full opacity-50 blur-[1px]"></div>
// //                 </span>
// //               </h1>

// //               <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-lg">
// //                 We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
// //               </p>
// //             </div>
// //           </div>

// //           {/* ------------------------------------------ */}
// //           {/* BENTO BLOCK 2: Telemetry Console (Spans 5)   */}
// //           {/* ------------------------------------------ */}
// //           <div className="lg:col-span-5 relative bg-[#050505]/90 backdrop-blur-3xl border border-[var(--border-color)]/80 rounded-[2.5rem] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group hover:border-[var(--accent-blue)]/50 transition-colors duration-500">
            
// //             {/* Mac-style Window Header */}
// //             <div className="w-full h-12 bg-white/[0.02] border-b border-white/[0.05] flex items-center px-6 gap-2 shrink-0">
// //               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
// //               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
// //               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
// //               <span className="ml-auto font-mono text-[10px] text-[var(--foreground-muted)] tracking-wider">AICYRO_NEURAL_DEFENSE_v4.2</span>
// //             </div>

// //             {/* Dashboard Body */}
// //             <div className="relative flex-1 p-6 flex flex-col justify-between min-h-[300px]">
              
// //               {/* Abstract Target Grid */}
// //               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

// //               {/* Animated Connection Visual */}
// //               <div className="relative z-10 flex items-center justify-between w-full px-4 mt-8">
// //                 {/* Threat */}
// //                 <div className="flex flex-col items-center gap-2">
// //                   <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-pulse">
// //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-500">
// //                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// //                     </svg>
// //                   </div>
// //                   <span className="font-mono text-[8px] text-red-400 uppercase">Threat</span>
// //                 </div>

// //                 {/* Laser Data Stream */}
// //                 <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 via-[var(--primary)] to-[var(--accent-blue)] relative mx-4">
// //                   <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2s_infinite]"></div>
// //                 </div>

// //                 {/* AI Core */}
// //                 <div className="flex flex-col items-center gap-2">
// //                   <div className="w-14 h-14 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)] flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.3)] group-hover:shadow-[0_0_40px_rgba(138,43,226,0.5)] transition-shadow">
// //                     <div className="absolute inset-1 rounded-full border border-dashed border-[var(--accent-blue)] animate-spin-slow"></div>
// //                     <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
// //                   </div>
// //                   <span className="font-mono text-[8px] text-[var(--accent-blue)] uppercase">AI Core</span>
// //                 </div>
// //               </div>

// //               {/* Live Terminal Log */}
// //               <div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] text-[var(--foreground-muted)] flex flex-col gap-1 relative z-10">
// //                 <p className="opacity-50">› Initializing perimeter scan...</p>
// //                 <p className="opacity-75">› Anomaly detected on port 443.</p>
// //                 <p className="text-red-400">› WARNING: Unauthorized payload.</p>
// //                 <p className="text-green-400 animate-pulse">› AI Intercept: Payload destroyed.</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* ------------------------------------------ */}
// //           {/* BENTO BLOCKS 3, 4, 5: Core Values (4 cols)   */}
// //           {/* ------------------------------------------ */}
// //           {[
// //             {
// //               label: "AI-First DNA",
// //               desc: "Built from the ground up for autonomous defense. We don't bolt AI onto legacy systems.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />,
// //               color: "var(--primary)"
// //             },
// //             {
// //               label: "Zero Compromise",
// //               desc: "Security is binary. We assume breach, verify everything, and lock down infrastructure instantly.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
// //               color: "var(--accent-blue)"
// //             },
// //             {
// //               label: "Infinite Scale",
// //               desc: "As your digital footprint expands, Aicyro's autonomous defenses scale automatically without SOC overhead.",
// //               icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
// //               color: "var(--primary)"
// //             }
// //           ].map((item, i) => (
// //             <div key={i} className="lg:col-span-4 relative bg-[var(--card-bg)]/40 backdrop-blur-xl border border-[var(--border-color)]/80 hover:border-[var(--primary)]/50 rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(138,43,226,0.1)] overflow-hidden group">
              
// //               {/* Subtle top gradient line */}
// //               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent group-hover:via-[var(--primary)] transition-colors duration-500"></div>
              
// //               <div className="mb-6 w-12 h-12 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] group-hover:scale-110 transition-transform shadow-sm" style={{ color: item.color }}>
// //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //                   {item.icon}
// //                 </svg>
// //               </div>
              
// //               <h4 className="text-[var(--foreground)] font-bold text-xl mb-3 tracking-tight">{item.label}</h4>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{item.desc}</p>
// //             </div>
// //           ))}

// //         </div>
// //       </div>

// //       {/* Required Animations */}
// //       <style>{`
// //         @keyframes shootRight {
// //           0% { left: 5%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
// //           20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
// //           80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
// //           100% { left: 95%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
// //         }
// //         .animate-spin-slow {
// //           animation: spin 8s linear infinite;
// //         }
// //       `}</style>
      
// //     </section>
// //   );
// // }

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// import React from 'react';
// import Navbar from '../Essential/Navbar';

// export default function AboutHero() {
//   return (
//     <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans">
//       <Navbar />
      
//       {/* ========================================== */}
//       {/* BACKGROUND ELEMENTS                        */}
//       {/* ========================================== */}
//       {/* Dotted Radar Mesh */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border-color)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_20%,transparent_100%)]"></div>
      
//       {/* Immersive Ambient Glows */}
//       <div className="absolute top-1/4 left-0 w-[50vw] h-[500px] bg-gradient-to-r from-[var(--primary)] to-transparent opacity-[0.05] blur-[150px] pointer-events-none"></div>
//       <div className="absolute bottom-1/4 right-0 w-[50vw] h-[500px] bg-gradient-to-l from-[var(--accent-blue)] to-transparent opacity-[0.05] blur-[150px] pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 lg:mt-20">
        
//         {/* ========================================== */}
//         {/* TOP SPLIT: Headline & Holographic Shield   */}
//         {/* ========================================== */}
//         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-32">
          
//           {/* LEFT: Typography & Mission */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 pr-0 lg:pr-10">
            
//             {/* Cyber Pill Badge */}
//             <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/20 backdrop-blur-xl">
//               <div className="relative flex items-center justify-center">
//                 <span className="absolute w-3 h-3 rounded-full bg-[var(--accent-blue)] opacity-50 animate-ping"></span>
//                 <span className="relative w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>
//               </div>
//               <span className="text-[var(--foreground)] text-xs font-bold tracking-widest uppercase">
//                 The Aicyro Mission
//               </span>
//             </div>

//             {/* Massive Fluid Headline */}
//             <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-[var(--foreground)] tracking-tighter leading-[1.05] mb-8">
//               Outpacing <br/>
//               <span className="relative inline-block">
//                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] animate-gradient-shift bg-[length:200%_auto]">
//                   adversaries
//                 </span>
//                 {/* Text Background Glow */}
//                 <span className="absolute inset-0 bg-[var(--primary)] blur-[40px] opacity-20 -z-10"></span>
//               </span> <br/>
//               with AI.
//             </h1>

//             <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-lg mb-10">
//               We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
//             </p>

//             {/* <button className="relative group overflow-hidden rounded-full px-8 py-4 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]">
//               <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] transition-all duration-500 ease-out group-hover:w-full"></div>
//               <span className="relative z-10 font-bold text-[var(--foreground)] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
//                 Discover Our Story
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </span>
//             </button> */}
//           </div>

//           {/* RIGHT: Holographic AI Shield Core */}
//           <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            
//             <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center">
              
//               {/* Outer Orbit */}
//               <div className="absolute inset-0 rounded-full border border-[var(--border-color)] border-dashed animate-[spin_24s_linear_infinite]"></div>
              
//               {/* Middle Energy Ring */}
//               <div className="absolute inset-8 rounded-full border-t-2 border-l-2 border-[var(--accent-blue)] opacity-50 animate-[spin_16s_linear_infinite_reverse]"></div>
              
//               {/* Inner Glowing Shield Core */}
//               <div className="absolute inset-20 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent backdrop-blur-md border border-[var(--primary)]/50 shadow-[0_0_60px_rgba(138,43,226,0.3)] flex items-center justify-center">
//                 <div className="w-16 h-16 bg-[var(--background)] rounded-full flex items-center justify-center border border-[var(--primary)] shadow-inner">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[var(--primary)] drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">
//                     <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Floating Holographic Element 1 */}
//               <div className="absolute top-4 -left-8 md:-left-12 bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-xl flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
//                 <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
//                 </div>
//                 <div>
//                   <div className="text-[10px] text-[var(--foreground-muted)] uppercase tracking-wider font-bold">Threats Blocked</div>
//                   <div className="text-sm font-mono font-bold text-[var(--foreground)]">100% Autonomous</div>
//                 </div>
//               </div>

//               {/* Floating Holographic Element 2 */}
//               <div className="absolute bottom-8 -right-4 md:-right-12 bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] px-4 py-2 rounded-xl shadow-xl flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
//                 <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
//                 </div>
//                 <div>
//                   <div className="text-[10px] text-[var(--foreground-muted)] uppercase tracking-wider font-bold">System Status</div>
//                   <div className="text-sm font-mono font-bold text-[var(--primary)]">Aicyro Shield</div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* BOTTOM: Connected Circuit Core Values      */}
//         {/* ========================================== */}
//         <div className="relative mt-20 pt-16">
          
//           {/* Background Connecting Line (Desktop) */}
//           <div className="hidden md:block absolute top-[5.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30"></div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center relative z-10">
//             {[
//               {
//                 label: "AI-First DNA",
//                 desc: "Built from the ground up for autonomous defense. We don't bolt AI onto legacy systems.",
//                 icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />,
//               },
//               {
//                 label: "Zero Compromise",
//                 desc: "Security is binary. We assume breach, verify everything, and lock down infrastructure instantly.",
//                 icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
//               },
//               {
//                 label: "Infinite Scale",
//                 desc: "As your digital footprint expands, Aicyro's autonomous defenses scale automatically without SOC overhead.",
//                 icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
//               }
//             ].map((item, i) => (
//               <div key={i} className="flex flex-col items-center group">
                
//                 {/* Node Icon */}
//                 <div className="relative mb-6">
//                   {/* Glowing backdrop circle */}
//                   <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
//                   <div className="relative w-16 h-16 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] group-hover:border-[var(--primary)] flex items-center justify-center text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-all duration-300 shadow-lg z-10 group-hover:-translate-y-1 group-hover:scale-110">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//                       {item.icon}
//                     </svg>
//                   </div>
//                 </div>
                
//                 <h4 className="text-[var(--foreground)] font-bold text-xl mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors">{item.label}</h4>
//                 <p className="text-[var(--foreground-muted)] text-sm leading-relaxed max-w-sm mx-auto">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Required Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes gradient-shift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
      
//     </section>
//   );
// }

//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React from 'react';
// import Navbar from '../Essential/Navbar';

// export default function AboutHero() {
//   return (
//     <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#020005] font-sans flex flex-col justify-between border-b border-[var(--border-color)]/50">
      
//       <Navbar />
      
//       {/* ========================================== */}
//       {/* 3D SPATIAL BACKGROUND                      */}
//       {/* ========================================== */}
      
//       {/* Central AI Core Glow */}
//       <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[400px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] blur-[150px] opacity-20 rounded-full animate-[pulse_6s_ease-in-out_infinite] pointer-events-none"></div>

//       {/* 3D Perspective Grid Floor */}
//       <div className="absolute bottom-0 left-0 w-full h-[60vh] [perspective:1000px] pointer-events-none overflow-hidden z-0">
//         <div className="absolute bottom-0 left-[-50%] w-[200%] h-full bg-[linear-gradient(to_top,var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--accent-blue)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(75deg)_translateY(100px)] [transform-origin:bottom_center] opacity-20 animate-[gridMove_15s_linear_infinite]"></div>
        
//         {/* Horizon Fade */}
//         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#020005] to-transparent"></div>
//         {/* Glowing Horizon Line */}
//         <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30 shadow-[0_0_20px_var(--primary)]"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center flex-1">
        
//         {/* ========================================== */}
//         {/* HERO TYPOGRAPHY & MISSION                  */}
//         {/* ========================================== */}
//         <div className="text-center max-w-4xl mx-auto mt-10 lg:mt-16 mb-20">
          
//           {/* Cybernetic Status Badge */}
//           <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-[#050505]/80 border border-[var(--primary)]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(138,43,226,0.2)]">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
//             </span>
//             <span className="text-[var(--foreground-muted)] text-xs font-mono font-bold tracking-widest uppercase">
//               The Aicyro Mission
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8 drop-shadow-2xl">
//             Aicyro{' '}{' '}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">Shield</span>
//               <span className="absolute bottom-2 md:bottom-4 left-0 w-full h-2 bg-[var(--primary)] blur-[10px] opacity-60"></span>
//             </span>
//           </h1>

//           <p className="text-lg md:text-2xl text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto font-medium">
//             We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
//           </p>

//         </div>

//         {/* ========================================== */}
//         {/* FLOATING GLASS CONSOLE (Core Values)       */}
//         {/* ========================================== */}
//         <div className="w-full max-w-6xl mt-auto relative group">
          
//           {/* Console Ambient Shadow */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)]/30 via-[var(--accent-blue)]/30 to-[var(--primary)]/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
//           {/* Glass Console Wrapper */}
//           <div className="relative w-full bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 md:p-3 shadow-2xl">
            
//             {/* Top decorative bar */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--primary)] rounded-b-full opacity-50"></div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
//               {[
//                 {
//                   label: "AI-First DNA",
//                   desc: "Built from the ground up for autonomous defense. We don't bolt AI onto legacy systems.",
//                   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />,
//                   color: "text-[var(--primary)]",
//                   bg: "bg-[var(--primary)]/10"
//                 },
//                 {
//                   label: "Zero Compromise",
//                   desc: "Security is binary. We assume breach, verify everything, and lock down infrastructure instantly.",
//                   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
//                   color: "text-[var(--accent-blue)]",
//                   bg: "bg-[var(--accent-blue)]/10"
//                 },
//                 {
//                   label: "Infinite Scale",
//                   desc: "As your digital footprint expands, Aicyro's autonomous defenses scale automatically without SOC overhead.",
//                   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
//                   color: "text-[var(--primary)]",
//                   bg: "bg-[var(--primary)]/10"
//                 }
//               ].map((item, i) => (
//                 <div key={i} className="relative bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 rounded-2xl p-6 transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  
//                   <div className={`mb-5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 shadow-inner ${item.bg} ${item.color}`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                       {item.icon}
//                     </svg>
//                   </div>
                  
//                   <h4 className="text-white font-bold text-lg mb-2 tracking-tight">{item.label}</h4>
//                   <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Global CSS for 3D Grid Animation */}
//       <style>{`
//         @keyframes gridMove {
//           0% { transform: rotateX(75deg) translateY(0); }
//           100% { transform: rotateX(75deg) translateY(4rem); }
//         }
//       `}</style>
      
//     </section>
//   );
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

import React from 'react';
import Navbar from '../Essential/Navbar';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[var(--background)] font-sans flex flex-col justify-between border-b border-[var(--border-color)]/50 transition-colors duration-500">
      
     
      
      {/* ========================================== */}
      {/* 3D SPATIAL BACKGROUND (THEME INTEGRATED)   */}
      {/* ========================================== */}
      
      {/* Central AI Core Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[400px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] blur-[150px] opacity-20 rounded-full animate-[pulse_6s_ease-in-out_infinite] pointer-events-none"></div>

      {/* 3D Perspective Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] [perspective:1000px] pointer-events-none overflow-hidden z-0">
        
        {/* The Grid - Now uses var(--grid-line) to adapt to light/dark mode */}
        <div className="absolute bottom-0 left-[-50%] w-[200%] h-full bg-[linear-gradient(to_top,var(--border-color)_1px,transparent_1px),linear-gradient(to_right,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(75deg)_translateY(100px)] [transform-origin:bottom_center] opacity-40 animate-[gridMove_15s_linear_infinite]"></div>
        
        {/* Horizon Fade - Fades into the global background */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-transparent"></div>
        
        {/* Glowing Horizon Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-40 shadow-[0_0_20px_var(--primary)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center flex-1">
        
        {/* ========================================== */}
        {/* HERO TYPOGRAPHY & MISSION                  */}
        {/* ========================================== */}
        <div className="text-center max-w-4xl mx-auto mt-10 lg:mt-16 mb-20">
          
          {/* Cybernetic Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-[var(--card-bg)]/80 border border-[var(--primary)]/30 backdrop-blur-xl shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-[var(--foreground-muted)] text-xs font-mono font-bold tracking-widest uppercase">
              The Aicyro Mission
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-[var(--foreground)] tracking-tighter leading-[1.05] mb-8 drop-shadow-sm">
            Aicyro{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">Shield</span>
              {/* Subtle underline glow */}
              <span className="absolute bottom-2 md:bottom-4 left-0 w-full h-2 bg-[var(--primary)] blur-[10px] opacity-40 -z-10"></span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto font-medium">
            We founded Aicyro to solve a critical mismatch: human operators fighting machine-speed threats. By removing human limitations, we engineer autonomous security infrastructure that stops attacks in milliseconds.
          </p>

        </div>

        {/* ========================================== */}
        {/* FLOATING GLASS CONSOLE (Core Values)       */}
        {/* ========================================== */}
        <div className="w-full max-w-6xl mt-auto relative group">
          
          {/* Console Ambient Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--accent-blue)]/20 to-[var(--primary)]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Glass Console Wrapper */}
          <div className="relative w-full bg-[var(--card-bg)]/60 backdrop-blur-2xl border border-[var(--border-color)]/80 rounded-3xl p-2 md:p-3 shadow-xl">
            
            {/* Top decorative bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--primary)] rounded-b-full opacity-60"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {[
                { 
                  label: "AI-First DNA", 
                  desc: "Built from the ground up for autonomous defense. We don't bolt AI onto legacy systems.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />,
                  color: "text-[var(--primary)]",
                  bg: "bg-[var(--primary)]/10"
                },
                { 
                  label: "Zero Compromise", 
                  desc: "Security is binary. We assume breach, verify everything, and lock down infrastructure instantly.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
                  color: "text-[var(--accent-blue)]",
                  bg: "bg-[var(--accent-blue)]/10"
                },
                { 
                  label: "Infinite Scale", 
                  desc: "As your digital footprint expands, Aicyro's autonomous defenses scale automatically without SOC overhead.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
                  color: "text-[var(--primary)]",
                  bg: "bg-[var(--primary)]/10"
                }
              ].map((item, i) => (
                <div key={i} className="relative bg-[var(--background)]/40 hover:bg-[var(--background)]/80 border border-transparent hover:border-[var(--border-color)] rounded-2xl p-6 transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  
                  <div className={`mb-5 w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border-color)]/50 shadow-sm ${item.bg} ${item.color}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {item.icon}
                    </svg>
                  </div>
                  
                  <h4 className="text-[var(--foreground)] font-bold text-lg mb-2 tracking-tight">{item.label}</h4>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS for 3D Grid Animation */}
      <style>{`
        @keyframes gridMove {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(4rem); }
        }
      `}</style>
      
    </section>
  );
}