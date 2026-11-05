import Link from "next/link";
import {ArrowUpRight,ArrowDownRight} from "lucide-react";
import {Reveal} from "@/components/Reveal";
import {Footer} from "@/components/Footer";
export const metadata={title:"Manifesto"};
export default function Manifesto(){return <main>
<section className="chapter-intro manifesto-intro">
  <div className="chapter-top"><span className="eyebrow">01 / O PENSAMENTO</span><span className="eyebrow">ENGINEERING WITH INTENTION</span></div>
  <Reveal><h1 className="manifesto-title">SISTEMAS<br/><span>COM</span><br/><em>SENTIDO.</em></h1></Reveal>
  <div className="manifesto-side-text"><span className="signal-dot"/> FULL STACK / MAIS DE 4 ANOS <p>Entre o que o produto precisa e o que a tecnologia permite, existe o trabalho de construir a ponte certa.</p></div>
  <div className="manifesto-bottom"><span>01 — 06</span><ArrowDownRight/></div>
</section>
<section className="manifesto-statement section-frame"><Reveal><p className="eyebrow mb-8">[ MEU PONTO DE PARTIDA ]</p><p className="statement-text">Gosto de problemas que pedem mais do que código. <span>Pedem entendimento, arquitetura, colaboração e escolhas responsáveis.</span></p></Reveal></section>
<section className="section-frame manifesto-parts"><div className="mb-14 flex justify-between"><span className="eyebrow">O QUE ORIENTA MEU TRABALHO</span><span className="eyebrow">03 PRINCÍPIOS</span></div>
<div className="manifesto-principles">
 <Reveal><article><span className="principle-num">01 / INVESTIGAR</span><h2>Entender<br/><em>antes.</em></h2><p>O problema real não é sempre o primeiro requisito. Começo pela lógica de negócio, pelas dependências e por quem usa a solução.</p></article></Reveal>
 <Reveal delay={.08}><article><span className="principle-num">02 / CONSTRUIR</span><h2>Projetar<br/><em>com rigor.</em></h2><p>Uma solução precisa funcionar hoje sem se tornar um obstáculo amanhã. Legibilidade, integridade e segurança também fazem parte da entrega.</p></article></Reveal>
 <Reveal delay={.15}><article><span className="principle-num">03 / EVOLUIR</span><h2>Melhorar<br/><em>sempre.</em></h2><p>Performance, manutenção e experiência importam depois que a funcionalidade entra no ar. Engenharia é trabalho contínuo.</p></article></Reveal>
</div></section>
<section className="manifesto-final section-frame"><Reveal><span className="eyebrow">NEXT TRANSMISSION</span><h2>Minha trajetória<br/>não é uma linha reta.<br/><span>É evolução.</span></h2><Link className="text-link" href="/journey">EXPLORAR TRAJETÓRIA <ArrowUpRight/></Link></Reveal></section>
<Footer/></main>}
