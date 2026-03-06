// // // // // import React from 'react';

// // // // // export default function WhyAicyro() {
// // // // //   // Reusable SVG Icons for the comparison matrix
// // // // //   const CheckIcon = () => (
// // // // //     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.4)]">
// // // // //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
// // // // //         <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
// // // // //       </svg>
// // // // //     </div>
// // // // //   );

// // // // //   const MutedCheckIcon = () => (
// // // // //     <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center">
// // // // //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--foreground-muted)] opacity-50">
// // // // //         <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
// // // // //       </svg>
// // // // //     </div>
// // // // //   );

// // // // //   const DashIcon = () => (
// // // // //     <div className="w-8 h-8 flex items-center justify-center">
// // // // //       <div className="w-4 h-0.5 bg-[var(--border-color)] opacity-30 rounded-full"></div>
// // // // //     </div>
// // // // //   );

// // // // //   // Matrix Data mapped to industry standards
// // // // //   const comparisonData = [
// // // // //     { layer: "Human Behavior", siem: true, edr: false, cloud: false, aicyro: true },
// // // // //     { layer: "Devices & Endpoints", siem: false, edr: true, cloud: false, aicyro: true },
// // // // //     { layer: "Network", siem: true, edr: false, cloud: false, aicyro: true },
// // // // //     { layer: "Cloud Infrastructure", siem: false, edr: false, cloud: true, aicyro: true },
// // // // //     { layer: "Applications", siem: true, edr: false, cloud: true, aicyro: true },
// // // // //     { layer: "AI Systems", siem: false, edr: false, cloud: false, aicyro: true },
// // // // //     { layer: "Physical Infrastructure", siem: false, edr: false, cloud: false, aicyro: true }
// // // // //   ];

// // // // //   return (
// // // // //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
// // // // //       {/* Background Ambience */}
// // // // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
// // // // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

// // // // //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// // // // //         {/* ========================================== */}
// // // // //         {/* HEADER SECTION                             */}
// // // // //         {/* ========================================== */}
// // // // //         <div className="text-center max-w-3xl mx-auto mb-20">
// // // // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
// // // // //             Why Aicyro
// // // // //           </div>
// // // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// // // // //             Full-Spectrum Coverage. <br className="hidden md:block"/>
// // // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// // // // //               One Platform.
// // // // //             </span>
// // // // //           </h2>
// // // // //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// // // // //             Most cybersecurity companies protect one layer. AICYRO protects every layer — human behavior, devices, network, cloud, applications, AI systems, and physical infrastructure — under one autonomous AI platform.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* ========================================== */}
// // // // //         {/* COMPARISON MATRIX                          */}
// // // // //         {/* ========================================== */}
        
// // // // //         {/* Mobile Wrapper allows horizontal scrolling if the screen is too small */}
// // // // //         <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
// // // // //           <div className="min-w-[800px] flex flex-col relative">
            
// // // // //             {/* Table Header */}
// // // // //             <div className="grid grid-cols-5 gap-4 mb-6 px-6">
// // // // //               <div className="col-span-1 flex items-end pb-4">
// // // // //                 <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-sm">Security Layer</span>
// // // // //               </div>
// // // // //               <div className="col-span-1 flex flex-col items-center justify-end pb-4">
// // // // //                 <span className="text-[var(--foreground-muted)] font-semibold text-sm">Traditional SIEM</span>
// // // // //               </div>
// // // // //               <div className="col-span-1 flex flex-col items-center justify-end pb-4">
// // // // //                 <span className="text-[var(--foreground-muted)] font-semibold text-sm">EDR Solutions</span>
// // // // //               </div>
// // // // //               <div className="col-span-1 flex flex-col items-center justify-end pb-4">
// // // // //                 <span className="text-[var(--foreground-muted)] font-semibold text-sm">Cloud Security</span>
// // // // //               </div>
// // // // //               {/* Highlighted Aicyro Header */}
// // // // //               <div className="col-span-1 flex flex-col items-center justify-end pb-4 relative z-20">
// // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent rounded-t-2xl border-t border-x border-[var(--primary)]/40 pointer-events-none"></div>
// // // // //                 <span className="text-[var(--foreground)] font-extrabold text-lg relative z-10 mb-2">AICYRO Shield</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Table Rows */}
// // // // //             <div className="flex flex-col gap-3 relative z-10">
              
// // // // //               {/* Massive Aicyro Highlight Column Background spanning the rows */}
// // // // //               <div className="absolute top-0 right-[0] w-[20%] h-full bg-[var(--primary)]/5 border-x border-b border-[var(--primary)]/40 rounded-b-2xl shadow-[0_0_30px_rgba(138,43,226,0.1)] z-0 pointer-events-none"></div>

// // // // //               {comparisonData.map((row, index) => (
// // // // //                 <div
// // // // //                   key={index}
// // // // //                   className="grid grid-cols-5 gap-4 px-6 py-5 bg-[var(--card-bg)]/40 backdrop-blur-md border border-[var(--border-color)] rounded-2xl items-center hover:border-[var(--primary)]/30 transition-colors duration-300 relative z-10"
// // // // //                 >
// // // // //                   {/* Layer Name */}
// // // // //                   <div className="col-span-1 flex items-center">
// // // // //                     <span className="text-[var(--foreground)] font-bold md:text-lg">{row.layer}</span>
// // // // //                   </div>
                  
// // // // //                   {/* Traditional SIEM */}
// // // // //                   <div className="col-span-1 flex justify-center">
// // // // //                     {row.siem ? <MutedCheckIcon /> : <DashIcon />}
// // // // //                   </div>

