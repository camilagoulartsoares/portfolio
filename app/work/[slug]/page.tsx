import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import {ArrowLeft,ArrowUpRight,ArrowRight} from "lucide-react";
import {asset,site,works} from "@/content/site";
import {ProjectArtwork} from "@/components/ProjectArtwork";
import {Footer} from "@/components/Footer";

export const dynamicParams=false;
export function generateStaticParams(){return works.map(w=>({slug:w.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
 const {slug}=await params;const w=works.find(p=>p.slug===slug);
 if(!w)return {title:"Projeto não encontrado"};
 return {title:`${w.title} — ${w.subtitle}`,description:w.short,openGraph:{title:`${w.title} — ${w.subtitle}`,description:w.short,url:`${site.url}/work/${w.slug}/`}};
}
export default async function WorkDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;const w=works.find(p=>p.slug===slug);if(!w)notFound();
  const next=works[(works.indexOf(w)+1)%works.length];
  return <main><article className="case-study page-shell">
    <div className="page-topline"><Link href="/work" className="inline-flex items-center gap-2 hover:text-acid"><ArrowLeft size={15}/> VOLTAR À EXPOSIÇÃO</Link><span>CASE {w.number} / {String(works.length).padStart(3,"0")}</span></div>
    <div className="case-study-intro"><div className="case-study-pre"><span className="signal-dot"/> {w.status}</div><h1>{w.title}<span aria-hidden="true">°</span></h1><div className="case-study-sub"><h2>{w.subtitle}</h2><p>{w.short}</p></div></div>
    <div className="case-study-hero"><ProjectArtwork visual={w.visual}/><div className="case-study-stamp"><span>BEYOND / WORK</span><strong>{w.number}</strong></div></div>
    <div className="case-study-meta"><span>{w.code}</span><span>{w.category}</span><span>{w.year}</span></div>
    <section className="case-study-story"><div className="case-study-question"><span className="eyebrow">01 / THE PROBLEM</span><h2>O que precisava<br/><em>ser resolvido?</em></h2></div><p>{w.challenge}</p></section>
    <section className="case-study-process"><div className="case-study-process-title"><span className="eyebrow">02 / UNDER THE HOOD</span><h2>Decisões, não<br/>só código<span>.</span></h2></div><div className="case-study-steps">{w.approach.map((step,i)=><div className="case-study-step" key={step}><span>{String(i+1).padStart(2,"0")}</span><p>{step}</p><ArrowUpRight size={18}/></div>)}</div></section>
    <section className="case-study-outcome"><div><span className="eyebrow">03 / CURRENT STATUS</span><h2>O que este<br/><em>case demonstra.</em></h2></div><div><p>{w.impact}</p>
      {w.metrics?.length?<dl className="case-study-metrics">{w.metrics.map(m=><div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd><small>FONTE: {m.source}</small></div>)}</dl>:null}
      {w.learnings?.length?<ul className="case-study-learnings" aria-label="Aprendizados">{w.learnings.map(l=><li key={l}>{l}</li>)}</ul>:null}
      <span className="case-study-disclaimer">NOTA DE TRANSPARÊNCIA: {w.disclaimer}</span><div className="case-study-tech">{w.stack.map(s=><span key={s}>{s}</span>)}</div>
      {(w.links?.repo||w.links?.demo)?<div className="case-study-links">{w.links?.repo&&<a href={w.links.repo} target="_blank" rel="noopener noreferrer">REPOSITÓRIO <ArrowUpRight size={16}/></a>}{w.links?.demo&&<a href={w.links.demo} target="_blank" rel="noopener noreferrer">DEMO <ArrowUpRight size={16}/></a>}</div>:null}
    </div></section>
    {w.screenshots?.length?<section className="case-study-shots" aria-label="Capturas do projeto">{w.screenshots.map(s=>
      <img key={s.src} src={asset(s.src)} alt={s.alt} loading="lazy" decoding="async"/>)}</section>:null}
    <Link href={`/work/${next.slug}`} className="case-study-next"><div><span className="eyebrow">NEXT UNIVERSE / {next.number}</span><strong>{next.title}<span>.</span></strong></div><ArrowRight size={64}/></Link>
    <Link href="/contact" className="case-study-cta">IDEIAS COMPLEXAS PEDEM BOAS CONVERSAS. <ArrowUpRight size={20}/></Link>
  </article><Footer/></main>;
}
