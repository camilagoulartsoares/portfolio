"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {AnimatePresence,motion} from "framer-motion";
import {ArrowUpRight,ArrowRight,ArrowLeft,MoveDown} from "lucide-react";
import {works, type ProjectType} from "@/content/site";
import {ProjectArtwork} from "@/components/ProjectArtwork";
import {Footer} from "@/components/Footer";

type Filter = "all" | ProjectType;
const filters: {id:Filter;label:string}[]=[{id:"all",label:"TODOS"},{id:"professional",label:"CASES REAIS"},{id:"personal",label:"AUTORAL"},{id:"concept",label:"CONCEITOS"}];

export default function WorkView() {
  const [filter,setFilter]=useState<Filter>("all");
  const filtered=useMemo(()=>works.filter(p=>filter==="all"||p.type===filter),[filter]);
  const [chosen,setChosen]=useState<string>(works[0].slug);
  const active=filtered.find(p=>p.slug===chosen)||filtered[0];
  const index=filtered.findIndex(p=>p.slug===active.slug);
  function switchFilter(f:Filter){setFilter(f);setChosen(works.find(p=>f==="all"||p.type===f)?.slug||works[0].slug)}
  function rotate(direction:number){const next=(index+direction+filtered.length)%filtered.length;setChosen(filtered[next].slug)}
  // ← / → trocam o case ativo (ignorado enquanto o foco está em campos de texto, com modificadores ou com modal aberto).
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      if(e.altKey||e.ctrlKey||e.metaKey)return;
      if(e.key!=="ArrowRight"&&e.key!=="ArrowLeft")return;
      const t=e.target as HTMLElement|null;
      if(t&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName)))return;
      if(document.querySelector('[aria-modal="true"]'))return;
      e.preventDefault();
      const dir=e.key==="ArrowRight"?1:-1;
      setChosen(filtered[(index+dir+filtered.length)%filtered.length].slug);
    };
    window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);
  },[filtered,index]);
  const professionalCount=works.filter(p=>p.type==="professional").length;
  return <main>
    <section className="exhibition page-shell">
      <div className="page-topline"><span>02 / THE WORK ARCHIVE</span><span>SELECT / OBSERVE / DECODE</span></div>
      <div className="exhibition-header"><div><p className="eyebrow text-acid">[ PROJECTS ARE SMALL UNIVERSES ]</p><h1>WORK<span>/</span><br/><em>UNIVERSES.</em></h1></div><div className="exhibition-aside"><span>{String(works.length).padStart(3,"0")} EXPERIMENTS / {String(professionalCount).padStart(3,"0")} PROFESSIONAL CASES</span><p>Não são apenas telas. São problemas, hipóteses, decisões e sistemas. Explore cada universo.</p><MoveDown size={30}/></div></div>
      <div className="exhibition-controls"><span className="eyebrow">FILTRAR TRANSMISSÃO</span><div role="group" aria-label="Filtrar projetos" className="exhibition-filters">{filters.map(f=><button key={f.id} onClick={()=>switchFilter(f.id)} aria-pressed={filter===f.id} className={filter===f.id?"is-active":""}>{f.label}</button>)}</div><span className="eyebrow">{String(filtered.length).padStart(2,"0")} RESULTADOS</span></div>
      <div className="exhibition-stage">
        <div className="exhibition-index" aria-label="Projetos disponíveis">{filtered.map(p=><button key={p.slug} className={`exhibition-option ${active.slug===p.slug?"is-selected":""}`} onClick={()=>setChosen(p.slug)} aria-pressed={active.slug===p.slug}><span className="exhibition-numeral">{p.number}</span><span className="exhibition-option-name"><b>{p.title}</b><small>{p.category}</small></span><ArrowUpRight size={21}/><span className="exhibition-track"/></button>)}</div>
        <div className="exhibition-content"><AnimatePresence mode="wait"><motion.div key={active.slug} initial={{opacity:0,y:32,filter:"blur(8px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={{opacity:0,y:-25,filter:"blur(8px)"}} transition={{duration:.32}} className="exhibition-preview"><ProjectArtwork visual={active.visual}/><div className="exhibition-overlay"><span>{active.code}</span><span>{active.status}</span></div></motion.div></AnimatePresence>
          <div className="exhibition-description"><div><p className="eyebrow">{active.year} / {active.status}</p><h2>{active.subtitle}</h2><p>{active.short}</p></div><Link className="exhibition-enter" href={`/work/${active.slug}`} aria-label={`Abrir case ${active.title}`}><ArrowUpRight size={31}/></Link></div>
          <div className="exhibition-navigation"><span aria-live="polite">{String(index+1).padStart(2,"0")} <i>/</i> {String(filtered.length).padStart(2,"0")}<span className="sr-only">: {active.title}</span></span><div><button aria-label="Projeto anterior" onClick={()=>rotate(-1)}><ArrowLeft/></button><button aria-label="Próximo projeto" onClick={()=>rotate(1)}><ArrowRight/></button></div></div>
        </div>
      </div>
      <div className="exhibition-endline"><span>EXPERIENCE IS MADE OF QUESTIONS</span><span>KEEP EXPLORING ↓</span></div>
    </section><Footer/>
  </main>;
}
