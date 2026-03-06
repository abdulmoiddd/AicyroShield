// import React from 'react';

// export default function AboutAicyro() {
//   return (
//     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans ">
      
//       {/* ========================================== */}
//       {/* AMBIENT BACKGROUND                         */}
//       {/* ========================================== */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* SECTION HEADER                             */}
//         {/* ========================================== */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
//             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-ping"></span>
//             About AICYRO
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
//             An <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">AI-First</span> <br className="hidden md:block"/>
//             Security Company
//           </h2>
//         </div>

//         {/* ========================================== */}
//         {/* DUAL-CORE NARRATIVE GRID                   */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
//           {/* ========================================== */}
//           {/* LEFT CARD: OUR MISSION                     */}
//           {/* ========================================== */}
//           <div className="relative bg-[var(--card-bg)]/40 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary)]/40 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(138,43,226,0.05)] overflow-hidden group">
            
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)]/10 to-transparent blur-3xl rounded-full group-hover:from-[var(--primary)]/20 transition-colors duration-500"></div>

//             <div className="relative z-10 flex flex-col h-full">
//               <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
//                 </svg>
//               </div>

//               <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">Our Mission</h3>
              
//               <div className="space-y-6 text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed">
//                 <p>
//                   AICYRO was founded with a singular mission: to build the world's most intelligent autonomous security platform. We believe that the future of cybersecurity is not more alerts, more dashboards, or more analysts it's <strong className="text-[var(--foreground)] font-semibold">autonomous AI systems that detect, analyze, and respond to threats faster than any human can.</strong>
//                 </p>
//                 <p>
//                   Our team of security researchers, AI engineers, and enterprise architects is building next-generation security infrastructure that protects organizations across every attack surface from endpoints to AI models, from cloud workloads to physical facilities.
//                 </p>
//               </div>

//               {/* Decorative Tech Detail */}
//               <div className="mt-auto pt-10">
//                 <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-[var(--background)]/50 border border-[var(--border-color)] border-l-4 border-l-[var(--primary)]">
//                   <div className="flex -space-x-3 shrink-0">
//                     <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">AI</div>
//                     <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">SEC</div>
//                     <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">ENG</div>
//                   </div>
//                   <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
//                     Elite Research & Engineering
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ========================================== */}
//           {/* RIGHT CARD: OUR APPROACH & ASIC VISUAL       */}
//           {/* ========================================== */}
//           <div className="relative bg-[var(--card-bg)]/40 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--accent-blue)]/40 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,191,255,0.05)] overflow-hidden group flex flex-col">
            
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--accent-blue)]/5 to-transparent pointer-events-none"></div>

//             <div className="relative z-10">
//               <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-all duration-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
//                 </svg>
//               </div>

//               <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">Our Approach</h3>
              
//               <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed mb-10">
//                 We don't bolt AI onto legacy security tools. AICYRO Shield was built from the ground up as an AI-native platform, with machine learning at the core of every detection, analysis, and response function.
//               </p>
//             </div>

//             {/* ASIC: AICYRO Security Intelligence Core Visualization */}
//             <div className="mt-auto relative w-full aspect-video md:aspect-[21/9] lg:aspect-video rounded-2xl bg-[#050505] border border-[var(--border-color)]/80 shadow-inner flex items-center justify-center overflow-hidden">
              
//               {/* Background Radar Grid */}
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>

//               {/* Data Streams (Feeding into Center) */}
//               <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-12 opacity-80">
//                 <div className="flex flex-col gap-8 w-1/4">
//                   <div className="h-px w-full bg-gradient-to-r from-transparent to-[var(--accent-blue)] relative">
//                     <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2s_infinite]"></div>
//                     <span className="absolute -top-5 right-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Endpoints</span>
//                   </div>
//                   <div className="h-px w-full bg-gradient-to-r from-transparent to-[var(--primary)] relative">
//                     <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2.5s_infinite_0.5s]"></div>
//                     <span className="absolute -top-5 right-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Cloud</span>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-8 w-1/4">
//                   <div className="h-px w-full bg-gradient-to-l from-transparent to-[var(--accent-blue)] relative">
//                     <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootLeft_2.2s_infinite_0.2s]"></div>
//                     <span className="absolute -top-5 left-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">AI Models</span>
//                   </div>
//                   <div className="h-px w-full bg-gradient-to-l from-transparent to-[var(--primary)] relative">
//                     <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootLeft_1.8s_infinite_0.8s]"></div>
//                     <span className="absolute -top-5 left-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Physical</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Central ASIC Core Node */}
//               <div className="relative z-10 flex flex-col items-center">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] p-[1px] shadow-[0_0_40px_rgba(138,43,226,0.4)] group-hover:shadow-[0_0_60px_rgba(138,43,226,0.6)] transition-all duration-500">
//                   <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
//                     {/* Pulsing Core Energy */}
//                     <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/30 to-[var(--accent-blue)]/30 animate-[pulse_2s_infinite]"></div>
//                     {/* Neural Network SVG Icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
//                       <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 px-3 py-1 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md">
//                   <span className="font-mono text-[10px] uppercase font-bold text-[var(--foreground)]">
//                     ASIC Engine <span className="text-[var(--primary)] ml-1">Online</span>
//                   </span>
//                 </div>
//               </div>

//             </div>
            
//             <p className="text-sm text-[var(--foreground-muted)] text-center mt-6">
//               Every component feeds into the <strong className="text-[var(--foreground)]">AICYRO Security Intelligence Core (ASIC)</strong>, creating a unified AI brain that understands your security posture across every dimension.
//             </p>

//           </div>

