// import React from 'react';

// export default function ProductRoadmap() {
//   const roadmapData = [
//     {
//       id: "01",
//       tag: "Phase 1",
//       title: "Autonomous AI Blue Team",
//       description: "Endpoint monitoring, behavioral AI, risk scoring, automated response, SOC dashboard.",
//       status: "deployed", // Deployed / Live
//     },
//     {
//       id: "02",
//       tag: "Phase 2",
//       title: "Autonomous AI Red Team",
//       description: "Continuous breach simulation, phishing/ransomware testing, self-learning attack models.",
//       status: "deployed",
//     },
//     {
//       id: "03",
//       tag: "Phase 3",
//       title: "Physical-Cyber Fusion",
//       description: "Computer vision security, CCTV monitoring, insider threat fusion scoring.",
//       status: "progress", // In Development / Beta
//     },
//     {
//       id: "04",
//       tag: "Phase 4",
//       title: "AI & Software Security",
//       description: "AI code scanning, prompt injection detection, model poisoning defense, DevSecOps.",
//       status: "progress",
//     },
//     {
//       id: "05",
//       tag: "Ecosystem",
//       title: "Global Threat Intelligence",
//       description: "Cross-customer anonymized threat intelligence sharing and predictive analytics.",
//       status: "planned", // Future
//     },
//     {
//       id: "06",
//       tag: "AI Assist",
//       title: "Autonomous SOC Copilot",
//       description: "AI-powered SOC analyst assistant with natural language investigation and reporting.",
//       status: "planned",
//     }
//   ];

//   return (
//     <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
//       {/* Deep Background Ambience */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none z-0"></div>
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
      
//       {/* Subtle Hexagon/Tech Grid Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_10%,transparent_100%)] opacity-20 z-0"></div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* SECTION HEADER                             */}
//         {/* ========================================== */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
//             <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
//             Evolution Protocol
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
//             Building the <br className="md:hidden" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//               Future of Security
//             </span>
//           </h2>
//           <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
//             Trace the AICYRO neural pathway. See what we've shipped, our active development nodes, and the blueprints for our next-generation architecture.
//           </p>
//         </div>

//         {/* ========================================== */}
//         {/* NEURAL TECH TREE TIMELINE                  */}
//         {/* ========================================== */}
//         <div className="relative pl-8 md:pl-20 py-8">
          
//           {/* The Main Glowing Circuit Line */}
//           <div className="absolute left-[19px] md:left-[41px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-transparent opacity-50 z-0"></div>
          
//           {/* Animated Data Packet flowing down the line */}
//           <div className="absolute left-[19px] md:left-[41px] top-0 w-[2px] h-32 bg-white shadow-[0_0_15px_white] animate-[pulseDown_4s_ease-in-out_infinite] z-0"></div>

//           <style>{`
//             @keyframes pulseDown {
//               0% { top: 0; opacity: 1; height: 0px; }
//               50% { height: 100px; opacity: 1; }
//               100% { top: 100%; opacity: 0; height: 10px; }
//             }
//           `}</style>

//           <div className="flex flex-col gap-10 md:gap-14 relative z-10">
//             {roadmapData.map((node, index) => {
              
//               // Define dynamic styles based on development status
//               const isDeployed = node.status === 'deployed';
//               const isProgress = node.status === 'progress';
//               const isPlanned = node.status === 'planned';

//               return (
//                 <div key={index} className="relative group">
                  
//                   {/* The Timeline Node / Junction */}
//                   <div className="absolute -left-[35px] md:-left-[64px] top-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--background)] flex items-center justify-center z-20 transition-transform duration-500 group-hover:scale-110">
                    
//                     {isDeployed && (
//                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)] flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.4)]">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]">
//                           <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                     )}
                    
//                     {isProgress && (
//                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)] flex items-center justify-center shadow-[0_0_15px_rgba(0,191,255,0.4)]">
//                         <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-[var(--accent-blue)] border-t-transparent rounded-full animate-spin"></div>
//                       </div>
//                     )}

//                     {isPlanned && (
//                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] border-dashed flex items-center justify-center">
//                         <div className="w-2 h-2 md:w-3 md:h-3 bg-[var(--foreground-muted)]/50 rounded-full"></div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Horizontal Connection Branch (Desktop only) */}
//                   <div className={`hidden md:block absolute -left-[40px] top-9 w-6 h-[2px] z-10 ${
//                     isDeployed ? 'bg-[var(--primary)]' : isProgress ? 'bg-[var(--accent-blue)]' : 'bg-[var(--border-color)] border-dashed'
//                   }`}></div>

