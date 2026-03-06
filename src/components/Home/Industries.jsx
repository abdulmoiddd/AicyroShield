import React from 'react';

export default function Industries() {
  const standardIndustries = [
    {
      title: "Banking & Financial Services",
      description: "Protect trading platforms, payment systems, and customer data with autonomous threat detection and regulatory compliance monitoring.",
      imageDark: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1501167739923-a5d10526019b?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop", // NEW LIGHT IMAGE
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
    {
      title: "Government & Defense",
      description: "Secure classified networks, critical infrastructure, and government systems with military-grade autonomous defense capabilities.",
      imageDark: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=800&auto=format&fit=crop", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Smart Cities",
      description: "Unified physical and digital security for smart city infrastructure, including IoT networks, surveillance systems, and public services.",
      imageDark: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=800&auto=format&fit=crop", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      )
    },
    {
      title: "Healthcare",
      description: "Safeguard patient data, medical devices, and healthcare networks while maintaining HIPAA compliance and operational continuity.",
      imageDark: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
        </svg>
      )
    },
    {
      title: "Data Centers",
      description: "Comprehensive protection for data center infrastructure — from physical access control to network segmentation and workload security.",
      imageDark: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      title: "Large Enterprises",
      description: "Scale autonomous security across global operations with multi-tenant architecture, centralized management, and distributed enforcement.",
      imageDark: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", 
      imageLight: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
      {/* Background Deep Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)] border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-sm">
            Industries
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
            Built for <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Mission-Critical Sectors
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            Deploy enterprise-grade autonomous security tailored to the unique regulatory, operational, and threat landscapes of your industry.
          </p>
        </div>

        {/* ========================================== */}
        {/* HOVER-FOCUS BENTO GRID                     */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group/bento">
          
          {/* 1. Crown Jewel Card: AI-Native Companies (Spans all columns) */}
          <div className="lg:col-span-3 relative bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--primary)]/40 rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 ease-out group-hover/bento:opacity-40 hover:!opacity-100 hover:!scale-[1.02] hover:shadow-[0_0_50px_rgba(138,43,226,0.15)] hover:border-[var(--primary)] hover:z-20 group/crown">
            
            {/* HOVER IMAGE BACKGROUND (Fully visible on hover) */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover/crown:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2rem]">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" className="theme-img-dark w-full h-full object-cover transform scale-110 group-hover/crown:scale-100 transition-transform duration-700" alt="AI Core Dark" />
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" className="theme-img-light w-full h-full object-cover transform scale-110 group-hover/crown:scale-100 transition-transform duration-700" alt="AI Core Light" />
              {/* Stronger gradient overlay to keep the text on the left readable while showing image clearly on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--card-bg)] via-[var(--card-bg)]/90 to-transparent"></div>
            </div>

            {/* Default Animated Background Mesh (Fades out on hover) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03] group-hover/crown:opacity-0 transition-opacity pointer-events-none z-0"></div>

            <div className="shrink-0 relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent-blue)] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[var(--card-bg)] rounded-[22px] flex items-center justify-center text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M15.75 3v1.5m-7.5 15v1.5m7.5-1.5v1.5M12 9.75v-1.5m0 9v-1.5m0-6v6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase border border-[var(--primary)]/20 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-ping absolute"></span>
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] relative"></span>
                Specialized Protection
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight group-hover/crown:text-[var(--primary)] transition-colors duration-300">
                AI-Native Companies
              </h3>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed max-w-3xl group-hover/crown:text-[var(--foreground)] transition-colors duration-300">
                Purpose-built protection for organizations deploying AI at scale — securing large language models, training data pipelines, APIs, and inference infrastructure from adversarial attacks and poisoning.
              </p>
            </div>
          </div>

          {/* 2. Standard Industry Cards (2 rows of 3 columns) */}
          {standardIndustries.map((industry, index) => (
            <div 
              key={index}
              className="relative bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[2rem] p-8 overflow-hidden flex flex-col transition-all duration-500 ease-out group-hover/bento:opacity-40 hover:!opacity-100 hover:!scale-[1.03] hover:shadow-[0_0_40px_rgba(138,43,226,0.15)] hover:border-[var(--primary)]/60 hover:z-20 group/card"
            >
              
              {/* HOVER IMAGE BACKGROUND (Fully visible on hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2rem]">
                <img src={industry.imageDark} className="theme-img-dark w-full h-full object-cover transform scale-110 group-hover/card:scale-100 transition-transform duration-700" alt={`${industry.title} Dark Mode`} />
                <img src={industry.imageLight} className="theme-img-light w-full h-full object-cover transform scale-110 group-hover/card:scale-100 transition-transform duration-700" alt={`${industry.title} Light Mode`} />
                {/* Gradient overlay: Keeps the bottom completely dark/light so text is readable, fades out at the top */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-[var(--card-bg)]/90 to-[var(--card-bg)]/10"></div>
              </div>

              {/* Default Internal Card Glow (Fades out when image appears) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-transparent opacity-100 group-hover/card:opacity-0 transition-opacity duration-500 pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex-1 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] mb-6 shadow-sm transition-all duration-500 group-hover/card:bg-[var(--primary)] group-hover/card:text-white group-hover/card:border-[var(--primary)] group-hover/card:scale-110">
                  {industry.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 tracking-tight transition-colors duration-300 group-hover/card:text-[var(--primary)]">
                  {industry.title}
                </h3>
                
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-0 group-hover/card:text-[var(--foreground)] transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ========================================== */}
      {/* THEME CSS TOGGLE LOGIC FOR IMAGES          */}
      {/* ========================================== */}
      <style>{`
        /* When Light Mode is active via data-theme */
        html[data-theme='light'] .theme-img-dark { display: none !important; }
        html[data-theme='light'] .theme-img-light { display: block !important; }

        /* When Dark Mode is active (default) */
        html:not([data-theme='light']) .theme-img-dark { display: block !important; }
        html:not([data-theme='light']) .theme-img-light { display: none !important; }
      `}</style>

    </section>
  );
}
