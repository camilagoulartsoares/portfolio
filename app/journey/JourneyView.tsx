"use client";
import {useState} from "react";
import Link from "next/link";
import {AnimatePresence,motion} from "framer-motion";
import {ArrowUpRight,ArrowRight} from "lucide-react";
import {Footer} from "@/components/Footer";
const phases=[
 {id:"01",eyebrow:"FUNDAÇÃO",title:"Construir com consistência.",text:"Bases de frontend e backend, domínio das regras de negócio e atenção ao fluxo completo de uma funcionalidade.",signals:["Interfaces web", "Modelagem de lógica", "Banco de dados"]},
 {id:"02",eyebrow:"INTEGRAÇÃO",title:"Enxergar o sistema inteiro.",text:"Conexão entre aplicações, dados, APIs e infraestrutura. Decisões técnicas orientadas ao contexto do produto e do time.",signals:["Integração entre camadas", "Manutenção de sistemas", "Colaboração técnica"]},
 {id:"03",eyebrow:"COMPLEXIDADE",title:"Evoluir sem perder controle.",text:"Aprofundamento em performance, relatórios, processamento de dados, cenários de exceção e alterações seguras em bases existentes.",signals:["Otimização", "Confiabilidade", "Evolução arquitetural"]}
];
export default function JourneyView(){const [index,setIndex]=useState(1);const a=phases[index];return <main>
 <section className="journey-page page-shell"><div className="page-topline"><span>03 / A EVOLUÇÃO</span><span>EXPERIENCE / PROGRESSIVE SYSTEMS</span></div>
 <h1 className="page-title journey-heading">O CAMINHO<br/><em>ATÉ AQUI.</em></h1>
 <div className="journey-body"><div className="journey-years"><span>EXPERIÊNCIA</span><strong>4<span>+</span></strong><span>ANOS CONSTRUINDO SOFTWARE WEB</span></div>
 <div className="journey-console"><div className="console-top"><span>CAREER.EXE / DEVELOPMENT LOG</span><span className="signal-dot"/></div>
 <div className="phase-select" role="tablist" aria-label="Fases da trajetória">{phases.map((p,i)=><button role="tab" aria-selected={i===index} key={p.id} onClick={()=>setIndex(i)} className={index===i?"selected":""}><span>{p.id}</span><span>{p.eyebrow}</span></button>)}</div>
 <AnimatePresence mode="wait"><motion.div key={a.id} className="phase-content" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:.27}}><span className="eyebrow text-acid">/ {a.eyebrow}</span><h2>{a.title}</h2><p>{a.text}</p><div className="phase-signals">{a.signals.map(s=><span key={s}>↗ {s}</span>)}</div></motion.div></AnimatePresence>
 <div className="console-bottom"><span>ARQUIVO {a.id} / 03</span><button onClick={()=>setIndex(i=>(i+1)%phases.length)} aria-label="Próxima fase">PRÓXIMA ETAPA <ArrowRight size={16}/></button></div></div></div>
 </section>
 <section className="section-frame journey-tail"><span className="eyebrow">A PRÁTICA</span><h2>Não é só sobre tecnologias.<br/><span>É sobre o que elas resolvem.</span></h2><Link href="/work" className="text-link">CONHECER OS CASES <ArrowUpRight/></Link></section><Footer/></main>}