//         </div>
//       </div>

//       {/* Global Data Stream Animations */}
//       <style>{`
//         @keyframes shootRight {
//           0% { right: 100%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
//           20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
//           80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
//           100% { right: 0%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
//         }
//         @keyframes shootLeft {
//           0% { left: 100%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
//           20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
//           80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
//           100% { left: 0%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
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

import React from 'react';

export default function AboutAicyro() {
  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans ">
      
      {/* ========================================== */}
      {/* AMBIENT BACKGROUND                         */}
      {/* ========================================== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-ping"></span>
            About AICYRO
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
            An <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">AI-First</span> <br className="hidden md:block"/>
            Security Company
          </h2>
        </div>

        {/* ========================================== */}
        {/* DUAL-CORE NARRATIVE GRID                   */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ========================================== */}
          {/* LEFT CARD: OUR MISSION                     */}
          {/* ========================================== */}
          <div className="relative bg-[var(--card-bg)]/40 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary)]/40 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(138,43,226,0.05)] overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)]/10 to-transparent blur-3xl rounded-full group-hover:from-[var(--primary)]/20 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              </div>

              <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">Our Mission</h3>
              
              <div className="space-y-6 text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed">
                <p>
                  AICYRO was founded with a singular mission: to build the world&apos;s most intelligent autonomous security platform. We believe that the future of cybersecurity is not more alerts, more dashboards, or more analysts it&apos;s <strong className="text-[var(--foreground)] font-semibold">autonomous AI systems that detect, analyze, and respond to threats faster than any human can.</strong>
                </p>
                <p>
                  Our team of security researchers, AI engineers, and enterprise architects is building next-generation security infrastructure that protects organizations across every attack surface from endpoints to AI models, from cloud workloads to physical facilities.
                </p>
              </div>

              {/* Decorative Tech Detail */}
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-[var(--background)]/50 border border-[var(--border-color)] border-l-4 border-l-[var(--primary)]">
                  <div className="flex -space-x-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">AI</div>
                    <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">SEC</div>
                    <div className="w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--foreground)]">ENG</div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Elite Research & Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* RIGHT CARD: OUR APPROACH & ASIC VISUAL       */}
          {/* ========================================== */}
          <div className="relative bg-[var(--card-bg)]/40 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--accent-blue)]/40 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,191,255,0.05)] overflow-hidden group flex flex-col">
            
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--accent-blue)]/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>

              <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">Our Approach</h3>
              
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed mb-10">
                We don&apos;t bolt AI onto legacy security tools. AICYRO Shield was built from the ground up as an AI-native platform, with machine learning at the core of every detection, analysis, and response function.
              </p>
            </div>

            {/* ASIC: AICYRO Security Intelligence Core Visualization */}
            <div className="mt-auto relative w-full aspect-video md:aspect-[21/9] lg:aspect-video rounded-2xl bg-[#050505] border border-[var(--border-color)]/80 shadow-inner flex items-center justify-center overflow-hidden">
              
              {/* Background Radar Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>

              {/* Data Streams (Feeding into Center) */}
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-12 opacity-80">
                <div className="flex flex-col gap-8 w-1/4">
                  <div className="h-px w-full bg-gradient-to-r from-transparent to-[var(--accent-blue)] relative">
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2s_infinite]"></div>
                    <span className="absolute -top-5 right-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Endpoints</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent to-[var(--primary)] relative">
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootRight_2.5s_infinite_0.5s]"></div>
                    <span className="absolute -top-5 right-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Cloud</span>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-1/4">
                  <div className="h-px w-full bg-gradient-to-l from-transparent to-[var(--accent-blue)] relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootLeft_2.2s_infinite_0.2s]"></div>
                    <span className="absolute -top-5 left-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">AI Models</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-l from-transparent to-[var(--primary)] relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-1 rounded-full bg-white shadow-[0_0_10px_white] animate-[shootLeft_1.8s_infinite_0.8s]"></div>
                    <span className="absolute -top-5 left-0 text-[8px] font-mono text-[var(--foreground-muted)] uppercase">Physical</span>
                  </div>
                </div>
              </div>

              {/* Central ASIC Core Node */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] p-[1px] shadow-[0_0_40px_rgba(138,43,226,0.4)] group-hover:shadow-[0_0_60px_rgba(138,43,226,0.6)] transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
                    {/* Pulsing Core Energy */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/30 to-[var(--accent-blue)]/30 animate-[pulse_2s_infinite]"></div>
                    {/* Neural Network SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 px-3 py-1 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md">
                  <span className="font-mono text-[10px] uppercase font-bold text-[var(--foreground)]">
                    ASIC Engine <span className="text-[var(--primary)] ml-1">Online</span>
                  </span>
                </div>
              </div>

            </div>
            
            <p className="text-sm text-[var(--foreground-muted)] text-center mt-6">
              Every component feeds into the <strong className="text-[var(--foreground)]">AICYRO Security Intelligence Core (ASIC)</strong>, creating a unified AI brain that understands your security posture across every dimension.
            </p>

          </div>

        </div>
      </div>

      {/* Global Data Stream Animations */}
      <style>{`
        @keyframes shootRight {
          0% { right: 100%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
          20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
          80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
          100% { right: 0%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
        }
        @keyframes shootLeft {
          0% { left: 100%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
          20% { opacity: 1; transform: scaleX(1) translateY(-50%); }
          80% { opacity: 1; transform: scaleX(1) translateY(-50%); }
          100% { left: 0%; opacity: 0; transform: scaleX(0.5) translateY(-50%); }
        }
      `}</style>
      
    </section>
  );
}