// // // // //                   {/* EDR */}
// // // // //                   <div className="col-span-1 flex justify-center">
// // // // //                     {row.edr ? <MutedCheckIcon /> : <DashIcon />}
// // // // //                   </div>

// // // // //                   {/* Cloud */}
// // // // //                   <div className="col-span-1 flex justify-center">
// // // // //                     {row.cloud ? <MutedCheckIcon /> : <DashIcon />}
// // // // //                   </div>

// // // // //                   {/* AICYRO Shield (Highlighted) */}
// // // // //                   <div className="col-span-1 flex justify-center relative">
// // // // //                     {/* The glowing active checkmark */}
// // // // //                     {row.aicyro ? <CheckIcon /> : <DashIcon />}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
            
// // // // //             {/* Bottom Glow for the Aicyro Column */}
// // // // //             <div className="absolute bottom-0 right-[2%] w-[16%] h-12 bg-[var(--primary)] blur-[30px] opacity-20 pointer-events-none z-0"></div>

// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }




// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //


// // // // import React from 'react';

// // // // export default function WhyAicyro() {
// // // //   const coverageData = [
// // // //     { layer: "Human Behavior", siem: true, edr: false, cloud: false },
// // // //     { layer: "Devices & Endpoints", siem: false, edr: true, cloud: false },
// // // //     { layer: "Network", siem: true, edr: false, cloud: false },
// // // //     { layer: "Cloud Infrastructure", siem: false, edr: false, cloud: true },
// // // //     { layer: "Applications", siem: true, edr: false, cloud: true },
// // // //     { layer: "AI Systems", siem: false, edr: false, cloud: false },
// // // //     { layer: "Physical Infrastructure", siem: false, edr: false, cloud: false }
// // // //   ];

// // // //   // Helper icons for the fragmented legacy tools
// // // //   const CoveredDot = () => (
// // // //     <div className="w-6 h-6 rounded-full bg-[var(--foreground-muted)]/20 border border-[var(--foreground-muted)]/40 flex items-center justify-center">
// // // //       <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground-muted)]"></div>
// // // //     </div>
// // // //   );

// // // //   const GapDot = () => (
// // // //     <div className="w-6 h-6 rounded-full flex items-center justify-center opacity-20">
// // // //       <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-color)]"></div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans">
      
// // // //       {/* Background Tech Grid & Glows */}
// // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_20%,transparent_100%)] opacity-20 z-0"></div>
// // // //       <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none z-0"></div>
// // // //       <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none z-0"></div>

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// // // //         {/* ========================================== */}
// // // //         {/* SECTION HEADER                             */}
// // // //         {/* ========================================== */}
// // // //         <div className="text-center max-w-3xl mx-auto mb-20">
// // // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
// // // //             Why Aicyro
// // // //           </div>
// // // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// // // //             Full-Spectrum Coverage. <br className="hidden md:block"/>
// // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// // // //               One Platform.
// // // //             </span>
// // // //           </h2>
// // // //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// // // //             Most cybersecurity companies protect one layer, leaving critical gaps. AICYRO protects every layer under one autonomous AI platform, eliminating blind spots entirely.
// // // //           </p>
// // // //         </div>

// // // //         {/* ========================================== */}
// // // //         {/* THE UNBROKEN PILLAR MATRIX                 */}
// // // //         {/* ========================================== */}
// // // //         <div className="w-full overflow-x-auto pb-12 scrollbar-hide">
// // // //           {/* min-w ensures the layout doesn't break on mobile, just scrolls horizontally */}
// // // //           <div className="min-w-[900px] relative bg-[var(--card-bg)]/30 backdrop-blur-2xl border border-[var(--border-color)] rounded-3xl p-8 lg:p-12 shadow-2xl">
            
// // // //             {/* Headers */}
// // // //             <div className="flex w-full mb-8 pb-6 border-b border-[var(--border-color)]/50">
// // // //               <div className="w-1/3 text-left">
// // // //                 <span className="text-[var(--foreground)] font-bold uppercase tracking-wider text-sm">Security Layer</span>
// // // //               </div>
// // // //               <div className="w-1/6 text-center">
// // // //                 <span className="text-[var(--foreground-muted)] font-bold text-sm">Traditional SIEM</span>
// // // //               </div>
// // // //               <div className="w-1/6 text-center">
// // // //                 <span className="text-[var(--foreground-muted)] font-bold text-sm">EDR Solutions</span>
// // // //               </div>
// // // //               <div className="w-1/6 text-center">
// // // //                 <span className="text-[var(--foreground-muted)] font-bold text-sm">Cloud Security</span>
// // // //               </div>
              
// // // //               {/* Spacer for Aicyro Column */}
// // // //               <div className="w-[20%] text-center"></div>
// // // //             </div>

// // // //             {/* Matrix Body */}
// // // //             <div className="relative flex flex-col gap-6">
              
// // // //               {/* ============================================================ */}
// // // //               {/* THE AICYRO PILLAR (Absolutely positioned over the grid)      */}
// // // //               {/* ============================================================ */}
// // // //               <div className="absolute -top-20 right-[1.5%] w-[20%] h-[calc(100%+12rem)] z-20 flex flex-col">
// // // //                 {/* Glowing Crown */}
// // // //                 <div className="h-20 flex items-center justify-center bg-gradient-to-b from-transparent to-[var(--primary)]/90 rounded-t-3xl border-t border-x border-[var(--primary)] shadow-[0_-10px_30px_rgba(138,43,226,0.2)]">
// // // //                   <span className="text-white font-extrabold text-lg tracking-wide">AICYRO Shield</span>
// // // //                 </div>
                
