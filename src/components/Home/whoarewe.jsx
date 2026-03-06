// // // import React from 'react';

// // // export default function WhoAreWe() {
// // //   return (
// // //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans">
      
// // //       {/* ========================================== */}
// // //       {/* BACKGROUND EFFECTS                         */}
// // //       {/* ========================================== */}
// // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-20 z-0"></div>
      
// // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// // //         {/* ========================================== */}
// // //         {/* SECTION HEADER                             */}
// // //         {/* ========================================== */}
// // //         <div className="text-center max-w-3xl mx-auto mb-20">
// // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-transparent border border-[var(--primary)]/30 text-[var(--accent-blue)] text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)] backdrop-blur-md">
// // //             <span className="relative flex h-2 w-2">
// // //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
// // //               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
// // //             </span>
// // //             Platform Overview
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// // //             AI-Powered Autonomous <br />
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// // //               Security Operating System
// // //             </span>
// // //           </h2>
// // //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// // //             AICYRO Shield AI unifies Artificial Intelligence, Machine Learning, Cybersecurity, Computer Vision, and Autonomous Response Systems into a single platform that continuously monitors, detects, responds, and predicts across your entire attack surface.
// // //           </p>
// // //         </div>

// // //         {/* ========================================== */}
// // //         {/* BENTO BOX GRID                             */}
// // //         {/* ========================================== */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
// // //           {/* CARD 1: Continuous Monitoring (Spans 2 columns) */}
// // //           <div className="group relative lg:col-span-2 bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden flex flex-col justify-between">
// // //             <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
// // //             <div className="relative z-10 mb-8">
// // //               <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Continuous Monitoring</h3>
// // //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed max-w-md">
// // //                 24/7 surveillance of your entire digital infrastructure with real-time telemetry collection across all endpoints.
// // //               </p>
// // //             </div>
// // //             {/* Fake UI: Activity Visualizer */}
// // //             <div className="relative z-10 flex items-end gap-1.5 h-16 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-500">
// // //               {[...Array(24)].map((_, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--accent-blue)] rounded-t-sm animate-pulse"
// // //                   style={{
// // //                     height: `${Math.max(20, Math.random() * 100)}%`,
// // //                     animationDelay: `${i * 0.1}s`,
// // //                     animationDuration: `${1 + Math.random()}s`
// // //                   }}
// // //                 ></div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* CARD 2: ML Anomaly Detection */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden">
// // //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-500">
// // //               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
// // //             </svg>
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">ML Anomaly Detection</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// // //               Models detect abnormal behavior using Isolation Forest algorithms.
// // //             </p>
// // //           </div>

// // //           {/* CARD 3: Real-Time Risk Scoring */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden">
// // //              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-blue)] mb-5 group-hover:scale-110 transition-transform duration-500">
// // //               <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
// // //             </svg>
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Real-Time Risk Scoring</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// // //               Dynamic risk engine assigns scores (0–100) for instant prioritization.
// // //             </p>
// // //           </div>

// // //           {/* CARD 4: Autonomous Response (Spans 2 cols, 2 rows - The Centerpiece) */}
// // //           <div className="group relative lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--card-bg)] backdrop-blur-md border border-[var(--primary)]/30 rounded-3xl p-8 hover:border-[var(--primary)] transition-all duration-500 shadow-[0_0_30px_rgba(138,43,226,0.05)] overflow-hidden flex flex-col">
// // //             <div className="relative z-10 mb-6">
// // //               <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold uppercase border ">
// // //                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
// // //                 Zero Human Intervention
// // //               </div>
// // //               <h3 className="text-3xl font-bold text-[var(--foreground)] mb-3">Autonomous Response</h3>
// // //               <p className="text-[var(--foreground-muted)] leading-relaxed max-w-sm">
// // //                 Automated threat containment — from instantaneous account lockdowns to complete device isolation — operating at machine speed.
// // //               </p>
// // //             </div>

