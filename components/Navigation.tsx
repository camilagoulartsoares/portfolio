"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useRef,useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {ArrowUpRight, Menu, X} from "lucide-react";
import {navigation} from "@/content/site";
import {CommandPalette} from "@/components/CommandPalette";

/** Normaliza "/work/" → "/work" (trailingSlash do export estático). */
function normalize(path:string){return path.length>1?path.replace(/\/+$/,""):path}

export function Navigation(){
  const path=normalize(usePathname()??"/");
  // O menu fica "aberto" apenas para a rota em que foi aberto: trocar de página o fecha sem efeito extra.
  const [openAt,setOpenAt]=useState<string|null>(null);const open=openAt===path;
  const setOpen=(next:boolean|((v:boolean)=>boolean))=>{const v=typeof next==="function"?next(open):next;setOpenAt(v?path:null)};
  const triggerRef=useRef<HTMLButtonElement>(null);const overlayRef=useRef<HTMLDivElement>(null);const wasOpen=useRef(false);
  useEffect(()=>{
    if(!open){
      if(wasOpen.current)triggerRef.current?.focus();
      wasOpen.current=false;return;
    }
    wasOpen.current=true;
    document.body.style.overflow="hidden";
    const first=window.setTimeout(()=>overlayRef.current?.querySelector<HTMLElement>("a[href]")?.focus(),60);
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==="Escape"){setOpenAt(null);return}
      if(e.key!=="Tab")return;
      // Mantém o foco entre o botão de fechar e os links do overlay.
      const focusables=[triggerRef.current,...Array.from(overlayRef.current?.querySelectorAll<HTMLElement>("a[href]")??[])].filter(Boolean) as HTMLElement[];
      if(!focusables.length)return;
      const firstEl=focusables[0],lastEl=focusables[focusables.length-1];
      if(e.shiftKey&&document.activeElement===firstEl){e.preventDefault();lastEl.focus()}
      else if(!e.shiftKey&&document.activeElement===lastEl){e.preventDefault();firstEl.focus()}
    };
    window.addEventListener("keydown",onKey);
    return ()=>{window.clearTimeout(first);document.body.style.overflow="";window.removeEventListener("keydown",onKey)};
  },[open]);
  const active=navigation.find(n=>n.href===path || (path.startsWith(n.href+"/") && n.href!=="/"))??navigation[0];
  return <>
    <header className="fixed top-0 z-50 flex h-[84px] w-full items-center justify-between border-b border-white/10 px-5 md:px-10 lg:px-14 backdrop-blur-xl bg-[#07070bcc]">
      <Link href="/" className="group flex items-center gap-3" aria-label="Camila Soares - início">
        <span className="brand-symbol" aria-hidden="true">C<span className="text-acid">/</span>S</span>
        <span className="hidden font-mono text-[10px] tracking-[.23em] text-white/50 sm:block" aria-hidden="true">CAMILA SOARES<br/>CREATIVE DEVELOPER</span>
      </Link>
      <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/50 md:flex" aria-live="polite">
        <span className="signal-dot"/> {active.index} / {active.label}
      </div>
      <div className="nav-right-actions"><CommandPalette/><button ref={triggerRef} onClick={()=>setOpen(s=>!s)} aria-label={open?"Fechar menu":"Abrir navegação"} aria-expanded={open} aria-controls="nav-overlay"
        className="nav-trigger group flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em]">
        <span aria-hidden="true">{open?"Fechar":"Explorar"}</span><span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition group-hover:bg-acid group-hover:text-ink">
        {open?<X size={18}/>:<Menu size={18}/>}</span>
      </button></div>
    </header>
    <AnimatePresence>
    {open&&<motion.div ref={overlayRef} id="nav-overlay" key="nav-overlay" role="dialog" aria-modal="true" aria-label="Navegação principal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.25}}
      className="nav-overlay fixed inset-0 z-40 overflow-y-auto pt-24">
      <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-[1480px] grid-cols-1 md:grid-cols-[1fr_.7fr]">
        <nav aria-label="Capítulos" className="flex flex-col justify-center px-6 py-12 md:px-14">
          {navigation.map((n,i)=><motion.div key={n.href} initial={{x:-40,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.045}}>
            <Link href={n.href} aria-current={active.href===n.href?"page":undefined} className={`nav-overlay-link ${active.href===n.href?"current":""}`} onClick={()=>setOpen(false)}><span>{n.index}</span><strong>{n.label}</strong><ArrowUpRight size={24} aria-hidden="true"/></Link>
          </motion.div>)}
        </nav>
        <aside className="relative hidden flex-col justify-end overflow-hidden border-l border-white/10 px-14 pb-20 md:flex">
          <div className="nav-visual"/><p className="eyebrow relative z-10">TRANSLATING COMPLEXITY INTO CLARITY.</p>
          <p className="relative z-10 mt-4 max-w-sm font-display text-4xl font-bold leading-[1.1]">Cada problema esconde uma possibilidade.</p>
          <p className="relative z-10 mt-9 font-mono text-xs text-white/50">DESIGN × ENGINEERING × PRODUCT</p>
        </aside>
      </div>
    </motion.div>}
    </AnimatePresence>
  </>;
}