// // // //                 {/* Unbroken Light Beam Column */}
// // // //                 <div className="flex-1 bg-gradient-to-b from-[var(--primary)]/90 via-[var(--accent-blue)]/80 to-[var(--primary)]/90 border-x border-[var(--primary)] flex flex-col gap-6 pt-6 pb-2 backdrop-blur-md">
// // // //                   {coverageData.map((_, i) => (
// // // //                     <div key={i} className="flex-1 flex items-center justify-center w-full">
// // // //                       {/* Active Glowing Node */}
// // // //                       <div className="relative flex items-center justify-center">
// // // //                         <div className="absolute w-8 h-8 rounded-full bg-white/20 animate-ping"></div>
// // // //                         <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_15px_white] flex items-center justify-center z-10">
// // // //                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--primary)]">
// // // //                             <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
// // // //                           </svg>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
                  
// // // //                   {/* Coverage Percentage Final Box */}
// // // //                   <div className="mt-8 flex-1 flex items-center justify-center">
// // // //                     <span className="text-white font-black text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">100%</span>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Pillar Base */}
// // // //                 <div className="h-6 bg-gradient-to-t from-transparent to-[var(--primary)]/90 rounded-b-3xl border-b border-x border-[var(--primary)]"></div>
// // // //               </div>


// // // //               {/* ============================================================ */}
// // // //               {/* LAYER ROWS (Background Data)                                 */}
// // // //               {/* ============================================================ */}
// // // //               {coverageData.map((row, index) => (
// // // //                 <div key={index} className="flex w-full items-center group relative z-10">
// // // //                   {/* Layer Title */}
// // // //                   <div className="w-1/3 flex items-center gap-4">
// // // //                     <div className="w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/40 transition-colors shadow-sm">
// // // //                       <span className="font-mono text-xs">0{index + 1}</span>
// // // //                     </div>
// // // //                     <span className="text-[var(--foreground)] font-bold text-lg group-hover:text-[var(--primary)] transition-colors">{row.layer}</span>
// // // //                   </div>
                  
// // // //                   {/* SIEM Column */}
// // // //                   <div className="w-1/6 flex justify-center">
// // // //                     {row.siem ? <CoveredDot /> : <GapDot />}
// // // //                   </div>

// // // //                   {/* EDR Column */}
// // // //                   <div className="w-1/6 flex justify-center">
// // // //                     {row.edr ? <CoveredDot /> : <GapDot />}
// // // //                   </div>

// // // //                   {/* Cloud Column */}
// // // //                   <div className="w-1/6 flex justify-center">
// // // //                     {row.cloud ? <CoveredDot /> : <GapDot />}
// // // //                   </div>
                  
// // // //                   {/* Empty space behind the Aicyro Pillar */}
// // // //                   <div className="w-[20%]"></div>
// // // //                 </div>
// // // //               ))}

// // // //               {/* Data-Driven Coverage Row */}
// // // //               <div className="flex w-full items-center mt-8 pt-6 border-t border-[var(--border-color)]/50 relative z-10">
// // // //                 <div className="w-1/3">
// // // //                   <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-xs">Total Protection Score</span>
// // // //                 </div>
// // // //                 <div className="w-1/6 flex flex-col items-center">
// // // //                   <span className="text-[var(--foreground)] font-mono font-bold text-xl">42%</span>
// // // //                   <span className="text-[var(--foreground-muted)] text-[10px] uppercase">Coverage</span>
// // // //                 </div>
// // // //                 <div className="w-1/6 flex flex-col items-center">
// // // //                   <span className="text-[var(--foreground)] font-mono font-bold text-xl">14%</span>
// // // //                   <span className="text-[var(--foreground-muted)] text-[10px] uppercase">Coverage</span>
// // // //                 </div>
// // // //                 <div className="w-1/6 flex flex-col items-center">
// // // //                   <span className="text-[var(--foreground)] font-mono font-bold text-xl">28%</span>
// // // //                   <span className="text-[var(--foreground-muted)] text-[10px] uppercase">Coverage</span>
// // // //                 </div>
// // // //                 <div className="w-[20%]"></div>
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //

// // // import React from 'react';

// // // export default function WhyAicyro() {
// // //   const coverageData = [
// // //     { layer: "Human Behavior", siem: true, edr: false, cloud: false },
// // //     { layer: "Devices & Endpoints", siem: false, edr: true, cloud: false },
// // //     { layer: "Network", siem: true, edr: false, cloud: false },
// // //     { layer: "Cloud Infrastructure", siem: false, edr: false, cloud: true },
// // //     { layer: "Applications", siem: true, edr: false, cloud: true },
// // //     { layer: "AI Systems", siem: false, edr: false, cloud: false },
// // //     { layer: "Physical Infrastructure", siem: false, edr: false, cloud: false }
// // //   ];

// // //   // Shield Icon for Aicyro (Full Protection)
// // //   const ShieldIcon = () => (
// // //     <div className="relative flex items-center justify-center">
// // //       <div className="absolute w-8 h-8 bg-[var(--primary)] rounded-full blur-md opacity-50"></div>
// // //       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.6)] z-10 border border-white/20">
// // //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
// // //           <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
// // //         </svg>
// // //       </div>
// // //     </div>
// // //   );