// // //             {/* Fake UI: Terminal/Command Center */}
// // //             <div className="relative z-10 mt-auto bg-[#05000A]/80 border border-[var(--border-color)] rounded-xl p-5 font-mono text-xs md:text-sm shadow-inner overflow-hidden">
// // //               <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
// // //                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
// // //                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
// // //                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
// // //               </div>
// // //               <p className="text-[var(--foreground-muted)] mb-1">Aicyro_Kernel // Monitoring Engine v2.4</p>
// // //               <p className="text-red-400 mb-1 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]"> CRITICAL: Unauthorized shell access detected (IP: 192.168.1.105)</p>
// // //               <p className="text-yellow-400 mb-1 opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]"> Analyzing payload signature...</p>
// // //               <p className="text-[var(--primary)] mb-1 opacity-0 animate-[fadeIn_0.5s_ease-out_3s_forwards]"> INITIATING AUTONOMOUS LOCKDOWN SEQUENCE</p>
// // //               <p className="text-green-400 opacity-0 animate-[fadeIn_0.5s_ease-out_4s_forwards]"> SUCCESS: Endpoint isolated. Network rules updated.</p>
              
// // //               {/* Custom Keyframe for the terminal text */}
// // //               <style>{`
// // //                 @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
// // //               `}</style>
// // //             </div>
// // //           </div>

// // //           {/* CARD 5: Red Team AI Simulation */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500">
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Red Team AI</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6">
// // //               Continuous breach simulation replacing annual pentesting with AI attack models.
// // //             </p>
// // //             <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
// // //                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
// // //             </div>
// // //           </div>

// // //           {/* CARD 6: Physical-Cyber Fusion */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500">
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Physical-Cyber Fusion</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6">
// // //               Correlating CCTV footage with digital events for insider threat detection.
// // //             </p>
// // //             <div className="w-10 h-10 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)]">
// // //                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
// // //             </div>
// // //           </div>

// // //           {/* CARD 7: AI System Protection */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500">
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">AI Protection</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// // //               Safeguard AI models against prompt injection and data poisoning.
// // //             </p>
// // //           </div>

// // //           {/* CARD 8: Predictive Intelligence */}
// // //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary)]/50 transition-colors duration-500">
// // //             <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Predictive Intel</h3>
// // //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// // //               Forecast cyber risks using trend analysis to stay ahead of adversaries.
// // //             </p>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // ///

// // import React from 'react';

// // export default function WhoAreWe() {
// //   return (
// //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans">
      
// //       {/* ========================================== */}
// //       {/* BACKGROUND EFFECTS                         */}
// //       {/* ========================================== */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-20 z-0"></div>
      
// //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// //         {/* ========================================== */}
// //         {/* SECTION HEADER                             */}
// //         {/* ========================================== */}
// //         <div className="text-center max-w-3xl mx-auto mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-transparent border border-[var(--primary)]/30 text-[var(--accent-blue)] text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)] backdrop-blur-md">
// //             <span className="relative flex h-2 w-2">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
// //             </span>
// //             Platform Overview
// //           </div>
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// //             AI-Powered Autonomous <br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// //               Security Operating System
// //             </span>
// //           </h2>
// //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// //             AICYRO Shield AI unifies Artificial Intelligence, Machine Learning, Cybersecurity, Computer Vision, and Autonomous Response Systems into a single platform that continuously monitors, detects, responds, and predicts across your entire attack surface.
// //           </p>
// //         </div>

// //         {/* ========================================== */}
// //         {/* BENTO BOX GRID (Equal Sized Cards)         */}
// //         {/* ========================================== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// //           {/* CARD 1: Continuous Monitoring */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden flex flex-col h-full">
// //             <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
// //             <div className="relative z-10 mb-6">
// //               <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Continuous Monitoring</h3>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// //                 24/7 surveillance of your entire digital infrastructure with real-time telemetry collection.
// //               </p>
// //             </div>
// //             {/* Visualizer - Scaled for 1 column */}
// //             <div className="relative z-10 flex items-end gap-1 h-12 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 mt-auto pt-4">
// //               {[...Array(16)].map((_, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--accent-blue)] rounded-t-sm animate-pulse"
// //                   style={{
// //                     height: `${Math.max(20, Math.random() * 100)}%`,
// //                     animationDelay: `${i * 0.1}s`,
// //                     animationDuration: `${1 + Math.random()}s`
// //                   }}
// //                 ></div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* CARD 2: ML Anomaly Detection */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden flex flex-col h-full">
// //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-500">
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
// //             </svg>
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">ML Anomaly Detection</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
// //               Models detect abnormal behavior using Isolation Forest algorithms.
// //             </p>
// //           </div>

// //           {/* CARD 3: Real-Time Risk Scoring */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 overflow-hidden flex flex-col h-full">
// //              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-blue)] mb-5 group-hover:scale-110 transition-transform duration-500">
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
// //             </svg>
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Real-Time Scoring</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
// //               Dynamic risk engine assigns scores (0–100) for instant prioritization.
// //             </p>
// //           </div>

