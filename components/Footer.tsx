import Link from "next/link";
// Calculado no build (export estático); evita valor impuro durante o render.
const year=new Date().getFullYear();
export function Footer(){return <footer className="page-footer"><span>© {year} CAMILA SOARES</span><span>MADE OF LOGIC & CURIOSITY.</span><Link href="/contact">PRÓXIMA CONEXÃO ↗</Link></footer>}