// // //   // Neutral Check for Legacy Tools (Partial Protection)
// // //   const CoveredDot = () => (
// // //     <div className="w-6 h-6 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center shadow-inner">
// // //       <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground-muted)] opacity-50"></div>
// // //     </div>
// // //   );

// // //   // Red Pulsing Warning for Gaps (Vulnerability)
// // //   const VulnerableDot = () => (
// // //     <div className="relative flex items-center justify-center group/vuln cursor-help">
// // //       <div className="absolute w-4 h-4 bg-red-500 rounded-full blur-sm opacity-20 animate-pulse"></div>
// // //       <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 z-10"></div>
      
// // //       {/* Tooltip on hover to emphasize the danger */}
// // //       <div className="absolute bottom-full mb-2 opacity-0 group-hover/vuln:opacity-100 transition-opacity bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] uppercase font-bold px-2 py-1 rounded backdrop-blur-md pointer-events-none whitespace-nowrap">
// // //         Vulnerability Gap
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
// // //       {/* Dynamic Radar Grid Background */}
// // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)] opacity-20 z-0"></div>
      
// // //       {/* Scanning Radar Line */}
// // //       <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)] opacity-20 blur-[2px] animate-[scan_6s_linear_infinite] z-0"></div>

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// // //         {/* ========================================== */}
// // //         {/* SECTION HEADER                             */}
// // //         {/* ========================================== */}
// // //         <div className="text-center max-w-3xl mx-auto mb-20">
// // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)] border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
// // //             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-ping"></span>
// // //             Threat Coverage Matrix
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// // //             Full-Spectrum Coverage. <br className="hidden md:block"/>
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// // //               One Platform.
// // //             </span>
// // //           </h2>
// // //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// // //             Most cybersecurity companies protect one layer, leaving critical gaps that adversaries exploit. AICYRO protects every layer under one autonomous AI platform.
// // //           </p>
// // //         </div>

// // //         {/* ========================================== */}
// // //         {/* ACTIVE THREAT MATRIX GRID                  */}
// // //         {/* ========================================== */}
// // //         <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
// // //           <div className="min-w-[900px] border border-[var(--border-color)]/50 bg-[var(--card-bg)]/20 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden">
            
// // //             {/* Table Header */}
// // //             <div className="grid grid-cols-6 gap-4 p-6 border-b border-[var(--border-color)]/50 bg-[var(--background)]/50">
// // //               <div className="col-span-2 flex items-center">
// // //                 <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-xs">Security Layer</span>
// // //               </div>
// // //               <div className="col-span-1 flex justify-center items-center">
// // //                 <span className="text-[var(--foreground-muted)] font-bold text-xs uppercase">Traditional SIEM</span>
// // //               </div>
// // //               <div className="col-span-1 flex justify-center items-center">
// // //                 <span className="text-[var(--foreground-muted)] font-bold text-xs uppercase">EDR Solutions</span>
// // //               </div>
// // //               <div className="col-span-1 flex justify-center items-center">
// // //                 <span className="text-[var(--foreground-muted)] font-bold text-xs uppercase">Cloud Security</span>
// // //               </div>
// // //               <div className="col-span-1 flex justify-center items-center relative">
// // //                 {/* Glowing Crown for Aicyro Column */}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent blur-md"></div>
// // //                 <span className="text-[var(--primary)] font-extrabold text-sm uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">AICYRO Shield</span>
// // //               </div>
// // //             </div>

// // //             {/* Matrix Body */}
// // //             <div className="relative">
// // //               {/* Continuous Background Pillar for Aicyro */}
// // //               <div className="absolute top-0 right-0 w-[16.666%] h-full bg-gradient-to-b from-[var(--primary)]/10 via-[var(--accent-blue)]/5 to-[var(--primary)]/10 border-x border-[var(--primary)]/30 pointer-events-none z-0"></div>

// // //               {coverageData.map((row, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="grid grid-cols-6 gap-4 p-4 border-b border-[var(--border-color)]/30 hover:bg-[var(--card-bg)]/60 transition-colors duration-300 group/row relative z-10"
// // //                 >
// // //                   {/* Layer Name */}
// // //                   <div className="col-span-2 flex items-center gap-4 pl-4">
// // //                     <div className="w-8 h-8 rounded-lg bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] group-hover/row:border-[var(--primary)]/50 group-hover/row:text-[var(--primary)] transition-all shadow-sm">
// // //                       <span className="font-mono text-[10px]">0{index + 1}</span>
// // //                     </div>
// // //                     <span className="text-[var(--foreground)] font-bold md:text-lg group-hover/row:text-[var(--primary)] transition-colors">{row.layer}</span>
// // //                   </div>
                  
// // //                   {/* Competitor Columns */}
// // //                   <div className="col-span-1 flex justify-center items-center border-l border-[var(--border-color)]/20">
// // //                     {row.siem ? <CoveredDot /> : <VulnerableDot />}
// // //                   </div>

// // //                   <div className="col-span-1 flex justify-center items-center border-l border-[var(--border-color)]/20">
// // //                     {row.edr ? <CoveredDot /> : <VulnerableDot />}
// // //                   </div>

// // //                   <div className="col-span-1 flex justify-center items-center border-l border-[var(--border-color)]/20">
// // //                     {row.cloud ? <CoveredDot /> : <VulnerableDot />}
// // //                   </div>
                  
// // //                   {/* Aicyro Column */}
// // //                   <div className="col-span-1 flex justify-center items-center border-l border-[var(--primary)]/30 group-hover/row:bg-[var(--primary)]/5 transition-colors duration-300">
// // //                     <ShieldIcon />
// // //                   </div>
// // //                 </div>
// // //               ))}