// //           {/* CARD 4: Autonomous Response */}
// //           <div className="group relative bg-gradient-to-br from-[var(--primary)]/5 to-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)] transition-all duration-500 shadow-[0_0_30px_rgba(138,43,226,0.05)] overflow-hidden flex flex-col h-full">
// //             <div className="relative z-10 mb-4">
// //               <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 rounded-full border-[var(--primary)]/30 text-[var(--accent-blue)] text-[10px] font-bold uppercase border">
// //                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
// //                 Zero Intervention
// //               </div>
// //               <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Autonomous Response</h3>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// //                 Automated containment from account lockdowns to device isolation.
// //               </p>
// //             </div>
            
// //             {/* Terminal/Command Center - Scaled down for 1 col */}
// //             <div className="relative z-10 mt-auto bg-[#05000A]/80 border border-[var(--border-color)] rounded-xl p-3 font-mono text-[9px] shadow-inner overflow-hidden">
// //               <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
// //                 <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
// //                 <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
// //                 <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
// //               </div>
// //               <p className="text-[var(--foreground-muted)] mb-1 truncate">Aicyro_Kernel // v2.4</p>
// //               <p className="text-red-400 mb-1 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards] truncate">  Unauthorized access</p>
// //               <p className="text-[var(--primary)] mb-1 opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards] truncate">  INITIATING LOCKDOWN</p>
// //               <p className="text-green-400 opacity-0 animate-[fadeIn_0.5s_ease-out_3s_forwards] truncate">  Endpoint isolated.</p>
              
// //               <style>{`
// //                 @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
// //               `}</style>
// //             </div>
// //           </div>

// //           {/* CARD 5: Red Team AI Simulation */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 flex flex-col h-full">
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Red Team AI</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
// //               Continuous breach simulation replacing annual pentesting with AI models.
// //             </p>
// //             <div className="mt-auto w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
// //                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
// //             </div>
// //           </div>

// //           {/* CARD 6: Physical-Cyber Fusion */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 flex flex-col h-full">
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Cyber Fusion</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
// //               Correlating physical CCTV footage with digital events for insider threat detection.
// //             </p>
// //             <div className="mt-auto w-10 h-10 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)]">
// //                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
// //             </div>
// //           </div>

// //           {/* CARD 7: AI System Protection */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 flex flex-col h-full">
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">AI Protection</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
// //               Safeguard AI models against prompt injection and data poisoning attacks natively.
// //             </p>
// //           </div>

// //           {/* CARD 8: Predictive Intelligence */}
// //           <div className="group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-500 flex flex-col h-full">
// //             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Predictive Intel</h3>
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
// //               Forecast incoming cyber risks using trend analysis to stay ahead of adversaries.
// //             </p>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// //
// //
// //
// //
// //
// ///
// //
// //
// //
// //
// //
// //
// //
// //
// //
// ///
// //
// ///
// //
// //
// ///
// //
// //


// import React, { useEffect, useRef, useState } from 'react';

// export default function WhoAreWe() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Trigger animation when the section scrolls into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15 } // Triggers when 15% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative py-32 bg-[var(--background)] overflow-hidden font-sans">
      
//       {/* ========================================== */}
//       {/* BACKGROUND EFFECTS                         */}
//       {/* ========================================== */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-20 z-0"></div>
      
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* SECTION HEADER                             */}
//         {/* ========================================== */}
//         <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-transparent border border-[var(--primary)]/30 text-[var(--accent-blue)] text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)] backdrop-blur-md">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
//             </span>
//             Platform Overview
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
//             AI-Powered Autonomous <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//               Security Operating System
//             </span>
//           </h2>
//           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
//             AICYRO Shield AI unifies Artificial Intelligence, Machine Learning, Cybersecurity, Computer Vision, and Autonomous Response Systems into a single platform that continuously monitors, detects, responds, and predicts across your entire attack surface.
//           </p>
//         </div>

