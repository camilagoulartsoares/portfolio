import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {Footer} from "@/components/Footer";

export const metadata = {title: "Sinal perdido"};

export default function NotFound() {
  return <main>
    <section className="not-found-page page-shell">
      <div className="page-topline"><span>404 / SIGNAL LOST</span><span>THIS UNIVERSE DOES NOT EXIST (YET)</span></div>
      <h1>SINAL<br/><em>PERDIDO.</em></h1>
      <p>A rota que você procurou não existe ou mudou de órbita. Use o menu, ou pressione Ctrl/⌘ + K para buscar.</p>
      <Link className="text-link" href="/">VOLTAR AO PORTAL <ArrowUpRight size={18}/></Link>
    </section>
    <Footer/>
  </main>;
}