// // //               {/* Data-Driven Summary Footer */}
// // //               <div className="grid grid-cols-6 gap-4 p-6 bg-[#05000a]/50 border-t-2 border-[var(--primary)]/40 relative z-10">
// // //                 <div className="col-span-2 flex items-center pl-4">
// // //                   <span className="text-[var(--foreground)] font-bold uppercase tracking-wider text-xs">Total Infrastructure Secured</span>
// // //                 </div>
// // //                 <div className="col-span-1 flex flex-col items-center justify-center">
// // //                   <span className="text-[var(--foreground-muted)] font-mono font-bold text-2xl opacity-50">42%</span>
// // //                 </div>
// // //                 <div className="col-span-1 flex flex-col items-center justify-center">
// // //                   <span className="text-[var(--foreground-muted)] font-mono font-bold text-2xl opacity-50">14%</span>
// // //                 </div>
// // //                 <div className="col-span-1 flex flex-col items-center justify-center">
// // //                   <span className="text-[var(--foreground-muted)] font-mono font-bold text-2xl opacity-50">28%</span>
// // //                 </div>
// // //                 <div className="col-span-1 flex flex-col items-center justify-center relative">
// // //                   <span className="text-white font-mono font-black text-4xl drop-shadow-[0_0_15px_rgba(138,43,226,0.8)]">100%</span>
// // //                   <div className="absolute w-full h-1 bottom-0 bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></div>
// // //                 </div>
// // //               </div>

// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* CSS for Radar Scan */}
// // //         <style>{`
// // //           @keyframes scan {
// // //             0% { top: 0; opacity: 0; }
// // //             10% { opacity: 0.5; }
// // //             90% { opacity: 0.5; }
// // //             100% { top: 100%; opacity: 0; }
// // //           }
// // //         `}</style>

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
// // ///
// // //
// // //
// // //
// // //


// // import React, { useState } from 'react';

// // export default function WhyAicyro() {
// //   const [hoveredLayer, setHoveredLayer] = useState(null);

// //   // Data mapping representing the fragmented nature of legacy tools
// //   const layers = [
// //     {
// //       id: 0,
// //       name: "Human Behavior",
// //       tools: [{ name: "SIEM", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" }],
// //       gapWidth: "w-1/2"
// //     },
// //     {
// //       id: 1,
// //       name: "Devices & Endpoints",
// //       tools: [{ name: "EDR", color: "text-green-400 bg-green-500/10 border-green-500/30" }],
// //       gapWidth: "w-1/2"
// //     },
// //     {
// //       id: 2,
// //       name: "Network",
// //       tools: [{ name: "SIEM", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" }],
// //       gapWidth: "w-1/2"
// //     },
// //     {
// //       id: 3,
// //       name: "Cloud Infrastructure",
// //       tools: [{ name: "Cloud Sec", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" }],
// //       gapWidth: "w-1/2"
// //     },
// //     {
// //       id: 4,
// //       name: "Applications",
// //       tools: [
// //         { name: "SIEM", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
// //         { name: "Cloud Sec", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" }
// //       ],
// //       gapWidth: "w-1/4" // Smaller gap since two tools try to cover it
// //     },
// //     {
// //       id: 5,
// //       name: "AI Systems",
// //       tools: [],
// //       gapWidth: "w-full",
// //       critical: true
// //     },
// //     {
// //       id: 6,
// //       name: "Physical Infrastructure",
// //       tools: [],
// //       gapWidth: "w-full",
// //       critical: true
// //     }
// //   ];

// //   return (
// //     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
// //       {/* Background Ambient Glows */}
// //       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
// //       <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

// //       {/* Warning Stripe CSS Pattern for Legacy Gaps */}
// //       <style>{`
// //         .warning-stripe {
// //           background-image: repeating-linear-gradient(
// //             45deg,
// //             transparent,
// //             transparent 10px,
// //             rgba(239, 68, 68, 0.05) 10px,
// //             rgba(239, 68, 68, 0.05) 20px
// //           );
// //         }
// //       `}</style>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// //         {/* ========================================== */}
// //         {/* SECTION HEADER                             */}
// //         {/* ========================================== */}
// //         <div className="text-center max-w-3xl mx-auto mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
// //             Why Aicyro
// //           </div>
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
// //             Full-Spectrum Coverage. <br className="hidden md:block"/>
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// //               One Platform.
// //             </span>
// //           </h2>
// //           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
// //             Most cybersecurity companies protect one layer. AICYRO protects every layer — human behavior, devices, network, cloud, applications, AI systems, and physical infrastructure — under one autonomous AI platform.
// //           </p>
// //         </div>

// //         {/* ========================================== */}
// //         {/* DUAL-STACK COMPARISON BOARD                */}
// //         {/* ========================================== */}
// //         <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-stretch">
          
// //           {/* LEFT SIDE: The Fragmented Legacy Stack */}
// //           <div className="w-full xl:w-1/2 flex flex-col">
// //             <div className="mb-6 flex items-center justify-between px-2">
// //               <h3 className="text-xl font-bold text-[var(--foreground)]">Fragmented Legacy Approach</h3>
// //               <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">High Risk</span>
// //             </div>
            
