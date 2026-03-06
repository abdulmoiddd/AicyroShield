
// import React, { useState } from 'react';

// export default function SolutionPhase() {
//   const [activePhase, setActivePhase] = useState(0);

//   const phases = [
//     {
//       step: "01",
//       title: "Autonomous Blue Team",
//       subtitle: "Defense Engine",
//       description: "A fully autonomous defensive engine deploying intelligent agents across all OS. Features real-time telemetry, AI anomaly detection, and automated threat response in milliseconds.",
//       impact: "Reduces SOC workload by 70%.",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//         </svg>
//       ),
//       // Simulated UI for the visual side
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center p-8">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-10 animate-pulse"></div>
//           {/* Radar Circles */}
//           <div className="absolute w-48 h-48 border border-[var(--primary)]/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
//           <div className="absolute w-32 h-32 border border-[var(--primary)]/40 rounded-full"></div>
//           <div className="absolute w-16 h-16 border border-[var(--primary)]/60 rounded-full bg-[var(--primary)]/10 flex items-center justify-center backdrop-blur-sm">
//             <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-ping"></div>
//           </div>
//           {/* Floating threat nodes */}
//           <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_yellow]"></div>
//         </div>
//       )
//     },
//     {
//       step: "02",
//       title: "Autonomous Red Team",
//       subtitle: "Continuous Breach Simulation",
//       description: "Replaces annual pentesting with continuous, AI-powered attack simulation. Probes infrastructure, simulates phishing, and tests privilege escalation autonomously.",
//       impact: "Finds vulnerabilities before adversaries do.",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
//         </svg>
//       ),
//       visual: (
//         <div className="w-full h-full p-6 bg-[#0a0a0a]/80 rounded-2xl border border-[var(--border-color)] font-mono text-[10px] md:text-xs text-[var(--foreground-muted)] overflow-hidden relative shadow-inner">
//           <div className="flex gap-2 mb-4">
//             <div className="w-2 h-2 rounded-full bg-red-500"></div>
//             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
//             <div className="w-2 h-2 rounded-full bg-green-500"></div>
//           </div>
//           <p className="text-[var(--primary)] mb-2">AICYRO_RED_TEAM_SIM v4.2.1</p>
//           <p className="opacity-0 animate-[fadeIn_0.5s_0.5s_forwards]">Target: 10.0.0.45 (Production K8s)</p>
//           <p className="opacity-0 animate-[fadeIn_0.5s_1.5s_forwards]"> Executing payload: Privilege_Escalation_0x89</p>
//           <p className="text-yellow-400 opacity-0 animate-[fadeIn_0.5s_2.5s_forwards]">[!] Warning: Port 443 exposed.</p>
//           <p className="text-green-400 opacity-0 animate-[fadeIn_0.5s_3.5s_forwards]"> Analysis complete. Updating defense models.</p>
//           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
//         </div>
//       )
//     },
//     {
//       step: "03",
//       title: "Physical + Cyber Fusion",
//       subtitle: "Computer Vision Security",
//       description: "Unifies physical CCTV monitoring with digital security intelligence. Correlates physical badge access with digital logins to eliminate insider threats.",
//       impact: "Eliminates blind spots in insider threat detection.",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
//         </svg>
//       ),
//       visual: (
//         <div className="w-full h-full relative flex items-center justify-center p-6 border-2 border-dashed border-[var(--border-color)] rounded-2xl overflow-hidden bg-[var(--background)]/50">
//           {/* Facial Recognition Brackets */}
//           <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[var(--primary)]"></div>
//           <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[var(--primary)]"></div>
//           <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[var(--primary)]"></div>
//           <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]"></div>
          
//           {/* Scanning Line */}
//           <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-blue)] shadow-[0_0_15px_var(--accent-blue)] animate-[scan_3s_linear_infinite]"></div>
          
