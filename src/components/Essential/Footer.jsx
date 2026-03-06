// // import React from 'react';
// // import Link from 'next/link';

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="relative bg-[var(--background)] pt-20 pb-10 overflow-hidden font-sans border-t border-[var(--border-color)]/50">
      
// //       {/* ========================================== */}
// //       {/* BACKGROUND EFFECTS                         */}
// //       {/* ========================================== */}
      
// //       {/* Top Border Gradient Line */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
      
// //       {/* Cyber Mesh Background */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_100%,#000_20%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

// //       {/* Ambient Bottom Glow */}
// //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[var(--primary)] to-transparent opacity-[0.05] blur-[100px] rounded-t-full pointer-events-none z-0"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
// //         {/* ========================================== */}
// //         {/* MAIN FOOTER CONTENT                        */}
// //         {/* ========================================== */}
// //         <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
// //           {/* 1. Brand & Description */}
// //           <div className="flex flex-col items-start max-w-md">
// //             <Link href="/" className="relative text-2xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-2 group mb-6">
// //               {/* Shield Icon */}
// //               <div className="text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
// //                   <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
// //                 </svg>
// //               </div>
// //               <span className="text-[var(--foreground)] transition-colors duration-300">Aicyro</span>
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
// //                 Shield
// //               </span>
// //             </Link>
            
// //             <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-8">
// //               The autonomous full-spectrum security intelligence platform. AI-powered defense that continuously monitors, detects, responds, and predicts.
// //             </p>
            
// //             {/* Social Icons */}
// //             <div className="flex items-center gap-3">
// //               {/* Twitter / X */}
// //               <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all duration-300">
// //                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
// //                 </svg>
// //               </a>
// //               {/* LinkedIn */}
// //               <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all duration-300">
// //                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                   <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
// //                 </svg>
// //               </a>
// //               {/* GitHub */}
// //               <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(138,43,226,0.3)] transition-all duration-300">
// //                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
// //                 </svg>
// //               </a>
// //             </div>
// //           </div>

// //           {/* 2. Quick Links */}
// //           <div className="flex flex-col items-start md:min-w-[200px]">
// //             <h3 className="text-[var(--foreground)] font-bold mb-6 tracking-wide uppercase text-xs">Quick Links</h3>
// //             <ul className="flex flex-col space-y-3.5 text-sm text-[var(--foreground-muted)] font-medium">
// //               <li><Link href="#overview" className="hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-px bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>Overview</Link></li>
// //               <li><Link href="#solutions" className="hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-px bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>Solutions</Link></li>
// //               <li><Link href="#industries" className="hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-px bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>Industries</Link></li>
// //               <li><Link href="#roadmap" className="hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-px bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>Roadmap</Link></li>
// //               <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-px bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>About</Link></li>
// //             </ul>
// //           </div>

// //         </div>

// //         {/* ========================================== */}
// //         {/* BOTTOM BAR: COPYRIGHT & SYSTEM STATUS      */}
// //         {/* ========================================== */}
// //         <div className="pt-8 border-t border-[var(--border-color)]/80 flex flex-col md:flex-row justify-between items-center gap-6">
          
// //           <div className="flex flex-col sm:flex-row items-center gap-4">
            
// //             <p className="text-[var(--foreground-muted)] text-xs font-medium">
// //               © {currentYear} Aicyro. All rights reserved.
// //             </p>
// //           </div>

// //           <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[var(--foreground-muted)]">
// //             <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
// //             <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a>
// //             {/* <a href="#" className="hover:text-[var(--primary)] transition-colors">Cookie Settings</a> */}
// //           </div>
          
// //         </div>

// //       </div>
// //     </footer>
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


// import React from 'react';
// import Link from 'next/link';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'Overview', href: '#overview' },
//     { name: 'Solutions', href: '#solutions' },
//     { name: 'Industries', href: '#industries' },
//     { name: 'Roadmap', href: '#roadmap' },
//     { name: 'About', href: '/about' },
//   ];

//   return (
//     <footer className="relative bg-[var(--background)] pt-24 pb-8 overflow-hidden font-sans border-t border-[var(--border-color)]/50">
      
//       {/* ========================================== */}
//       {/* BACKGROUND EFFECTS                         */}
//       {/* ========================================== */}
      
//       {/* Top Border Gradient Line */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
      
//       {/* Cyber Mesh Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_100%,#000_20%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

//       {/* Ambient Bottom Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[var(--primary)] to-transparent opacity-[0.03] blur-[120px] rounded-t-full pointer-events-none z-0"></div>