// //             <div className="flex flex-col gap-3">
// //               {layers.map((layer) => (
// //                 <div
// //                   key={`legacy-${layer.id}`}
// //                   onMouseEnter={() => setHoveredLayer(layer.id)}
// //                   onMouseLeave={() => setHoveredLayer(null)}
// //                   className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
// //                     hoveredLayer === layer.id
// //                       ? 'bg-[var(--card-bg)] border-[var(--border-color)] scale-[1.02]'
// //                       : 'bg-[var(--card-bg)]/40 border-[var(--border-color)]/50 hover:bg-[var(--card-bg)]/80'
// //                   }`}
// //                 >
// //                   {/* Layer Name */}
// //                   <div className="w-full sm:w-1/3 shrink-0">
// //                     <span className={`font-semibold text-sm transition-colors ${hoveredLayer === layer.id ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'}`}>
// //                       {layer.name}
// //                     </span>
// //                   </div>
                  
// //                   {/* Coverage Visualization */}
// //                   <div className="flex-1 flex gap-2 h-10">
// //                     {/* Tool Blocks */}
// //                     {layer.tools.map((tool, i) => (
// //                       <div key={i} className={`flex-1 flex items-center justify-center rounded-lg border text-xs font-bold tracking-wider ${tool.color}`}>
// //                         {tool.name}
// //                       </div>
// //                     ))}
                    
// //                     {/* Vulnerability Gap Block */}
// //                     <div className={`${layer.gapWidth} flex items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 warning-stripe relative overflow-hidden group`}>
// //                       <span className="text-red-500/60 font-mono text-[10px] uppercase font-bold tracking-widest z-10">
// //                         {layer.critical ? 'CRITICAL BLIND SPOT' : 'GAP'}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* VS Divider (Visible only on desktop) */}
// //           <div className="hidden xl:flex flex-col items-center justify-center w-12 shrink-0">
// //             <div className="w-px h-full bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent"></div>
// //             <div className="w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] text-xs font-black absolute z-10 shadow-lg">
// //               VS
// //             </div>
// //           </div>

// //           {/* RIGHT SIDE: The Unified Aicyro Shield */}
// //           <div className="w-full xl:w-1/2 flex flex-col mt-12 xl:mt-0">
// //             <div className="mb-6 flex items-center justify-between px-2">
// //               <h3 className="text-xl font-bold text-[var(--primary)] flex items-center gap-2">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
// //                   <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
// //                 </svg>
// //                 AICYRO Shield
// //               </h3>
// //               <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/30">100% Protected</span>
// //             </div>
            
// //             {/* The Unified Pillar Container */}
// //             <div className="relative flex flex-col bg-gradient-to-b from-[var(--primary)]/20 via-[var(--accent-blue)]/10 to-[var(--primary)]/20 rounded-3xl border border-[var(--primary)]/40 overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.1)] h-full">
              
// //               {/* Animated Internal Scanning Line */}
// //               <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[var(--primary)]/30 blur-xl animate-[scan_4s_ease-in-out_infinite] pointer-events-none"></div>

// //               {layers.map((layer, index) => (
// //                 <div
// //                   key={`aicyro-${layer.id}`}
// //                   onMouseEnter={() => setHoveredLayer(layer.id)}
// //                   onMouseLeave={() => setHoveredLayer(null)}
// //                   className={`flex items-center flex-1 px-8 py-4 sm:py-0 border-b border-[var(--primary)]/10 last:border-0 transition-all duration-300 relative z-10 ${
// //                     hoveredLayer === layer.id
// //                       ? 'bg-[var(--primary)]/20 pl-10'
// //                       : 'hover:bg-[var(--primary)]/10'
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-4 w-full">
// //                     {/* Active Link Node */}
// //                     <div className={`transition-all duration-300 ${hoveredLayer === layer.id ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`}>
// //                       <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></div>
// //                     </div>
                    
// //                     <span className={`font-bold text-lg transition-colors duration-300 ${hoveredLayer === layer.id ? 'text-white' : 'text-[var(--foreground)]'}`}>
// //                       {layer.name}
// //                     </span>
                    
// //                     {/* Connected Status */}
// //                     <span className="ml-auto text-[10px] font-mono text-[var(--primary)] uppercase tracking-widest opacity-60 hidden sm:block">
// //                       Secured
// //                     </span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //         </div>

// //         {/* Scan Animation Keyframes */}
// //         <style>{`
// //           @keyframes scan {
// //             0% { transform: translateY(-100%); opacity: 0; }
// //             50% { opacity: 1; }
// //             100% { transform: translateY(800%); opacity: 0; }
// //           }
// //         `}</style>

// //       </div>
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
// ///
// //
// //
// //
// //
// //
// //

// import React from 'react';

// export default function WhyAicyro() {
//   const coverageData = [
//     {
//       layer: "Human Behavior",
//       legacyTools: ["SIEM"],
//       missing: ["EDR", "Cloud"],
//       gap: "Insider threats undetected"
//     },
//     {
//       layer: "Devices & Endpoints",
//       legacyTools: ["EDR"],
//       missing: ["SIEM", "Cloud"],
//       gap: "No behavioral context"
//     },
//     {
//       layer: "Network",
//       legacyTools: ["SIEM"],
//       missing: ["EDR", "Cloud"],
//       gap: "Lateral movement invisible"
//     },
//     {
//       layer: "Cloud Infrastructure",
//       legacyTools: ["Cloud Sec"],
//       missing: ["SIEM", "EDR"],
//       gap: "Disconnected from endpoints"
//     },
//     {
//       layer: "Applications",
//       legacyTools: ["SIEM", "Cloud Sec"],
//       missing: ["EDR"],
//       gap: "Delayed alert triage"
//     },
//     {
//       layer: "AI Systems",
//       legacyTools: [],
//       missing: ["SIEM", "EDR", "Cloud"],
//       gap: "Critical Model Poisoning Risk"
//     },
//     {
//       layer: "Physical Infrastructure",
//       legacyTools: [],
//       missing: ["SIEM", "EDR", "Cloud"],
//       gap: "Complete blind spot"
//     }
//   ];