//         {/* ========================================== */}
//         {/* BENTO BOX GRID (Equal Sized Cards)         */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* CARD 1: Continuous Monitoring */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '100ms' }}
//           >
//             <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
//             <div className="relative z-10 mb-6">
//               <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Continuous Monitoring</h3>
//               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
//                 24/7 surveillance of your entire digital infrastructure with real-time telemetry collection.
//               </p>
//             </div>
//             {/* Visualizer */}
//             <div className="relative z-10 flex items-end gap-1 h-12 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 mt-auto pt-4">
//               {[...Array(16)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--accent-blue)] rounded-t-sm animate-pulse"
//                   style={{
//                     height: `${Math.max(20, Math.random() * 100)}%`,
//                     animationDelay: `${i * 0.1}s`,
//                     animationDuration: `${1 + Math.random()}s`
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* CARD 2: ML Anomaly Detection */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '200ms' }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-500">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
//             </svg>
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">ML Anomaly Detection</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
//               Models detect abnormal behavior using Isolation Forest algorithms.
//             </p>
//           </div>

//           {/* CARD 3: Real-Time Risk Scoring */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '300ms' }}
//           >
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-blue)] mb-5 group-hover:scale-110 transition-transform duration-500">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
//             </svg>
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Real-Time Scoring</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
//               Dynamic risk engine assigns scores (0–100) for instant prioritization.
//             </p>
//           </div>

//           {/* CARD 4: Autonomous Response */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--primary)]/5 to-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)] transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '400ms' }}
//           >
//             <div className="relative z-10 mb-4">
//               <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 rounded-full border-[var(--primary)]/30 text-[var(--accent-blue)] text-[10px] font-bold uppercase border">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
//                 Zero Intervention
//               </div>
//               <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Autonomous Response</h3>
//               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
//                 Automated containment from account lockdowns to device isolation.
//               </p>
//             </div>
            
//             {/* Terminal/Command Center */}
//             <div className="relative z-10 mt-auto bg-[#05000A]/80 border border-[var(--border-color)] rounded-xl p-3 font-mono text-[9px] shadow-inner overflow-hidden">
//               <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
//                 <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
//                 <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
//                 <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
//               </div>
//               <p className="text-[var(--foreground-muted)] mb-1 truncate">Aicyro_Kernel // v2.4</p>
//               {/* Animations strictly trigger ONLY after isVisible is true */}
//               <p className={`text-red-400 mb-1 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_1.2s_forwards]' : ''}`}>  Unauthorized access</p>
//               <p className={`text-[var(--primary)] mb-1 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_2s_forwards]' : ''}`}>  INITIATING LOCKDOWN</p>
//               <p className={`text-green-400 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_2.8s_forwards]' : ''}`}>  Endpoint isolated.</p>
              
//               <style>{`
//                 @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
//               `}</style>
//             </div>
//           </div>

//           {/* CARD 5: Red Team AI Simulation */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '500ms' }}
//           >
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Red Team AI</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
//               Continuous breach simulation replacing annual pentesting with AI models.
//             </p>
//             <div className="mt-auto w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
//             </div>
//           </div>

//           {/* CARD 6: Physical-Cyber Fusion */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '600ms' }}
//           >
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Cyber Fusion</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
//               Correlating physical CCTV footage with digital events for insider threat detection.
//             </p>
//             <div className="mt-auto w-10 h-10 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-blue)]">
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
//             </div>
//           </div>

//           {/* CARD 7: AI System Protection */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '700ms' }}
//           >
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">AI Protection</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
//               Safeguard AI models against prompt injection and data poisoning attacks natively.
//             </p>
//           </div>

//           {/* CARD 8: Predictive Intelligence */}
//           <div
//             className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//             style={{ transitionDelay: '800ms' }}
//           >
//             <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Predictive Intel</h3>
//             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
//               Forecast incoming cyber risks using trend analysis to stay ahead of adversaries.
//             </p>
//           </div>

//         </div>
//       </div>
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

import React, { useEffect, useRef, useState } from 'react';

