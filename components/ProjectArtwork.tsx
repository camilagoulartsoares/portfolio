"use client";
import {motion} from "framer-motion";
import type {ProjectVisual} from "@/content/site";
import {Activity, Check, CircleDot, Layers3, Radio, Sparkles} from "lucide-react";

const graph = [22,39,28,53,46,68,56,75,62,84,79,95];

export function ProjectArtwork({visual,compact=false}:{visual:ProjectVisual;compact?:boolean}) {
  return <div className={`artwork artwork--${visual} ${compact?"artwork--compact":""}`} role="img" aria-label={`Ilustração conceitual do projeto ${visual.toUpperCase()}`}>
    <div className="artwork-noise"/><span className="artwork-coordinate">SYS://{visual.toUpperCase()} <span className="signal-dot"/></span>
    {visual === "atlas" && <>
      <div className="artwork-atlas-halo"/><motion.div className="atlas-ring a" animate={{rotate:360}} transition={{duration:36,repeat:Infinity,ease:"linear"}}/>
      <motion.div className="atlas-ring b" animate={{rotate:-360}} transition={{duration:45,repeat:Infinity,ease:"linear"}}/>
      <div className="atlas-ui"><div className="atlas-label">DATA / OBSERVABILITY <Radio size={13}/></div><div className="atlas-metric">01<span> / QUERY FLOW</span></div><div className="atlas-chart">{graph.map((n,i)=><motion.span key={i} initial={{scaleY:.1}} whileInView={{scaleY:1}} transition={{duration:.5,delay:i*.04}} style={{height:`${n}%`}}/>)}</div><div className="atlas-footer">INTEGRITY <strong>FIRST_</strong></div></div>
      <div className="artwork-flare flare-a"/>
    </>}
    {visual === "fission" && <>
      <motion.div className="fission-halo" animate={{rotate:360}} transition={{duration:55,repeat:Infinity,ease:"linear"}}/>
      <div className="fission-doc fission-doc--back"><span>PART / 003</span><i/><i/><i/></div>
      <div className="fission-doc fission-doc--middle"><span>PART / 002</span><i/><i/><i/></div>
      <motion.div className="fission-doc fission-doc--front" animate={{y:[0,-10,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}><span>PART / 001 <Check size={12}/></span><strong>PDF</strong><i/><i/><i/></motion.div>
      <span className="fission-footer">RENDER → SPLIT → DELIVER</span>
    </>}
    {visual === "quinto" && <>
      <div className="quinto-orbit"/><div className="quinto-screen"><div className="quinto-top"><span>QUINTO<span style={{color:"#9de4ef"}}>●</span></span><span>FINANCIAL SIGNAL</span></div><p>PRÓXIMO CICLO</p><strong>05<span> / ÚTIL</span></strong><div className="quinto-progress"><i/></div><div className="quinto-line"><span>CONTAS ORGANIZADAS</span><CircleDot size={15}/></div><div className="quinto-line"><span>ALERTAS PROGRAMADOS</span><Check size={15}/></div></div><motion.div className="quinto-floating" animate={{y:[0,-10,0],rotate:[-3,1,-3]}} transition={{duration:6,repeat:Infinity}}><Activity size={16}/><span>LEMBRETE<br/><b>SEM SURPRESAS</b></span></motion.div>
    </>}
    {visual === "spectra" && <>
      <div className="spectra-ring"/><motion.div className="spectra-ring spectra-ring--b" animate={{rotate:360}} transition={{duration:25,repeat:Infinity,ease:"linear"}}/><div className="spectra-inside"><Sparkles size={19}/><strong>BEYOND<br/><em>THE INTERFACE.</em></strong><span>CREATIVE ENGINEERING / 2026</span></div><div className="spectra-orb"/>
    </>}
    {visual === "nexus" && <>
      <svg className="nexus-lines" viewBox="0 0 480 360" aria-hidden="true"><path d="M70 190L195 90L340 140L418 290L195 278L70 190L195 278L340 140" fill="none" stroke="rgba(255,187,146,.40)" strokeWidth="1.5" strokeDasharray="6 8"/><path d="M70 190L340 140M195 90L418 290" fill="none" stroke="rgba(255,255,255,.16)"/></svg>
      <div className="nexus-node n1">API <Layers3 size={14}/></div><div className="nexus-node n2">DATA <Check size={13}/></div><div className="nexus-node n3">EVENTS <Radio size={13}/></div><div className="nexus-node n4">SYNC <Activity size={14}/></div><motion.div className="nexus-pulse" animate={{scale:[.8,1.4,.8],opacity:[.4,.15,.4]}} transition={{duration:4,repeat:Infinity}}/><div className="nexus-core">N/<span>05</span></div>
    </>}
    <span className="artwork-bottomline">CREATIVE SYSTEM STUDY <span>© CAMILA / 2026</span></span>
  </div>
}