//   return (
//     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
//       {/* Ambient Background Glows */}
//       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
//       <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

//       {/* Global CSS for the sweeping shine animation */}
//       <style>{`
//         @keyframes shine {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }
//         .animate-shine {
//           animation: shine 3s infinite ease-in-out;
//         }
//         .warning-stripes {
//           background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(239, 68, 68, 0.1) 5px, rgba(239, 68, 68, 0.1) 10px);
//         }
//       `}</style>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* SECTION HEADER                             */}
//         {/* ========================================== */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
//             <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse"></span>
//             Why Aicyro
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
//             Full-Spectrum Coverage. <br className="hidden md:block"/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//               One Platform.
//             </span>
//           </h2>
//           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
//             Most cybersecurity companies protect one layer, leaving devastating blind spots. AICYRO protects every layer under one autonomous AI platform.
//           </p>
//         </div>

//         {/* ========================================== */}
//         {/* TELEMETRY DASHBOARD                        */}
//         {/* ========================================== */}
//         <div className="bg-[var(--card-bg)]/20 backdrop-blur-2xl border border-[var(--border-color)] rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
//           {/* Dashboard Header Bar */}
//           <div className="hidden lg:flex items-center gap-8 mb-6 pb-4 border-b border-[var(--border-color)]/50 px-4">
//             <div className="w-1/4">
//               <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-xs">Security Vector</span>
//             </div>
//             <div className="w-1/3">
//               <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-xs">Legacy Stack (Fragmented)</span>
//             </div>
//             <div className="flex-1">
//               <span className="text-[var(--primary)] font-bold uppercase tracking-wider text-xs drop-shadow-[0_0_8px_var(--primary)]">AICYRO Shield (Unified)</span>
//             </div>
//           </div>

//           {/* Rows */}
//           <div className="flex flex-col gap-4">
//             {coverageData.map((row, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col lg:flex-row items-start lg:items-center gap-6 p-5 rounded-2xl bg-[var(--background)]/40 border border-[var(--border-color)]/50 hover:bg-[var(--card-bg)]/80 hover:border-[var(--primary)]/30 transition-all duration-300 group"
//               >
                
//                 {/* 1. Vector Name */}
//                 <div className="w-full lg:w-1/4 flex items-center gap-4">
//                   <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/40 transition-colors">
//                     <span className="font-mono text-xs">0{index + 1}</span>
//                   </div>
//                   <span className="text-[var(--foreground)] font-bold text-lg group-hover:text-[var(--primary)] transition-colors">
//                     {row.layer}
//                   </span>
//                 </div>

//                 {/* 2. Legacy Stack Visualization */}
//                 <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                   <div className="flex gap-2 h-8">
//                     {/* Active Legacy Tools */}
//                     {row.legacyTools.map((tool, i) => (
//                       <div key={`tool-${i}`} className="flex-1 flex items-center justify-center rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground-muted)] text-[10px] font-bold uppercase tracking-wider">
//                         {tool}
//                       </div>
//                     ))}
//                     {/* Missing Tools / Gaps */}
//                     {row.missing.map((miss, i) => (
//                       <div key={`miss-${i}`} className="flex-1 flex items-center justify-center rounded border border-red-500/20 bg-red-500/5 warning-stripes relative overflow-hidden">
//                         <span className="text-red-500/40 text-[10px] font-bold uppercase tracking-wider z-10">Gap</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-2 mt-1">
//                     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//                     <span className="text-red-400 font-mono text-[10px] uppercase">{row.gap}</span>
//                   </div>
//                 </div>

//                 {/* 3. Aicyro Shield Verification */}
//                 <div className="w-full lg:flex-1 mt-4 lg:mt-0">
//                   <div className="w-full h-12 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] p-px shadow-[0_0_20px_rgba(138,43,226,0.1)] group-hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] transition-all relative overflow-hidden">
//                     <div className="absolute inset-0 w-full h-full bg-[var(--card-bg)] rounded-xl opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    
//                     {/* The sweeping light effect */}
//                     <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine z-10"></div>
                    
//                     <div className="relative z-20 w-full h-full flex items-center justify-between px-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
//                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
//                             <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                         <span className="text-white font-bold text-sm tracking-wide">100% Autonomous Coverage</span>
//                       </div>
//                       <span className="hidden sm:block text-white/70 font-mono text-[10px] uppercase tracking-widest">Active</span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             ))}
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
////
//
//
//
import React, { useState } from 'react';

