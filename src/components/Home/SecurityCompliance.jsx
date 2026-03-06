import React from 'react';

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      title: "Zero Trust Architecture",
      description: "Every access request is verified, validated, and authenticated — regardless of origin or network position.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Encryption at Rest & Transit",
      description: "AES-256 encryption for stored data and TLS 1.3 for all data in transit across every communication channel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permission management with least-privilege principles enforced across all platform functions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Multi-Factor Authentication",
      description: "MFA required for all administrative access with support for hardware tokens, TOTP, and biometric verification.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      title: "Comprehensive Audit Logging",
      description: "Immutable audit trails for every action, access event, and configuration change across the platform.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: "SOC-Ready Design",
      description: "Built from the ground up to integrate seamlessly with existing Security Operations Centers and SIEM platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      title: "GDPR Readiness",
      description: "Data residency controls, right to deletion, consent management, and privacy-by-design architecture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      title: "Enterprise Compliance",
      description: "Designed with SOC 2, ISO 27001, NIST, and FedRAMP compliance frameworks as foundational requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-32 bg-[var(--background)] overflow-hidden font-sans border-t border-[var(--border-color)]">
      
      {/* Deep Background Vault Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-10 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECURE ENCLAVE HEADER                      */}
        {/* ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Live Security Status Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-[var(--card-bg)]/50 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,197,94,0.15)] backdrop-blur-md">
            {/* <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span> */}
            Security & Compliance Active
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6 leading-tight">
            Enterprise-Grade <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Security Posture
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            AICYRO is engineered with military-grade encryption, zero-trust architecture, and built-in compliance frameworks to protect your most sensitive data seamlessly.
          </p>
        </div>

        {/* ========================================== */}
        {/* THE COMPLIANCE VAULT GRID                  */}
        {/* ========================================== */}
        <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-[var(--primary)]/30 via-[var(--border-color)]/20 to-transparent shadow-2xl">
          
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>

          <div className="bg-[var(--background)]/90 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-3xl p-6 md:p-8 hover:-translate-y-1 hover:border-[var(--primary)]/40 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Subtle Hover Glow Inside Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Top Edge Highlight on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] mb-6 shadow-sm transition-all duration-300 group-hover:bg-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 group-hover:text-[var(--primary)] group-hover:scale-110">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Frameworks Footer Bar */}
            <div className="mt-10 pt-8 border-t border-[var(--border-color)]/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-[var(--foreground-muted)] font-mono text-sm uppercase tracking-widest text-center md:text-left">
                Continuous Compliance Monitoring
              </span>
              
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
                {['SOC 2 Type II', 'ISO 27001', 'NIST CSF', 'FedRAMP', 'HIPAA'].map((cert, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground-muted)] font-bold text-xs tracking-wider shadow-inner flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[var(--primary)]">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}