export default function WhoAreWe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[var(--background)] overflow-hidden font-sans">
      
      {/* ========================================== */}
      {/* BACKGROUND EFFECTS                         */}
      {/* ========================================== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-20 z-0"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-transparent border border-[var(--primary)]/30 text-[var(--accent-blue)] text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            Platform Overview
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
            AI-Powered Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Security Operating System
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            AICYRO Shield AI unifies Artificial Intelligence, Machine Learning, Cybersecurity, Computer Vision, and Autonomous Response Systems into a single platform that continuously monitors, detects, responds, and predicts across your entire attack surface.
          </p>
        </div>

        {/* ========================================== */}
        {/* BENTO BOX GRID                             */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: Continuous Monitoring */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Continuous Monitoring</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
               24/7 surveillance of your entire digital infrastructure with real-time telemetry collection across all endpoints.
              </p>
            </div>
            {/* Visualizer: Data Bars */}
            <div className="relative z-10 flex items-end gap-1 h-16 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 mt-auto pt-4">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--accent-blue)] rounded-t-sm animate-pulse" 
                  style={{ 
                    height: `${Math.max(20, Math.random() * 100)}%`, 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* CARD 2: ML Anomaly Detection */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">ML Anomaly Detection</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
               Machine learning models detect abnormal behavior patterns using Isolation Forest algorithms and graph-based user risk modeling.
              </p>
            </div>
            {/* Visualizer: Scatter Plot Anomaly */}
            <div className="relative z-10 h-16 w-full mt-auto border-b border-l border-[var(--foreground-muted)]/30 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-[var(--accent-blue)]/50 rounded-full"></div>
              <div className="absolute bottom-5 left-10 w-1.5 h-1.5 bg-[var(--accent-blue)]/50 rounded-full"></div>
              <div className="absolute bottom-3 left-16 w-1.5 h-1.5 bg-[var(--accent-blue)]/50 rounded-full"></div>
              <div className="absolute bottom-8 left-[40%] w-1.5 h-1.5 bg-[var(--accent-blue)]/50 rounded-full"></div>
              <div className="absolute bottom-4 left-[60%] w-1.5 h-1.5 bg-[var(--accent-blue)]/50 rounded-full"></div>
              
              {/* The Anomaly */}
              <div className="absolute top-2 right-4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute top-2 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
              {/* Targeting box */}
              <div className="absolute top-0.5 right-2.5 w-5 h-5 border border-red-500/60 rounded flex items-center justify-center animate-pulse"></div>
            </div>
          </div>

          {/* CARD 3: Real-Time Risk Scoring */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Real-Time Risk Scoring</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
               Dynamic risk assessment engine assigns scores from 0–100, enabling instant prioritization of security events.
              </p>
            </div>
            {/* Visualizer: Risk Meter */}
            <div className="relative z-10 flex items-end justify-between h-16 w-full mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col">
                <span className="text-[10px] text-[var(--foreground-muted)] font-mono uppercase tracking-wider mb-1">Threat Level</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-red-500 leading-none">94</span>
                  <span className="text-red-500/70 text-xs animate-pulse">▲</span>
                </div>
              </div>
              <div className="flex items-end gap-1 h-full pb-1">
                 <div className="w-2 h-3 bg-green-500/30 rounded-t-sm"></div>
                 <div className="w-2 h-5 bg-yellow-500/40 rounded-t-sm"></div>
                 <div className="w-2 h-8 bg-orange-500/60 rounded-t-sm"></div>
                 <div className="w-2 h-12 bg-red-500 rounded-t-sm shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* CARD 4: Autonomous Response */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--primary)]/5 to-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)] transition-all duration-700 ease-out shadow-[0_0_30px_rgba(138,43,226,0.05)] overflow-hidden flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative z-10 mb-4">
              {/* <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 rounded-full border-[var(--primary)]/30 text-[var(--accent-blue)] text-[10px] font-bold uppercase border">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                Zero Intervention
              </div> */}
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Autonomous Response</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
               Automated threat containment from account lockdowns to device isolation without human intervention.
              </p>
            </div>
            
            {/* Visualizer: Terminal */}
            <div className="relative z-10 mt-auto bg-[#05000A]/80 border border-[var(--border-color)] rounded-xl p-3 font-mono text-[9px] shadow-inner overflow-hidden">
              <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-[var(--foreground-muted)] mb-1 truncate">Aicyro_Kernel // v2.4</p>
              <p className={`text-red-400 mb-1 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_1.2s_forwards]' : ''}`}>  Unauthorized access</p>
              <p className={`text-[var(--primary)] mb-1 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_2s_forwards]' : ''}`}>  INITIATING LOCKDOWN</p>
              <p className={`text-green-400 opacity-0 truncate ${isVisible ? 'animate-[fadeIn_0.5s_ease-out_2.8s_forwards]' : ''}`}>  Endpoint isolated.</p>
            </div>
          </div>

          {/* CARD 5: Red Team AI Simulation */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">Red Team AI Simulation</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
                Continuous breach simulation that tests your defenses with AI-powered attack models, replacing annual pentesting.
              </p>
            </div>
            {/* Visualizer: Attack Path Node Graph */}
            <div className="relative z-10 h-16 w-full mt-auto flex items-center justify-between opacity-70 group-hover:opacity-100 transition-opacity px-2">
              <div className="w-8 h-8 rounded-lg border border-red-500/50 bg-red-500/10 flex items-center justify-center text-red-500 text-[10px] font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)]">AI</div>
              
              <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-[var(--primary)]/50 mx-2 relative overflow-hidden">
                {/* Laser shooting across the line */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-1 rounded-full bg-white shadow-[0_0_8px_white] animate-[shootRight_1.5s_infinite]"></div>
              </div>

              <div className="w-8 h-8 rounded-lg border border-[var(--primary)]/50 bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-[10px] font-bold shadow-[0_0_10px_rgba(138,43,226,0.2)]">SYS</div>
            </div>
          </div>

          {/* CARD 6: Physical-Cyber Fusion */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Physical-Cyber Fusion</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
                Computer vision security correlating CCTV footage with digital events for insider threat detection.
              </p>
            </div>
            {/* Visualizer: Split Screen Integration */}
            <div className="relative z-10 h-16 w-full mt-auto flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              {/* CCTV Feed side */}
              <div className="flex-1 bg-[var(--background)] rounded-md border border-[var(--border-color)] h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--foreground-muted)]"><path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <div className="text-[var(--accent-blue)] font-bold text-sm px-1">+</div>
              {/* Server Data Side */}
              <div className="flex-1 bg-[var(--accent-blue)]/5 rounded-md border border-[var(--accent-blue)]/20 h-full flex flex-col items-center justify-center gap-1.5 px-3">
                <div className="w-full h-1.5 bg-[var(--foreground-muted)]/30 rounded-full"></div>
                <div className="w-full h-1.5 bg-[var(--accent-blue)]/60 rounded-full"></div>
                <div className="w-3/4 h-1.5 bg-[var(--foreground-muted)]/30 rounded-full self-start"></div>
              </div>
            </div>
          </div>

          {/* CARD 7: AI System Protection */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">AI System Protection</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
                Safeguard AI models against prompt injection, data poisoning, adversarial attacks, and infrastructure compromise.
              </p>
            </div>
            {/* Visualizer: Shield deflecting threats */}
            <div className="relative z-10 h-16 w-full mt-auto flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity overflow-hidden">
               <div className="relative w-10 h-10 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                 <div className="w-4 h-4 rounded-full bg-[var(--primary)] blur-[2px]"></div>
               </div>
               {/* Spinning Shield Ring */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-l-2 border-r-2 border-[var(--accent-blue)] animate-[spin_4s_linear_infinite]"></div>
               {/* Deflected Threat (Moves from left, hits shield, disappears) */}
               <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-[deflect_2s_infinite]"></div>
            </div>
          </div>

          {/* CARD 8: Predictive Intelligence */}
          <div 
            className={`group relative bg-gradient-to-br from-[var(--card-bg)] to-transparent backdrop-blur-md border border-[var(--border-color)] rounded-3xl p-6 hover:border-[var(--primary)]/50 transition-all duration-700 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">Predictive Intelligence</h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mt-auto">
                Forecast future cyber risks using trend analysis and threat intelligence to stay ahead of adversaries.
              </p>
            </div>
            {/* Visualizer: Predictive Chart */}
            <div className="relative z-10 h-16 w-full mt-auto opacity-70 group-hover:opacity-100 transition-opacity flex items-end pb-2">
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                {/* Past Data Line */}
                <path d="M0 35 L20 30 L40 22 L60 25 L80 12" fill="none" stroke="var(--foreground-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Future Prediction Line */}
                <path d="M80 12 L100 4" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-[dashMove_2s_linear_infinite]" />
                {/* Data Points */}
                <circle cx="80" cy="12" r="2.5" fill="var(--foreground)" />
                <circle cx="100" cy="4" r="3" fill="var(--primary)" className="animate-pulse" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS Animations for Visualizers */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shootRight {
          0% { left: 0%; opacity: 0; transform: scaleX(0.5); }
          20% { opacity: 1; transform: scaleX(1); }
          80% { opacity: 1; transform: scaleX(1); }
          100% { left: 90%; opacity: 0; transform: scaleX(0.5); }
        }
        @keyframes deflect {
          0% { left: 10%; opacity: 0; }
          30% { opacity: 1; }
          50% { left: 35%; opacity: 1; transform: scale(1); }
          55% { left: 35%; opacity: 0; transform: scale(3); }
          100% { opacity: 0; }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -8; }
        }
      `}</style>
    </section>
  );
}