//                   {/* The Tech Card */}
//                   <div className={`ml-4 md:ml-0 bg-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center transition-all duration-500 overflow-hidden ${
//                     isDeployed
//                       ? 'border border-[var(--primary)]/40 shadow-[0_0_30px_rgba(138,43,226,0.05)] hover:border-[var(--primary)]'
//                       : isProgress
//                         ? 'border border-[var(--accent-blue)]/40 shadow-[0_0_30px_rgba(0,191,255,0.05)] hover:border-[var(--accent-blue)]'
//                         : 'border border-[var(--border-color)] border-dashed hover:border-[var(--foreground-muted)]/50 opacity-80 hover:opacity-100'
//                   }`}>
                    
//                     {/* Animated Background Mesh for Active items */}
//                     {(isDeployed || isProgress) && (
//                       <div className={`absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none ${isDeployed ? 'from-[var(--primary)] to-transparent' : 'from-[var(--accent-blue)] to-transparent'}`}></div>
//                     )}

//                     {/* Meta / Tag Section */}
//                     <div className="shrink-0 w-full md:w-32 flex flex-col items-start gap-2 relative z-10">
//                       <span className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
//                         isDeployed ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20'
//                         : isProgress ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-[var(--accent-blue)]/20 animate-pulse'
//                         : 'bg-[var(--background)] text-[var(--foreground-muted)] border-[var(--border-color)]'
//                       }`}>
//                         {isDeployed ? 'Shipped' : isProgress ? 'Compiling' : 'Blueprint'}
//                       </span>
//                       <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-[10px] ml-1">
//                         {node.tag}
//                       </span>
//                     </div>

//                     {/* Content Section */}
//                     <div className="flex-1 relative z-10">
//                       <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${
//                         isDeployed ? 'text-[var(--foreground)]' : isProgress ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'
//                       }`}>
//                         {node.title}
//                       </h3>
//                       <p className="text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed">
//                         {node.description}
//                       </p>
//                     </div>

//                     {/* Version / ID indicator */}
//                     <div className="hidden lg:flex shrink-0 w-16 h-16 rounded-full border border-[var(--border-color)] items-center justify-center bg-[var(--background)]/50 relative z-10">
//                       <span className="font-mono text-[var(--foreground-muted)] opacity-50 text-xl font-bold">
//                         {node.id}
//                       </span>
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}
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

import React from 'react';

