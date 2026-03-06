import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does AICYRO Shield differ from traditional SIEM solutions?",
      answer: "Traditional SIEMs collect and correlate logs but require human analysts to investigate and respond. AICYRO Shield is an autonomous security operating system that uses AI to detect, analyze, and respond to threats automatically — reducing SOC workload by 70%. It also covers layers SIEMs cannot: physical security, AI system protection, and continuous red team simulation."
      },
    {
      question: "What is the deployment timeline for enterprise environments?",
      answer: "AICYRO Shield can be deployed in as few as 2–4 weeks for initial endpoint monitoring and threat detection. Full platform deployment — including red team simulation, physical-cyber fusion, and AI security — typically completes within 8–12 weeks depending on infrastructure complexity."
      },
    {
      question: "Does AICYRO Shield require replacing existing security tools?",
      answer: "No. AICYRO Shield is designed to integrate with and enhance your existing security stack — including SIEMs, EDR solutions, firewalls, and IAM systems. It adds autonomous AI capabilities on top of your current investments."
      },
    {
      question: "How does the AI Red Team work without disrupting operations?",
      answer: "AICYRO's Red Team AI operates in a controlled simulation mode that tests your defenses without impacting production systems. Simulated attacks are sandboxed and designed to validate security controls, not to cause damage. All simulations are logged and reported for security team review."
      },
      {
      question: "What compliance frameworks does AICYRO support?",
      answer: "AICYRO Shield is designed with SOC 2, ISO 27001, NIST CSF, GDPR, HIPAA, and FedRAMP compliance frameworks as foundational requirements. The platform includes built-in audit logging, data residency controls, and compliance reporting."
      },
    {
      question: "How does the physical-cyber fusion work?",
      answer: "AICYRO integrates with existing CCTV and physical access control systems. AI-powered computer vision analyzes video feeds for anomalies while correlating physical events (badge swipes, facility access) with digital events (VPN logins, system access). This creates a unified insider threat risk score that no purely digital solution can provide."
      },
    {
      question: "Is AICYRO Shield suitable for government and defense applications?",
      answer: "Yes. AICYRO Shield is purpose-built for high-security environments including government agencies, defense organizations, and critical infrastructure operators. The platform supports air-gapped deployments, classified network isolation, and meets stringent security requirements."
      },
    {
      question: "How does AICYRO protect AI systems and models?",
      answer: "Phase 4 provides comprehensive AI security: scanning AI code for vulnerabilities, detecting prompt injection attacks on LLMs, monitoring for model poisoning, identifying adversarial inputs, tracking data drift, and securing AI infrastructure. This is critical for organizations deploying AI in production."
      },   
  ];

  return (
    <section className="relative py-20 bg-[var(--background)] overflow-hidden font-sans ">
      
      {/* ========================================== */}
      {/* BACKGROUND EFFECTS                         */}
      {/* ========================================== */}
      {/* Deep Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* SECTION HEADER                             */}
        {/* ========================================== */}
        <div className="text-center mb-20 flex flex-col items-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-bg)]/80 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)] backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            System Intel
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
            Frequently Asked <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
              Questions
            </span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed max-w-2xl">
            Everything you need to know about deploying, operating, and scaling the Aicyro Shield autonomous security platform.
          </p>
        </div>

        {/* ========================================== */}
        {/* FLOATING CARDS LIST                        */}
        {/* ========================================== */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`group relative rounded-3xl transition-all duration-500 ease-out ${
                  isOpen 
                    ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)] -translate-y-1' 
                    : 'hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
                }`}
              >
                {/* Outer Glow Border (Only active when open) */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] transition-opacity duration-500 ${
                  isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                {/* Inner Card Content */}
                <div className={`relative m-[1px] rounded-[calc(1.5rem-1px)] backdrop-blur-xl transition-colors duration-500 ${
                  isOpen ? 'bg-[var(--card-bg)]' : 'bg-[var(--card-bg)]/60'
                }`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 md:gap-6 pr-6">
                      {/* Terminal Prompt Icon */}
                      <span className={`font-mono text-xl font-black transition-colors duration-500 ${
                        isOpen ? 'text-[var(--primary)] shadow-[0_0_10px_var(--primary)]' : 'text-[var(--foreground-muted)]'
                      }`}>
                        {'>'}
                      </span>
                      
                      <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/80 group-hover:text-[var(--foreground)]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    {/* Rotating Chevron */}
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-[var(--primary)]/10 text-[var(--primary)] rotate-180' : 'bg-transparent text-[var(--foreground-muted)] border border-[var(--border-color)] group-hover:border-[var(--primary)]/50'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Answer Area */}
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        {/* Inner accent line */}
                        <div className="pl-6 md:pl-8 border-l-2 border-[var(--primary)]/30">
                          <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      

      </div>
    </section>
  );
}