export default function WhyAicyro() {
  // State to track which tool the user is currently "simulating"
  const [activeTool, setActiveTool] = useState('aicyro');

    const tools = [
    { id: 'aicyro', name: 'AICYRO Shield', coverage: 100, status: 'Fully Secured' },
  
    { id: 'siem', name: 'Traditional SIEM', coverage: 42, status: 'High Risk' },
    { id: 'edr', name: 'EDR Solutions', coverage: 14, status: 'Critical Risk' },
    { id: 'cloud', name: 'Cloud Security', coverage: 28, status: 'Severe Risk' }
  ];

  const layers = [
    { id: 1, name: "Human Behavior", siem: true, edr: false, cloud: false, aicyro: true },
    { id: 2, name: "Devices & Endpoints", siem: false, edr: true, cloud: false, aicyro: true },
    { id: 3, name: "Network", siem: true, edr: false, cloud: false, aicyro: true },
    { id: 4, name: "Cloud Infrastructure", siem: false, edr: false, cloud: true, aicyro: true },
    { id: 5, name: "Applications", siem: true, edr: false, cloud: true, aicyro: true },
    { id: 6, name: "AI Systems", siem: false, edr: false, cloud: false, aicyro: true },
    { id: 7, name: "Physical Infrastructure", siem: false, edr: false, cloud: false, aicyro: true }
  ];

  const currentToolData = tools.find(t => t.id === activeTool);

  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
      {/* Deep Ambient Background Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none z-0 transition-colors duration-1000 ${activeTool === 'aicyro' ? 'bg-[var(--primary)] opacity-[0.05]' : 'bg-red-500 opacity-[0.03]'}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
            Why Aicyro
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
            Full-Spectrum Coverage. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              One Platform.
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            Run the simulation below. See how traditional tools leave massive blind spots in your infrastructure, while AICYRO locks down every layer autonomously.
          </p>
        </div>

        {/* ========================================== */}
        {/* INTERACTIVE SIMULATOR                      */}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT: Controls & Status Panel */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Control Panel */}
            <div className="bg-[var(--card-bg)]/40 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-6 shadow-xl">
              <h3 className="text-[var(--foreground)] font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[var(--primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                Select Security Stack
              </h3>
              
              <div className="flex flex-col gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`relative w-full text-left px-5 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
                      activeTool === tool.id
                        ? tool.id === 'aicyro'
                          ? 'bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(138,43,226,0.3)] scale-105 z-10 border border-[var(--primary)]'
                          : 'bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-color)] scale-105 z-10 shadow-lg'
                        : 'bg-transparent text-[var(--foreground-muted)] border border-transparent hover:bg-[var(--card-bg)]/30 hover:border-[var(--border-color)]'
                    }`}
                  >
                    {activeTool === tool.id && tool.id !== 'aicyro' && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                    )}
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Live System Status Readout */}
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl transition-all duration-500 ${
              activeTool === 'aicyro' 
                ? 'bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent-blue)]/5 border-[var(--primary)]/40' 
                : 'bg-red-500/5 border-red-500/20'
            }`}>
              <span className="text-[var(--foreground-muted)] text-xs font-bold uppercase tracking-widest block mb-6">System Telemetry</span>
              
              <div className="flex items-end gap-4 mb-8">
                <span className={`text-6xl font-black font-mono tracking-tighter ${activeTool === 'aicyro' ? 'text-[var(--foreground)]' : 'text-red-500'}`}>
                  {currentToolData.coverage}%
                </span>
                <span className="text-[var(--foreground-muted)] mb-2 font-medium">Coverage</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[var(--border-color)]/30">
                  <span className="text-sm text-[var(--foreground-muted)]">Threat Status</span>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${activeTool === 'aicyro' ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-red-500/20 text-red-500 animate-pulse'}`}>
                    {currentToolData.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--foreground-muted)]">Blind Spots</span>
                  <span className={`text-sm font-bold font-mono ${activeTool === 'aicyro' ? 'text-[var(--foreground)]' : 'text-red-500'}`}>
                    {7 - layers.filter(l => l[activeTool]).length} Detected
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Active Simulation Stack */}
          <div className="w-full lg:w-2/3 flex flex-col gap-3 relative">
            
            {/* Visual connecting line for Aicyro Mode */}
            <div className={`absolute top-6 bottom-6 left-12 w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--accent-blue)] transition-opacity duration-700 z-0 shadow-[0_0_15px_var(--primary)] ${activeTool === 'aicyro' ? 'opacity-100' : 'opacity-0'}`}></div>

            {layers.map((layer) => {
              const isProtected = layer[activeTool];
              
              return (
                <div 
                  key={layer.id}
                  className={`relative z-10 flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isProtected 
                      ? activeTool === 'aicyro'
                        ? 'bg-[var(--card-bg)]/80 border-[var(--primary)]/40 shadow-[0_0_20px_rgba(138,43,226,0.1)] backdrop-blur-md'
                        : 'bg-[var(--card-bg)] border-[var(--border-color)]'
                      : 'bg-red-500/10 border-red-500/30 backdrop-blur-md'
                  }`}
                >
                  {/* Background warning stripes for unprotected layers */}
                  {!isProtected && (
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.05)_10px,rgba(239,68,68,0.05)_20px)] pointer-events-none"></div>
                  )}

                  {/* Status Node Icon */}
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${
                    isProtected 
                      ? activeTool === 'aicyro'
                        ? 'bg-[var(--primary)] text-white shadow-[0_0_15px_var(--primary)]'
                        : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)]'
                      : 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                  }`}>
                    {isProtected ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>

                  {/* Layer Text */}
                  <div className="flex-1 relative z-10">
                    <h4 className={`text-base md:text-lg font-bold transition-colors ${
                      isProtected ? 'text-[var(--foreground)]' : 'text-red-100'
                    }`}>
                      {layer.name}
                    </h4>
                  </div>

                  {/* Status Readout */}
                  <div className="relative z-10 shrink-0 hidden sm:block">
                    {isProtected ? (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${
                        activeTool === 'aicyro' ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-[var(--card-bg)] text-[var(--foreground-muted)] border border-[var(--border-color)]'
                      }`}>
                        Secured
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                        Vulnerable
                      </span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}