export default function ProductRoadmap() {
  const roadmapData = [
    {
      id: "01",
      tag: "Phase 1",
      title: "Autonomous AI Blue Team",
      description: "Endpoint monitoring, behavioral AI, risk scoring, automated response, SOC dashboard.",
      status: "deployed", // Deployed / Live
    },
    {
      id: "02",
      tag: "Phase 2",
      title: "Autonomous AI Red Team",
      description: "Continuous breach simulation, phishing/ransomware testing, self-learning attack models.",
      status: "deployed",
    },
    {
      id: "03",
      tag: "Phase 3",
      title: "Physical-Cyber Fusion",
      description: "Computer vision security, CCTV monitoring, insider threat fusion scoring.",
      status: "progress", // In Development / Beta
    },
    {
      id: "04",
      tag: "Phase 4",
      title: "AI & Software Security",
      description: "AI code scanning, prompt injection detection, model poisoning defense, DevSecOps.",
      status: "progress",
    },
    {
      id: "05",
      tag: "Ecosystem",
      title: "Global Threat Intelligence",
      description: "Cross-customer anonymized threat intelligence sharing and predictive analytics.",
      status: "planned", // Future
    },
    {
      id: "06",
      tag: "AI Assist",
      title: "Autonomous SOC Copilot",
      description: "AI-powered SOC analyst assistant with natural language investigation and reporting.",
      status: "planned",
    }
  ];

  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
      {/* Deep Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Subtle Hexagon/Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_10%,transparent_100%)] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            Evolution Protocol
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
            Building the <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Future of Security
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            Trace the AICYRO neural pathway. See what we&apos;ve shipped, our active development nodes, and the blueprints for our next-generation architecture.
          </p>
        </div>

        {/* ========================================== */}
        {/* NEURAL TECH TREE TIMELINE                  */}
        {/* ========================================== */}
        <div className="relative pl-8 md:pl-20 py-8">
          
          {/* The Main Glowing Circuit Line */}
          <div className="absolute left-[19px] md:left-[41px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-transparent opacity-50 z-0"></div>
          
          {/* Animated Data Packet flowing down the line */}
          <div className="absolute left-[19px] md:left-[41px] top-0 w-[2px] h-32 bg-white shadow-[0_0_15px_white] animate-[pulseDown_4s_ease-in-out_infinite] z-0"></div>

          <style>{`
            @keyframes pulseDown {
              0% { top: 0; opacity: 1; height: 0px; }
              50% { height: 100px; opacity: 1; }
              100% { top: 100%; opacity: 0; height: 10px; }
            }
          `}</style>

          <div className="flex flex-col gap-10 md:gap-14 relative z-10">
            {roadmapData.map((node, index) => {
              
              // Define dynamic styles based on development status
              const isDeployed = node.status === 'deployed';
              const isProgress = node.status === 'progress';
              const isPlanned = node.status === 'planned';

              return (
                <div key={index} className="relative group">
                  
                  {/* The Timeline Node / Junction */}
                  <div className="absolute -left-[35px] md:-left-[64px] top-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--background)] flex items-center justify-center z-20 transition-transform duration-500 group-hover:scale-110">
                    
                    {isDeployed && (
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)] flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.4)]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {isProgress && (
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)] flex items-center justify-center shadow-[0_0_15px_rgba(0,191,255,0.4)]">
                        <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-[var(--accent-blue)] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {isPlanned && (
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] border-dashed flex items-center justify-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[var(--foreground-muted)]/50 rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Horizontal Connection Branch (Desktop only) */}
                  <div className={`hidden md:block absolute -left-[40px] top-9 w-6 h-[2px] z-10 ${
                    isDeployed ? 'bg-[var(--primary)]' : isProgress ? 'bg-[var(--accent-blue)]' : 'bg-[var(--border-color)] border-dashed'
                  }`}></div>

                  {/* The Tech Card */}
                  <div className={`ml-4 md:ml-0 bg-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center transition-all duration-500 overflow-hidden ${
                    isDeployed 
                      ? 'border border-[var(--primary)]/40 shadow-[0_0_30px_rgba(138,43,226,0.05)] hover:border-[var(--primary)]' 
                      : isProgress 
                        ? 'border border-[var(--accent-blue)]/40 shadow-[0_0_30px_rgba(0,191,255,0.05)] hover:border-[var(--accent-blue)]'
                        : 'border border-[var(--border-color)] border-dashed hover:border-[var(--foreground-muted)]/50 opacity-80 hover:opacity-100'
                  }`}>
                    
                    {/* Animated Background Mesh for Active items */}
                    {(isDeployed || isProgress) && (
                      <div className={`absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none ${isDeployed ? 'from-[var(--primary)] to-transparent' : 'from-[var(--accent-blue)] to-transparent'}`}></div>
                    )}

                    {/* Meta / Tag Section */}
                    <div className="shrink-0 w-full md:w-32 flex flex-col items-start gap-2 relative z-10">
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
                        isDeployed ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' 
                        : isProgress ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-[var(--accent-blue)]/20 animate-pulse'
                        : 'bg-[var(--background)] text-[var(--foreground-muted)] border-[var(--border-color)]'
                      }`}>
                        {isDeployed ? 'Shipped' : isProgress ? 'Compiling' : 'Blueprint'}
                      </span>
                      <span className="text-[var(--foreground-muted)] font-bold uppercase tracking-wider text-[10px] ml-1">
                        {node.tag}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 relative z-10">
                      <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${
                        isDeployed ? 'text-[var(--foreground)]' : isProgress ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'
                      }`}>
                        {node.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed">
                        {node.description}
                      </p>
                    </div>

                    {/* Version / ID indicator */}
                    <div className="hidden lg:flex shrink-0 w-16 h-16 rounded-full border border-[var(--border-color)] items-center justify-center bg-[var(--background)]/50 relative z-10">
                      <span className="font-mono text-[var(--foreground-muted)] opacity-50 text-xl font-bold">
                        {node.id}
                      </span>
                    </div>

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