//           <div className="text-[10px] text-[var(--foreground-muted)] font-mono absolute bottom-4 left-4">
//             <span className="text-[var(--primary)] font-bold">MATCH:</span> EMP_ID_9921 <br />
//             STATUS: AUTHORIZED
//           </div>
//         </div>
//       )
//     },
//     {
//       step: "04",
//       title: "AI System Protection",
//       subtitle: "Securing the AI-Driven Future",
//       description: "Comprehensive protection for AI systems and pipelines. Features code scanning, prompt injection defense, and API abuse detection for the AI-driven era.",
//       impact: "Protects models, data, and APIs from emerging threats.",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
//         </svg>
//       ),
//       visual: (
//         <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
//           {/* Data Grid overlay */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
          
//           <div className="relative z-10 w-40 h-40 bg-[var(--card-bg)] border border-[var(--primary)]/50 rounded-xl shadow-[0_0_30px_rgba(138,43,226,0.2)] flex items-center justify-center flex-col gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[var(--accent-blue)]">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
//             </svg>
//             <span className="text-xs font-mono text-[var(--primary)] font-bold">LLM Secured</span>
//           </div>
//         </div>
//       )
//     }
//   ];

//   return (
//     <section className="relative py-24 bg-[var(--background)] font-sans overflow-hidden border-t border-[var(--border-color)]">
      
//       {/* Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

//       {/* Global styles for the simulated UI animations */}
//       <style>{`
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes scan { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }
//       `}</style>

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* SECTION HEADER                             */}
//         {/* ========================================== */}
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm">
//              Platform Architecture
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
//             Four Pillars of <br className="md:hidden"/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//                Autonomous Security
//             </span>
//           </h2>
//         </div>

//         {/* ========================================== */}
//         {/* INTERACTIVE NAVIGATION TABS                */}
//         {/* ========================================== */}
//         <div className="flex flex-nowrap md:justify-center overflow-x-auto gap-3 pb-6 mb-8 scrollbar-hide snap-x">
//           {phases.map((phase, index) => {
//             const isActive = activePhase === index;
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActivePhase(index)}
//                 className={`snap-center shrink-0 flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 ${
//                   isActive
//                     ? 'bg-[var(--primary)]/10 border-[var(--primary)]/50 shadow-[0_0_20px_rgba(138,43,226,0.15)]'
//                     : 'bg-[var(--card-bg)]/40 border-[var(--border-color)] hover:bg-[var(--card-bg)]/80 hover:border-[var(--primary)]/30'
//                 }`}
//               >
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[var(--primary)] text-white' : 'bg-[var(--background)] text-[var(--foreground-muted)]'}`}>
//                   {phase.icon}
//                 </div>
//                 <span className={`font-semibold text-sm whitespace-nowrap transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]'}`}>
//                   {phase.title}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* ========================================== */}
//         {/* DYNAMIC SHOWCASE WINDOW                    */}
//         {/* ========================================== */}
//         <div className="relative w-full min-h-[450px] md:h-[400px] bg-[var(--card-bg)]/40 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-2xl">
          
//           {phases.map((phase, index) => {
//             const isActive = activePhase === index;
            
//             return (
//               <div
//                 key={index}
//                 className={`absolute inset-0 w-full h-full flex flex-col md:flex-row transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
//                   isActive ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'
//                 }`}
//               >
                
//                 {/* Left Side: Text Content */}
//                 <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--border-color)]/50">
//                   <span className="text-[var(--border-color)] font-black text-6xl md:text-8xl absolute top-6 left-6 opacity-30 select-none pointer-events-none">
//                     {phase.step}
//                   </span>
                  
//                   <div className="relative z-10 mt-8 md:mt-0">
//                     <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-2 tracking-tight">
//                       {phase.title}
//                     </h3>
//                     <h4 className="text-sm md:text-base text-[var(--accent-blue)] font-semibold mb-6">
//                       {phase.subtitle}
//                     </h4>
                    
//                     <p className="text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed mb-8">
//                       {phase.description}
//                     </p>

