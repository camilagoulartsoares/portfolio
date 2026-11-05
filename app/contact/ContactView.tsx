"use client";
import {useState} from "react";
import {ArrowUpRight,Copy,Check,Send} from "lucide-react";
import {site} from "@/content/site";
import {Footer} from "@/components/Footer";
export default function ContactView(){const [copied,setCopied]=useState(false);
 const email=site.email.trim();
 const copy=async()=>{const txt=email || "Olá, Camila! Conheci seu portfólio e gostaria de conversar sobre uma oportunidade.";try{await navigator.clipboard.writeText(txt);setCopied(true);window.setTimeout(()=>setCopied(false),2500)}catch{setCopied(false)}};
 return <main><section className="contact-page page-shell"><div className="page-topline"><span>06 / CONEXÃO</span><span>LET'S BUILD SOMETHING THAT MATTERS.</span></div>
 <div className="contact-signal" aria-hidden="true"><div className="contact-signal-ring"/><div className="contact-signal-ring r2"/><div className="contact-signal-ring r3"/><div className="contact-signal-core">↗</div></div>
 <div className="contact-center"><div className="contact-live"><span className="signal-dot"/> OPEN TO WHAT'S NEXT</div><h1>O PRÓXIMO<br/><em>DESAFIO?</em><br/><span>PODE SER NOSSO.</span></h1><p>Se existe uma ideia complexa, um produto para evoluir ou um problema que pede boas decisões, quero conhecer.</p>
 <div className="contact-actions">
 {email?<a className="contact-main-btn" href={`mailto:${email}?subject=Vamos%20conversar%20sobre%20uma%20oportunidade`}>ENVIAR UMA MENSAGEM <Send size={18}/></a>:<button className="contact-main-btn" onClick={copy}>{copied?"TEXTO COPIADO":"COPIAR CONVITE"} {copied?<Check size={18}/>:<Copy size={18}/>}</button>}
 {site.linkedin&&<a className="contact-outline-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowUpRight size={18}/></a>}
 {site.github&&<a className="contact-outline-btn" href={site.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={18}/></a>}
 </div>
 {!email&&process.env.NODE_ENV!=="production"&&<p className="contact-config-note">Personalize seu e-mail, LinkedIn e GitHub em <code>content/site.ts</code> antes de publicar.</p>}
 </div><div className="contact-bottom"><span>DESENVOLVEDORA FULL STACK · 4+ ANOS</span><span>END OF TRANSMISSION / BEGINNING OF SOMETHING NEW</span></div></section><Footer/></main>
}