//       {/* Massive Background Watermark */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-[var(--primary)] opacity-[0.02] pointer-events-none select-none z-0 tracking-tighter whitespace-nowrap">
//         AICYRO
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* ========================================== */}
//         {/* MAIN FOOTER CONTENT                        */}
//         {/* ========================================== */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          
//           {/* 1. Brand & Description (Left Side) */}
//           <div className="flex flex-col items-start max-w-md w-full lg:w-1/2">
//             <Link href="/" className="relative text-3xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-3 group mb-6">
//               {/* Shield Icon */}
//               <div className="text-[var(--primary)] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                   <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <span className="text-[var(--foreground)] transition-colors duration-300">Aicyro</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//                 Shield
//               </span>
//             </Link>
            
//             <p className="text-[var(--foreground-muted)] text-base leading-relaxed mb-8">
//               The autonomous full-spectrum security intelligence platform. AI-powered defense that continuously monitors, detects, responds, and predicts.
//             </p>
            
//             {/* Social Icons */}
//             <div className="flex items-center gap-4">
//               {/* Twitter / X */}
//               <a href="#" className="w-11 h-11 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
//                 <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
//                 </svg>
//               </a>
//               {/* LinkedIn */}
//               <a href="#" className="w-11 h-11 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
//                 <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
//                 </svg>
//               </a>
//               {/* GitHub */}
//               <a href="#" className="w-11 h-11 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
//                 <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* 2. Quick Links (Right Side) */}
//           <div className="flex flex-col items-start lg:items-end lg:text-right w-full lg:w-1/2">
//             <h3 className="text-[var(--foreground)] font-bold mb-6 tracking-widest uppercase text-sm border-b border-[var(--primary)]/30 pb-2 inline-block">System Navigation</h3>
            
//             <ul className="flex flex-col space-y-4 text-base font-medium">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="relative group inline-flex items-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-300"
//                   >
//                     {/* Left Bracket (Terminal effect) */}
//                     <span className="text-[var(--primary)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2 font-mono font-bold">
//                       [
//                     </span>
                    
//                     <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
//                       {link.name}
//                     </span>
                    
//                     {/* Right Bracket */}
//                     <span className="text-[var(--accent-blue)] opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2 font-mono font-bold">
//                       ]
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* ========================================== */}
//         {/* BOTTOM BAR: COPYRIGHT & LEGAL              */}
//         {/* ========================================== */}
//         <div className="pt-6 border-t border-[var(--border-color)]/50 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
//           <div className="text-[var(--foreground-muted)] text-sm font-medium">
//             © {currentYear} Aicyro. All rights reserved.
//           </div>

//           <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[var(--foreground-muted)]">
//             <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a>
//           </div>
          
//         </div>

//       </div>
//     </footer>
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
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className="relative bg-[var(--background)] pt-16 pb-6 overflow-hidden font-sans border-t border-[var(--border-color)]/50">
      
      {/* ========================================== */}
      {/* BACKGROUND EFFECTS                         */}
      {/* ========================================== */}
      
      {/* Top Border Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
      
      {/* Cyber Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_100%,#000_20%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      {/* Ambient Bottom Glow (Reduced height) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-[var(--primary)] to-transparent opacity-[0.03] blur-[120px] rounded-t-full pointer-events-none z-0"></div>

      {/* Massive Background Watermark (Scaled down slightly) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black text-[var(--primary)] opacity-[0.02] pointer-events-none select-none z-0 tracking-tighter whitespace-nowrap">
        AICYRO
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* MAIN FOOTER CONTENT                        */}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">
          
          {/* 1. Brand & Description (Left Side) */}
          <div className="flex flex-col items-start max-w-md w-full lg:w-1/2">
            <Link href="/" className="relative text-2xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-3 group mb-4">
              {/* Shield Icon */}
              <div className="text-[var(--primary)] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[var(--foreground)] transition-colors duration-300">Aicyro</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                Shield
              </span>
            </Link>
            
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6">
              The autonomous full-spectrum security intelligence platform. AI-powered defense that continuously monitors, detects, responds, and predicts.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/50 flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(138,43,226,0.3)] transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links (Right Side) */}
          <div className="flex flex-col items-start lg:items-end lg:text-right w-full lg:w-1/2">
            <h3 className="text-[var(--foreground)] font-bold mb-4 tracking-widest uppercase text-sm border-b border-[var(--primary)]/30 pb-2 inline-block">System Navigation</h3>
            
            <ul className="flex flex-col space-y-2 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="relative group inline-flex items-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-300"
                  >
                    {/* Left Bracket (Terminal effect) */}
                    <span className="text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1.5 font-mono font-bold">
                      [
                    </span>
                    
                    <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                      {link.name}
                    </span>
                    
                    {/* Right Bracket */}
                    <span className="text-[var(--accent-blue)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-1.5 font-mono font-bold">
                      ]
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ========================================== */}
        {/* BOTTOM BAR: COPYRIGHT & LEGAL              */}
        {/* ========================================== */}
        <div className="pt-6 border-t border-[var(--border-color)]/50 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          <div className="text-[var(--foreground-muted)] text-xs font-medium">
            © {currentYear} Aicyro. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[var(--foreground-muted)]">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}