//                     <div className="p-4 rounded-xl bg-[var(--primary)]/5 border-l-4 border-l-[var(--primary)] w-max max-w-full">
//                       <span className="text-[var(--primary)] font-bold uppercase text-[10px] tracking-wider block mb-1">Impact</span>
//                       <p className="text-[var(--foreground)] font-medium text-sm">
//                         {phase.impact}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side: Simulated Tech Visuals */}
//                 <div className="w-full md:w-1/2 h-64 md:h-full bg-[#05000A]/50 relative flex items-center justify-center p-8">
//                   {/* Render the visual only if active to restart CSS animations beautifully */}
//                   {isActive && phase.visual}
//                 </div>

//               </div>
//             );
//           })}

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


import React, { useState } from 'react';

export default function SolutionPhase() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      step: "01",
      Phase: "Phase 1",
      title: "Autonomous Blue Team",
      subtitle: "Defense Engine",
      description: "The foundation of AICYRO Shield — a fully autonomous defensive engine that deploys intelligent endpoint agents across Windows, Linux, and macOS environments. These agents perform real-time telemetry collection, continuously monitoring processes, file access patterns, network activity, login anomalies, and privilege escalation attempts. All data is transmitted via TLS-encrypted channels into a high-throughput event streaming pipeline, where AI behavioral anomaly detection models — including Isolation Forest and graph-based user risk modeling — analyze every event in context. The Risk Scoring Engine assigns dynamic scores on a 0–100 scale, enabling automated response actions: locking compromised accounts, killing malicious processes, isolating infected devices, and revoking credentials — all without human intervention. Built on a multi-tenant SaaS architecture with cloud-native Kubernetes deployment, it delivers enterprise-grade logging, monitoring, and scalability.",
      impact: "Reduces SOC workload by 70%, enabling security teams to focus on strategic threats rather than alert fatigue.",
      capabilities: [
        { title: "Endpoint Monitoring Agents", desc: "Deploy across Windows, Linux, macOS with real-time telemetry collection." },
        { title: "AI Behavioral Analysis", desc: "Isolation Forest models and graph-based user risk modeling detect anomalies." },
        { title: "Risk Scoring Engine", desc: "Dynamic 0–100 risk scores enable prioritized, automated response to threats." },
        { title: "Automated Response", desc: "Lock accounts, kill processes, isolate devices — autonomously, in milliseconds." }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-10 animate-pulse"></div>
          {/* Radar Circles */}
          <div className="absolute w-64 h-64 border border-[var(--primary)]/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute w-48 h-48 border border-[var(--primary)]/40 rounded-full"></div>
          <div className="absolute w-24 h-24 border border-[var(--primary)]/60 rounded-full bg-[var(--primary)]/10 flex items-center justify-center backdrop-blur-sm z-10">
            <div className="w-3 h-3 bg-[var(--primary)] rounded-full animate-ping"></div>
          </div>
          {/* Floating threat nodes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_red] z-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_yellow] z-20"></div>
          
          {/* Simulated scanning beam */}
          <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-[var(--primary)] to-transparent origin-left animate-[spin_2s_linear_infinite] z-10"></div>
        </div>
      )
    },
    {
      step: "02",
      Phase: "Phase 2",
      title: "Autonomous Red Team",
      subtitle: "Continuous Breach Simulation",
      description: "AICYRO's Red Team AI eliminates the outdated model of annual penetration testing by providing continuous, AI-powered attack simulation. The engine autonomously conducts penetration testing across your infrastructure, simulating phishing campaigns, ransomware behavior, privilege escalation paths, and cloud misconfiguration exploits. Using self-learning attack models that evolve based on your environment, it creates a continuous Red vs. Blue feedback loop — where every simulated attack strengthens your defensive posture. The system performs continuous security validation, ensuring that every patch, configuration change, and new deployment is tested against real-world attack vectors.",
      impact: "Replaces annual penetration testing with continuous security validation — finding vulnerabilities before adversaries do.",
      capabilities: [
        { title: "AI Attack Simulation", desc: "Autonomous penetration testing that continuously probes your infrastructure." },
        { title: "Phishing Simulation", desc: "Realistic campaigns test employee awareness and email security controls." },
        { title: "Ransomware Simulation", desc: "Safely simulate ransomware behavior to validate detection capabilities." },
        { title: "Privilege Escalation Testing", desc: "Automated discovery of privilege escalation paths across systems." }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      ),
      visual: (
        <div className="w-full h-full p-6 bg-[#050505]/90 rounded-2xl border border-[var(--border-color)] font-mono text-[10px] md:text-sm text-[var(--foreground-muted)] overflow-hidden relative shadow-inner">
          <div className="flex gap-2 mb-4 border-b border-white/10 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-[var(--primary)] mb-3">AICYRO_RED_TEAM_SIM v4.2.1</p>
          <p className="opacity-0 animate-[fadeIn_0.5s_0.5s_forwards] mb-1">› Target: 10.0.0.45 (Production K8s)</p>
          <p className="opacity-0 animate-[fadeIn_0.5s_1.5s_forwards] mb-1">› Executing payload: Privilege_Escalation_0x89</p>
          <p className="text-yellow-400 opacity-0 animate-[fadeIn_0.5s_2.5s_forwards] mb-1">› [!] Warning: Port 443 exposed. Vulnerability found.</p>
          <p className="opacity-0 animate-[fadeIn_0.5s_3.5s_forwards] mb-1">› Patching vulnerability automatically...</p>
          <p className="text-green-400 opacity-0 animate-[fadeIn_0.5s_4.5s_forwards]">› Analysis complete. Defense models updated.</p>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
        </div>
      )
    },
    {
      step: "03",
      Phase: "Phase 3",
      title: "Physical + Cyber Fusion",
      subtitle: "Computer Vision Security",
      description: "AICYRO Shield introduces a capability unique in the cybersecurity market: the fusion of physical and digital security intelligence. AI-powered CCTV monitoring uses computer vision to detect suspicious movement patterns, tailgating attempts, after-hours facility access, and unauthorized server room entry in real-time. The system cross-references physical events — such as badge access timestamps — with digital events like login activity, creating a unified threat correlation engine. When a badge swipe at a data center doesn't match the concurrent VPN login from a different geography, AICYRO flags a high-confidence insider threat. Purpose-built for smart cities, data centers, government facilities, and critical infrastructure.",
      impact: "The only platform that correlates physical security events with cyber activity — eliminating blind spots.",
      capabilities: [
        { title: "CCTV Monitoring", desc: "Computer vision analyzes video feeds for suspicious movement and tailgating." },
        { title: "Insider Threat Detection", desc: "Badge access vs. login mismatch detection identifies compromised insiders." },
        { title: "Facility Security", desc: "After-hours access detection and server room monitoring with alerts." },
        { title: "Identity Correlation", desc: "Physical identity verification correlated with digital events in real-time." }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      ),
      visual: (
        <div className="w-full h-full relative flex items-center justify-center p-6 border border-dashed border-[var(--primary)]/50 rounded-2xl overflow-hidden bg-[var(--background)]/80">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
          
          {/* Facial Recognition Brackets */}
          <div className="absolute top-12 left-12 w-10 h-10 border-t-2 border-l-2 border-[var(--primary)]"></div>
          <div className="absolute top-12 right-12 w-10 h-10 border-t-2 border-r-2 border-[var(--primary)]"></div>
          <div className="absolute bottom-12 left-12 w-10 h-10 border-b-2 border-l-2 border-[var(--primary)]"></div>
          <div className="absolute bottom-12 right-12 w-10 h-10 border-b-2 border-r-2 border-[var(--primary)]"></div>
          
          {/* Central target */}
          <div className="w-16 h-16 border border-[var(--accent-blue)]/50 rounded-full flex items-center justify-center relative z-10">
            <div className="w-1 h-1 bg-[var(--accent-blue)] rounded-full"></div>
            <div className="absolute -inset-4 border border-[var(--accent-blue)]/20 rounded-full animate-[spin_4s_linear_infinite_reverse] border-t-transparent"></div>
          </div>

          {/* Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-[var(--accent-blue)] shadow-[0_0_15px_var(--accent-blue)] animate-[scan_3s_linear_infinite] z-20"></div>
          
          <div className="text-[10px] md:text-xs text-[var(--foreground-muted)] font-mono absolute bottom-4 left-4 bg-[var(--background)]/80 p-2 rounded backdrop-blur-sm border border-[var(--border-color)]">
            <span className="text-[var(--primary)] font-bold">MATCH:</span> EMP_ID_9921 <br />
            STATUS: <span className="text-green-500">AUTHORIZED</span>
          </div>
        </div>
      )
    },
    {
      step: "04",
      Phase: "Phase 4",
      title: "AI System Protection",
      subtitle: "Securing the AI-Driven Future",
      description: "As organizations deploy AI at scale, they introduce entirely new attack surfaces. AICYRO Phase 4 provides comprehensive protection for AI systems and software pipelines. AI Code Security Scanning analyzes code repositories for vulnerabilities before deployment. Prompt Injection Detection safeguards large language models and AI interfaces from manipulation. API Abuse Detection monitors for abnormal patterns indicating credential stuffing, data exfiltration, or unauthorized automation. The platform detects AI Model Poisoning — where adversaries corrupt training data — and identifies Adversarial Attacks designed to fool AI decision systems.",
      impact: "Critical for organizations deploying AI — protecting models, data, APIs, and infrastructure from emerging AI-specific threats.",
      capabilities: [
        { title: "AI Code Security", desc: "Static and dynamic analysis of AI code repositories for vulnerabilities." },
        { title: "Prompt Injection Defense", desc: "Protect LLMs from prompt injection, jailbreaking, and manipulation." },
        { title: "API Abuse Detection", desc: "Monitor APIs for credential stuffing and unauthorized automation." },
        { title: "Model Poisoning Detection", desc: "Detect attempts to corrupt training data and compromise AI models." }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
        </svg>
      ),
      visual: (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#050505]/50 rounded-2xl border border-[var(--border-color)]">
          {/* Data Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>
          
          <div className="relative z-10 w-48 h-48 bg-[var(--card-bg)] border border-[var(--primary)]/50 rounded-2xl shadow-[0_0_40px_rgba(138,43,226,0.3)] flex items-center justify-center flex-col gap-3">
            {/* Spinning Shield around the AI brain */}
            <div className="absolute inset-2 border-2 border-dashed border-[var(--accent-blue)]/50 rounded-xl animate-[spin_10s_linear_infinite]"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[var(--primary)] animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-xs md:text-sm font-mono text-[var(--accent-blue)] font-bold tracking-widest">LLM SECURED</span>
          </div>

          {/* Floating Data packets */}
          <div className="absolute top-1/4 left-0 w-8 h-1 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-[shootRight_2s_infinite]"></div>
          <div className="absolute bottom-1/4 right-0 w-8 h-1 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-[shootLeft_2s_infinite]"></div>
        </div>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-[var(--background)] font-sans overflow-hidden border-t border-[var(--border-color)]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Global styles for the simulated UI animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scan { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }
        @keyframes shootRight { 0% { left: 0%; opacity: 0; } 50% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes shootLeft { 0% { right: 0%; opacity: 0; } 50% { opacity: 1; } 100% { right: 100%; opacity: 0; } }
        
        /* Custom Scrollbar for inner content if it overflows on very small screens */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: var(--primary); }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)] border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm">
             Solution Phases
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
            Four Pillars of <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
               Autonomous Security
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            Each phase builds upon the previous, creating an increasingly comprehensive and autonomous security posture.
          </p>
        </div>

        {/* ========================================== */}
        {/* INTERACTIVE NAVIGATION TABS                */}
        {/* ========================================== */}
        <div className="flex flex-nowrap md:justify-center overflow-x-auto gap-3 pb-6 mb-8 scrollbar-hide snap-x w-full">
          {phases.map((phase, index) => {
            const isActive = activePhase === index;
            return (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`snap-center shrink-0 flex items-center gap-3 px-6 py-3.5 rounded-full border transition-all duration-300 ${
                  isActive 
                    ? 'bg-[var(--primary)]/10 border-[var(--primary)]/50 shadow-[0_0_20px_rgba(138,43,226,0.15)]' 
                    : 'bg-[var(--card-bg)]/40 border-[var(--border-color)] hover:bg-[var(--card-bg)]/80 hover:border-[var(--primary)]/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[var(--primary)] text-white' : 'bg-[var(--background)] text-[var(--foreground-muted)]'}`}>
                  {phase.icon}
                </div>
                {/* <span className={`font-bold text-sm whitespace-nowrap transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]'}`}>
                  {phase.Phase}
                </span> */}
                <span className={`font-bold text-sm whitespace-nowrap transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]'}`}>
                  {phase.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* DYNAMIC SHOWCASE WINDOW                    */}
        {/* Fixed height so boxes stay exactly equal!  */}
        {/* ========================================== */}
        <div className="relative w-full h-[850px] md:h-[650px] lg:h-[600px] bg-[var(--card-bg)]/40 backdrop-blur-xl border border-[var(--border-color)] rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {phases.map((phase, index) => {
            const isActive = activePhase === index;
            
            return (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-12 pointer-events-none z-0'
                }`}
              >
                
                {/* Left Side: Text Content (Scrollable if needed on small screens) */}
                <div className="w-full lg:w-3/5 p-6 md:p-10 lg:p-12 flex flex-col h-full overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-[var(--border-color)]/50">
                  
                  {/* Faint Watermark Step */}
                  <span className="text-[var(--border-color)] font-black text-6xl lg:text-8xl absolute top-6 right-8 lg:left-6 lg:right-auto opacity-30 select-none pointer-events-none">
                    {phase.step}
                  </span>
                  
                  <div className="relative z-10 flex flex-col h-full mt-4 lg:mt-0">
                    <h4 className="text-base text-[var(--accent-blue)] font-bold mb-6 uppercase tracking-wider">
                      {phase.Phase}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-2 tracking-tight">
                      {phase.title}
                    </h3>
                    <h4 className="text-base text-[var(--accent-blue)] font-bold mb-6 uppercase tracking-wider">
                      {phase.subtitle}
                    </h4>
                    
                    <p className="text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed mb-8">
                      {phase.description}
                    </p>

                    {/* 2x2 Capabilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {phase.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[var(--background)]/50 p-4 rounded-xl border border-[var(--border-color)]">
                          <div className="mt-0.5 text-[var(--primary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="text-[var(--foreground)] font-bold text-sm mb-1">{cap.title}</h5>
                            <p className="text-[var(--foreground-muted)] text-xs leading-relaxed">{cap.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Impact Statement Box (Pushed to bottom) */}
                    <div className="mt-auto p-4 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-transparent border-l-4 border-l-[var(--primary)]">
                      <span className="text-[var(--primary)] font-bold uppercase text-[10px] tracking-widest block mb-1">Business Impact</span>
                      <p className="text-[var(--foreground)] font-semibold text-sm">
                        {phase.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Simulated Tech Visuals */}
                <div className="w-full lg:w-2/5 h-64 lg:h-full bg-[#05000A]/30 relative flex items-center justify-center p-4 lg:p-8">
                  {/* Render the visual only if active so CSS animations restart beautifully from zero */}
                  {isActive && phase.visual}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}