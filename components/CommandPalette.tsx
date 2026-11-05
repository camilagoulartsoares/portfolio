"use client";
import {useEffect,useRef,useState,useSyncExternalStore} from "react";
import {useRouter} from "next/navigation";
import {AnimatePresence,motion} from "framer-motion";
import {ArrowUpRight,Command,Search,X} from "lucide-react";
import {navigation,works} from "@/content/site";

export const paletteOptions=[...navigation.map(n=>({label:n.label,meta:n.descriptor,path:n.href})),...works.map(w=>({label:w.title,meta:w.subtitle,path:`/work/${w.slug}`}))];

/** Busca sem diferenciar maiúsculas nem acentos ("laboratorio" encontra "Laboratório"). */
const fold=(s:string)=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLocaleLowerCase("pt-BR");
export function filterOptions(term:string){const q=fold(term.trim());return paletteOptions.filter(o=>fold(`${o.label} ${o.meta}`).includes(q))}

const noopSubscribe=()=>()=>{};
/** Detecta macOS/iOS sem setState em effect; no SSR assume ⌘ (corrigido na hidratação). */
const useIsMac=()=>useSyncExternalStore(noopSubscribe,()=>/Mac|iPhone|iPad/i.test(navigator.platform||navigator.userAgent),()=>true);

export function CommandPalette(){
 const [open,setOpen]=useState(false);const [term,setTerm]=useState("");const [cursor,setCursor]=useState(0);const isMac=useIsMac();
 const ref=useRef<HTMLInputElement>(null);const launchRef=useRef<HTMLButtonElement>(null);const wasOpen=useRef(false);const router=useRouter();
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setOpen(v=>!v);setTerm("");setCursor(0)}if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 useEffect(()=>{
  if(open){wasOpen.current=true;const timer=window.setTimeout(()=>ref.current?.focus(),40);return()=>window.clearTimeout(timer)}
  if(wasOpen.current){wasOpen.current=false;launchRef.current?.focus()}
 },[open]);
 const results=filterOptions(term);
 const show=()=>{setTerm("");setCursor(0);setOpen(true)};
 const go=(path:string)=>{router.push(path);setOpen(false)};
 const onInputKey=(e:React.KeyboardEvent<HTMLInputElement>)=>{
  if(e.key==="ArrowDown"){e.preventDefault();setCursor(c=>results.length?(c+1)%results.length:0)}
  else if(e.key==="ArrowUp"){e.preventDefault();setCursor(c=>results.length?(c-1+results.length)%results.length:0)}
  else if(e.key==="Enter"&&results[cursor])go(results[cursor].path);
 };
 return <><button ref={launchRef} className="cmd-launch" onClick={show} aria-label="Abrir busca de páginas e projetos" aria-keyshortcuts="Control+K Meta+K"><Command size={14} aria-hidden="true"/><span>IR PARA</span><kbd>{isMac?"⌘ K":"CTRL K"}</kbd></button>
 <AnimatePresence>{open&&<motion.div className="cmd-backdrop" onMouseDown={()=>setOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="presentation"><motion.div onMouseDown={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Busca de páginas e projetos" initial={{scale:.94,y:-20,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:.96,y:10,opacity:0}} className="cmd-panel">
  <div className="cmd-search"><Search size={19} aria-hidden="true"/><input ref={ref} value={term} onChange={e=>{setTerm(e.target.value);setCursor(0)}} onKeyDown={onInputKey} placeholder="Buscar página, projeto, ideia..." aria-label="Buscar" role="combobox" aria-expanded="true" aria-controls="cmd-results" aria-activedescendant={results[cursor]?`cmd-opt-${cursor}`:undefined} aria-autocomplete="list"/><button onClick={()=>setOpen(false)} aria-label="Fechar busca"><X size={18}/></button></div>
  <div className="cmd-items" id="cmd-results" role="listbox" aria-label="Resultados">{results.length?results.map((o,i)=><button id={`cmd-opt-${i}`} role="option" aria-selected={i===cursor} tabIndex={-1} className={i===cursor?"is-active":""} onMouseEnter={()=>setCursor(i)} onClick={()=>go(o.path)} key={o.path}><span><strong>{o.label}</strong><small>{o.meta}</small></span><ArrowUpRight size={18} aria-hidden="true"/></button>):<p role="status">Nenhuma transmissão encontrada.</p>}</div>
  <div className="cmd-hint">↑ ↓ NAVEGAR · ENTER PARA ABRIR <span>ESC PARA FECHAR</span></div></motion.div></motion.div>}</AnimatePresence>
 </>
}
