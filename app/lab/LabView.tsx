"use client";
import {useRef,useState} from "react";
import Link from "next/link";
import {motion,useReducedMotion} from "framer-motion";
import {ArrowUpRight,RotateCcw,Radio,Terminal,Move,MousePointer2,Power} from "lucide-react";
import {Footer} from "@/components/Footer";

const prompts=[
 {name:"TRADE-OFF",line:"Uma solução elegante também precisa ser fácil de manter.",code:"const quality = clarity + reliability;"},
 {name:"DEBUG MODE",line:"O problema certo vale mais que uma resposta rápida.",code:"while (unknown) { investigate(); }"},
 {name:"SYSTEM THINKING",line:"Cada decisão local muda um sistema inteiro.",code:"connect(context, code, people);"},
 {name:"PRODUCT FIRST",line:"A melhor abstração começa entendendo quem a utiliza.",code:"solve(realUserProblem);"},
];
export default function LabView(){
 const [index,setIndex]=useState(0);const [power,setPower]=useState(true);const [signal,setSignal]=useState(62);
 const reduced=useReducedMotion();const orbitRef=useRef<HTMLDivElement>(null);
 return <main><section className="lab-page page-shell"><div className="page-topline"><span>05 / EXPERIMENTAL DIVISION</span><span>NOT EVERYTHING NEEDS A TEMPLATE</span></div>
 <div className="lab-header"><span className="eyebrow text-acid">[ HANDLE WITH CURIOSITY ]</span><h1>THE<br/><em>PLAYGROUND.</em></h1><p>Um espaço para experimentar movimento, lógica e interação. Aqui você não apenas observa a interface: você interfere nela.</p></div>
 <div className="lab-room-grid">
 <section className={`lab-module lab-module-orbit ${power?"is-powered":"is-off"}`} aria-label="Experimento orbital"><div className="lab-module-top"><span>EXP_001 / GRAVITY FIELD</span><button onClick={()=>setPower(v=>!v)} aria-label={power?"Desligar campo":"Ligar campo"} aria-pressed={power}><Power size={17}/></button></div><div ref={orbitRef} className="lab-orbit-field"><div className="lab-orbit-circle one"/><div className="lab-orbit-circle two"/><motion.div drag={!reduced&&power} dragConstraints={orbitRef} dragElastic={.2} whileDrag={{scale:1.15}} className="lab-drag-orb" role="img" aria-label="Núcleo orbital móvel"><span>CS</span></motion.div><span className="lab-corner l1">X: 34.87</span><span className="lab-corner l2">Y: 70.32</span></div><div className="lab-module-bottom"><span><Move size={15}/> ARRASTE O NÚCLEO</span><span>{power?"FIELD ACTIVE":"PAUSED"}</span></div></section>
 <section className="lab-module lab-module-terminal"><div className="lab-module-top"><span>EXP_002 / IDEA GENERATOR</span><Terminal size={17}/></div><div className="lab-terminal-output"><span className="lab-terminal-prompt">camila@beyond:~$ ./principle --random</span><div key={index} className="lab-terminal-result"><span>[{prompts[index].name}]</span><h2>{prompts[index].line}</h2><code>{prompts[index].code}</code></div></div><button className="lab-replay" onClick={()=>setIndex(i=>(i+1)%prompts.length)}><RotateCcw size={16}/> GERAR NOVA IDEIA <ArrowUpRight size={17}/></button></section>
 <section className="lab-module lab-module-signal"><div className="lab-module-top"><span>EXP_003 / SIGNAL TUNER</span><Radio size={17}/></div><div className="lab-signal-visual"><div className="lab-signal-waves" style={{opacity:.3+signal/150}}>{Array.from({length:18},(_,i)=><span key={i} style={{height:`${Math.max(9,Math.abs(Math.sin((i+1)*.51)*signal)).toFixed(2)}%`}}/>)}</div><div className="lab-signal-number"><strong>{signal}<small>%</small></strong><span>CLARITY SIGNAL</span></div></div><label className="lab-slider-label" htmlFor="lab-signal">ALTERAR FREQUÊNCIA <span>{signal}%</span></label><input id="lab-signal" type="range" min="10" max="100" value={signal} onChange={e=>setSignal(Number(e.target.value))} className="lab-slider"/><div className="lab-module-bottom"><span><MousePointer2 size={15}/> ARRASTE PARA CONTROLAR</span><span>LIVE INPUT</span></div></section>
 </div>
 <section className="lab-outro"><span className="eyebrow">THOUGHTFUL INTERACTION / NOT MOTION FOR MOTION'S SAKE</span><h2>Curiosidade é<br/><em>parte do código.</em></h2><Link className="text-link" href="/work">VOLTAR AOS PROJETOS <ArrowUpRight/></Link></section>
 </section><Footer/></main>;
}
