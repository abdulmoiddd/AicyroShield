
// import React from 'react';
// import Lottie from 'lottie-react';
// // Adjust the path below to point to where you saved Analytics.json
// import animationData from '../../assets/Analytics.json';
// import Navbar from '../Essential/Navbar';

// export default function Hero() {
//   return (
//     <>
//       <Navbar />

//       {/* Inline styles for custom floating blob animations */}
//       <style>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 10s infinite alternate;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>

//       <section className="relative flex items-center min-h-screen pt-20 pb-32 overflow-hidden font-sans bg-[var(--background)]">
        
//         {/* ========================================== */}
//         {/* LIVE ACTIVE BACKGROUND ELEMENTS              */}
//         {/* ========================================== */}
        
//         {/* 1. Base Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] opacity-80 z-0"></div>

//         {/* 2. Tech Grid Background */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0"></div>

//         {/* 3. Floating Animated Orbs */}
//         <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[120px] opacity-[var(--spotlight-opacity)] animate-blob z-0"></div>
        
//         <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[var(--accent-blue)] rounded-full mix-blend-screen filter blur-[100px] opacity-[var(--spotlight-opacity)] animate-blob animation-delay-2000 z-0"></div>
        
//         <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-[var(--secondary)] rounded-full mix-blend-screen filter blur-[150px] opacity-[var(--spotlight-opacity)] animate-blob animation-delay-4000 z-0"></div>


//         {/* ========================================== */}
//         {/* MAIN CONTAINER                             */}
//         {/* ========================================== */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
      
//           {/* LEFT COLUMN: Text Content */}
//           <div className="flex-1 flex flex-col items-start text-left w-full">
            
//             {/* Overline Pill Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--accent-blue)] text-sm font-bold tracking-wider uppercase shadow-lg backdrop-blur-md">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//                 <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
//               </svg>
//               AI-READY PLATFORM
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight mb-6">
//               {/* Gradient Text for the brand highlight */}
//               Aicyro
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//                  Shield
//               </span>
//             </h1>

//             {/* Intro Paragraph */}
//             <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl leading-relaxed">
//               AI-powered defense that continuously monitors, detects, responds, and predicts protecting every layer of your digital and physical infrastructure.
//             </p>

//             {/* Call to Actions (Buttons) */}
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full sm:w-auto">
//               <button className="w-full sm:w-auto px-8 py-3.5 bg-[var(--primary)] text-white font-bold rounded-md shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:-translate-y-1 transition-all duration-300">
//                 Get started with Aicyro Shield
//               </button>
              
//               <button className="w-full sm:w-auto px-8 py-3.5 bg-[var(--background)]/50 backdrop-blur-md text-[var(--foreground)] font-bold rounded-md border border-[var(--border-color)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
//                 <div className="w-6 h-6 rounded-full border border-[var(--foreground-muted)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
//                       <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
//                     </svg>
//                 </div>
//                 Watch overview
//               </button>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Lottie Animation */}
//           <div className="flex-1 w-full max-w-lg lg:max-w-xl relative mt-12 lg:mt-0">
//             {/* Backdrop glow mapped to spotlight opacity, slightly animated to match */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[var(--primary)] opacity-[var(--spotlight-opacity)] blur-[90px] rounded-full pointer-events-none animate-blob"></div>
            
//             <div className="relative z-10 drop-shadow-2xl">
//               <Lottie
//                 animationData={animationData}
//                 loop={true}
//                 autoplay={true}
//               />
//             </div>
//           </div>
          
//         </div>
//       </section>
//     </>
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
////
//
//
//
//
//
//
//
//
import React from 'react';
import Lottie from 'lottie-react';
// Adjust the path below to point to where you saved Analytics.json
import animationData from '../../assets/Analytics.json'; 
import Navbar from '../Essential/Navbar';

export default function Hero() {
  return (
    <>
      <Navbar />

      {/* Advanced Keyframes for Live Gradient & Floating Effects */}
      <style>{`
        /* Smooth moving gradient background */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg-gradient {
          background-size: 200% 200%;
          animation: gradientMove 12s ease infinite;
        }

        /* Ambient Blob floating */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Gentle floating for the Lottie animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative flex items-center min-h-screen pt-24 pb-32 overflow-hidden font-sans bg-[var(--background)]">
        
        {/* ========================================== */}
        {/* LIVE MODERN GRADIENT BACKGROUND            */}
        {/* ========================================== */}
        
        {/* 1. Base Animated Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-from)] via-[var(--primary)] to-[var(--hero-to)] animate-bg-gradient opacity-[0.15] z-0"></div>

        {/* 2. Tech Grid Overlay for Cybersecurity Vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-20 z-0"></div>

        {/* 3. Deep Glowing Orbs to create volume */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-[var(--spotlight-opacity)] animate-blob z-0"></div>
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-[var(--accent-blue)] rounded-full mix-blend-screen filter blur-[130px] opacity-[var(--spotlight-opacity)] animate-blob animation-delay-2000 z-0"></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[var(--secondary)] rounded-full mix-blend-screen filter blur-[180px] opacity-[calc(var(--spotlight-opacity)-0.05)] animate-blob animation-delay-4000 z-0"></div>


        {/* ========================================== */}
        {/* MAIN HERO CONTAINER                        */}
        {/* ========================================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
      
          {/* LEFT COLUMN: Text Content & CTAs */}
          <div className="flex-1 flex flex-col items-start text-left w-full z-20">
            
            {/* Glassmorphic Overline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--card-bg)]/40 border border-[var(--primary)]/30 text-[var(--accent-blue)] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(138,43,226,0.15)] backdrop-blur-xl transition-all hover:border-[var(--primary)]/60 cursor-default">
              {/* <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]"></span>
              </span> */}

              <span className="relative flex h-5 w-5 items-center justify-center">
  {/* The pulsing background */}
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
  
  {/* The solid primary circle containing the shield */}
  <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-[var(--primary)] text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  </span>
</span>
              Autonomous Security Intelligence
            </div>

            {/* Redesigned Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[var(--foreground)] tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Aicyro 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] animate-bg-gradient">
                 Shield
              </span>
            </h1>

            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl leading-relaxed">
              The autonomous full-spectrum security intelligence platform. AI-powered defense that continuously monitors, detects, responds, and predicts protecting every layer of your digital and physical infrastructure.
            </p>

            {/* Elevated Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full sm:w-auto">
              
              {/* Primary Glowing Button */}
              {/* <button className="relative group w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transform transition-transform duration-500 ease-in-out"></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5 text-[var(--foreground)] group-hover:text-white transition-colors">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </div>
                Watch Overview
              </button> */}
              
             {/* Primary CTA Button */}
              <button className="relative group overflow-hidden w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                
                {/* The Shine Animation Effect */}
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transform transition-transform duration-500 ease-in-out z-0"></div>
                
                {/* Play Icon Wrapper */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5 text-white drop-shadow-sm">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Button Text */}
                <span className="relative z-10">
                  Watch overview
                </span>

              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Lottie Animation */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative mt-16 lg:mt-0 animate-float z-20">
            {/* Lottie specific backdrop glow for extra 3D depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] opacity-[0.08] blur-[70px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}