"use client";
import {useState} from "react";
import {motion,useReducedMotion} from "framer-motion";
export function OrbitalCore(){
 const reduced=useReducedMotion();const [active,setActive]=useState(false);
 return <div className={`orbital-wrap ${active?"orbital-active":""}`} onPointerEnter={()=>setActive(true)} onPointerLeave={()=>setActive(false)} role="img" aria-label="Visualização artística de núcleo tecnológico em movimento">
   <div className="orbital-halo"/>
   <div className="orbital-ring ring-1"/><div className="orbital-ring ring-2"/><div className="orbital-ring ring-3"/>
   <div className="orbital-crosshair h"/><div className="orbital-crosshair v"/>
   <motion.div className="orbital-center" animate={reduced?{}:{rotate:360}} transition={{duration:40,repeat:Infinity,ease:"linear"}}>
     <div className="orbital-center-inner"><span className="orbital-center-label">LOGIC<br/>↔<br/>IMPACT</span></div>
   </motion.div>
   <div className="orbital-tag tag-1">&lt;systems /&gt;</div><div className="orbital-tag tag-2">[ 4+ YEARS ]</div><div className="orbital-tag tag-3">BUILD / REFINE / SCALE</div>
   <div className="orbital-indicator"/><span className="orbital-caption">INTERACTIVE / ENGINEERING CORE</span>
 </div>;
}
