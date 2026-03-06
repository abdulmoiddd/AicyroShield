import Head from 'next/head';
import Navbar from '../components/Essential/Navbar';
import Hero from '../components/Home/hero';
import WhoAreWe from '../components/Home/whoarewe';
import SolutionPhase from '../components/Home/Solutionphase';
import Footer from '../components/Essential/Footer';
import Industries from '@/components/Home/Industries';
import WhyAicyro from '@/components/Home/whyaicyro';
import SecurityCompliance from '@/components/Home/SecurityCompliance';
import ProductRoadmap from '@/components/Home/Productroadmap';
import AboutAicyro from '@/components/Home/AboutAicyro';
import Aboutshield from "@/components/Home/Aboutshield"
import SystemArchitecture from '@/components/Home/SystemArchitecture';
import Faq from '@/components/Home/Faqs';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-textMain flex flex-col font-sans overflow-x-hidden scroll-smooth">
      <Head>
        <title>Aicyro Shield | Next-Gen Web Security</title>
        <meta name="description" content="Promoting Aicyro Shield - The ultimate fusion of performance and security." />
      </Head>
   
      {/* Navbar is rendered globally here */}
      <Navbar />
    
      <main>
        <div id="home"><Hero /></div>
        <div id="overview"><WhoAreWe /></div>
        <div id="solutions"><SolutionPhase /></div>
        <div id="Archi" > <SystemArchitecture /> </div>
        {/* <div id="aboutshield"><Aboutshield />   </div> */}
        <div id="industries"><Industries /></div>
        <div id="why-aicyro"><WhyAicyro /></div>
        <div id="security"><SecurityCompliance /></div>
        <div id="roadmap"><ProductRoadmap /></div>
        <div id="about"><AboutAicyro /></div>
        <div id="faqs"><Faq /> </div>
      </main>
      <Footer />
    </div>
  );
}