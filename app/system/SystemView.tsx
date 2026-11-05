"use client";
import {useState} from "react";
import Link from "next/link";
import {motion,AnimatePresence} from "framer-motion";
import {ArrowUpRight,Plus} from "lucide-react";
import {techGroups} from "@/content/site";
import {Footer} from "@/components/Footer";
export default function SystemView(){const [active,setActive]=useState("backend");const chosen=techGroups.find(g=>g.id===active)!;
return <main><section className="system-page page-shell"><div className="page-topline"><span>04 / O ECOSSISTEMA</span><span>EVERY PIECE HAS A PURPOSE</span></div><div className="system-intro"><h1 className="page-title">NÃO É UMA<br/><em>LISTA DE SKILLS.</em></h1><p>É uma rede de escolhas. Cada camada existe para servir ao sistema inteiro.</p></div>
<div className="system-lab"><div className="system-map" aria-label="Ecossistema tecnológico interativo"><div className="map-grid" aria-hidden="true"/><div className="map-ring r1"/><div className="map-ring r2"/><div className="map-ring r3"/><div className="map-core">BUILD<span>↗</span>EVOLVE</div>
{techGroups.map((g,i)=><button key={g.id} onClick={()=>setActive(g.id)} className={`map-node node-${i} ${active===g.id?"active":""}`} aria-pressed={active===g.id}><span className="node-dot"/><strong>{g.title}</strong><small>0{i+1}</small></button>)}<span className="map-coordinate c1">X 248.19</span><span className="map-coordinate c2">Y 079.84</span></div>
<div className="system-data"><div className="console-top"><span>TECH.CONSTELLATION / {chosen.id.toUpperCase()}</span><span className="signal-dot"/></div><AnimatePresence mode="wait"><motion.div key={chosen.id} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}}><p className="eyebrow text-lilac">{chosen.caption}</p><h2>{chosen.title}</h2><p>Ferramentas que conecto conforme os requisitos, os riscos, a manutenção e a experiência que o produto precisa oferecer.</p><div className="system-tags">{chosen.tech.map(t=><span key={t}><Plus size={13}/>{t}</span>)}</div></motion.div></AnimatePresence><div className="system-data-bottom">SELECIONE UM NÓ PARA EXPLORAR <span>⊕</span></div></div>
</div><div className="system-closer"><span className="eyebrow">PRÓXIMO PASSO</span><h2>Ferramentas mudam.<br/><em>Critério permanece.</em></h2><Link className="text-link" href="/contact">INICIAR UMA CONVERSA <ArrowUpRight/></Link></div></section><Footer/></main>}
