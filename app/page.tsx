"use client";
import Link from "next/link";
import {ArrowDownRight,ArrowUpRight,MoveUpRight,Radio,ArrowRight,MoveDown} from "lucide-react";
import {motion,useScroll,useTransform,useReducedMotion} from "framer-motion";
import {OrbitalCore} from "@/components/OrbitalCore";
import {Reveal} from "@/components/Reveal";
import {ProjectArtwork} from "@/components/ProjectArtwork";
import {works} from "@/content/site";
import {Footer} from "@/components/Footer";

export default function Home(){
 const reduced=useReducedMotion();const {scrollY}=useScroll();const orbShift=useTransform(scrollY,[0,850],[0,-130]);
 return <main>
  <section className="home-hero min-h-[850px] pt-[84px]" aria-labelledby="home-title">
   <div className="hero-grid" aria-hidden="true"/><div className="hero-scanline" aria-hidden="true"/>
   <motion.div className="hero-orb" style={reduced?undefined:{y:orbShift}}><OrbitalCore/></motion.div>
   <div className="hero-topline"><span><span className="signal-dot mr-3 inline-block"/>OPEN TO NEW CHALLENGES</span><span>PORTFOLIO / EXPERIMENT 002</span></div>
   <div className="hero-content relative z-10"><div className="hero-mini-label"><span className="line-stroke"/> FULL STACK DEVELOPER / PRODUCT THINKER</div><h1 id="home-title" className="hero-title"><span>CAM<span className="italic-outline">I</span>LA</span><span className="hero-last">SOARES<span className="text-acid">.</span></span></h1><div className="hero-bottom-copy"><p>Eu construo o que acontece<br/><em>além da interface.</em></p><div><span>00 / 07</span><span>SCROLL TO DECODE ↓</span></div></div></div>
   <div className="hero-rightnote">DESENVOLVEDORA FULL STACK <span>↗</span> 4+ ANOS</div>
   <div className="hero-floating-status"><span className="hero-status-symbol"><Radio size={18}/></span><div><small>LIVE TRANSMISSION</small><strong>IDEAS → SYSTEMS → IMPACT</strong></div><span className="hero-status-led"/></div>
  </section>
  <div className="kinetic-bar"><div className="kinetic-track" aria-label="Tecnologia, produto, criatividade e impacto">{Array.from({length:4},(_,i)=><span key={i}>ENGINEERING <i>✳</i> PRODUCT THINKING <i>✳</i> CREATIVE SYSTEMS <i>✳</i> BUILT TO EVOLVE <i>✳</i></span>)}</div></div>
  <section className="home-transition-section section-frame"><div className="max-w-[1600px] mx-auto grid gap-14 lg:grid-cols-[.7fr_1.3fr] items-end"><Reveal><p className="eyebrow mb-5">[ 00:001 / TRANSMISSÃO ]</p><div className="signal-graphic"><span>01</span><div className="signal-graphic-line"/><span>∞</span></div></Reveal><Reveal delay={.1}><p className="max-w-4xl font-display text-4xl font-bold leading-[1.15] tracking-[-.045em] sm:text-6xl lg:text-7xl">Código sem contexto é ruído. <span className="text-lilac">Eu conecto lógica, pessoas e impacto.</span></p><Link className="text-link mt-10" href="/manifesto">ENTRAR NO MEU MODO DE PENSAR <ArrowUpRight size={18}/></Link></Reveal></div></section>
  <section className="home-featured"><div className="home-featured-top"><div><span className="eyebrow text-acid">/ SELECTED SIGNALS</span><h2>PROJETOS<br/><em>EM ÓRBITA.</em></h2></div><div className="home-featured-intro"><p>Uma amostra dos problemas que investigo e dos produtos que imagino. Sem inventar entregas, sem limitar a criatividade.</p><Link href="/work" className="text-link">EXPLORAR TODOS OS 05 <ArrowUpRight size={18}/></Link></div></div>
   <div className="home-featured-list">{works.slice(0,3).map((w,i)=><Link href={`/work/${w.slug}`} className={`home-project-story project-story-${i}`} key={w.slug}><div className="story-art"><ProjectArtwork visual={w.visual} compact/></div><div className="story-copy"><div className="story-meta"><span>{w.number} / {w.code}</span><span>{w.year}</span></div><h3>{w.title}<span>↗</span></h3><p>{w.subtitle}</p><div className="story-bottom"><span>{w.status}</span><ArrowUpRight size={26}/></div></div></Link>)}</div>
  </section>
  <section className="kinetic-manifesto"><span className="eyebrow">BETTER SYSTEMS / BETTER QUESTIONS</span><motion.div className="kinetic-manifesto-head" whileInView={{opacity:1,y:0}} initial={{opacity:.2,y:50}} viewport={{once:true}} transition={{duration:.7}}><span>DON'T JUST</span><span className="kinetic-italic">SHIP CODE.</span><span>SHIP <em>THOUGHT.</em></span></motion.div><Link href="/lab" className="kinetic-portal"><span>ENTRAR NO LABORATÓRIO</span><ArrowUpRight size={27}/></Link></section>
  <section className="section-frame chapter-frame" aria-label="Explorar capítulos"><div className="mb-10 flex items-center justify-between"><p className="eyebrow">[ SUA PRÓXIMA PORTA ]</p><span className="eyebrow text-white/30">NAVEGAÇÃO NÃO LINEAR</span></div><div className="chapter-grid"><Link href="/work" className="chapter-card chapter-card-feature"><span className="chapter-index">01 / EXPLORAR CASES</span><span className="chapter-card-art art-work" aria-hidden="true"><span/><span/><span/></span><span className="chapter-bottom"><strong>UNIVERSOS<br/>REAIS.</strong><MoveUpRight/></span></Link><Link href="/system" className="chapter-card chapter-card-purple"><span className="chapter-index">02 / TECNOLOGIA</span><span className="chapter-card-art art-system" aria-hidden="true"><i/><i/><i/><i/></span><span className="chapter-bottom"><strong>O MEU<br/>ECOSSISTEMA.</strong><MoveUpRight/></span></Link><Link href="/lab" className="chapter-card chapter-card-ink"><span className="chapter-index">03 / EXPERIMENTAR</span><span className="chapter-card-art art-journey" aria-hidden="true">∞<span>↗</span></span><span className="chapter-bottom"><strong>LABORATÓRIO<br/>INTERATIVO.</strong><MoveUpRight/></span></Link></div></section>
  <section className="home-end section-frame"><Reveal><span className="eyebrow">ONE LAST THING</span><h2>A próxima grande ideia<br/>começa com <em>uma conversa.</em></h2><Link href="/contact" className="orb-button">VAMOS CONVERSAR <ArrowDownRight size={24}/></Link></Reveal><div className="home-end-mark"><MoveDown size={22}/><span>BEYOND THE INTERFACE / 2026</span><ArrowRight size={22}/></div></section>
  <Footer/>
 </main>;
}
