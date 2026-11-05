import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { CursorGlow } from "@/components/CursorGlow";
import { MotionProvider } from "@/components/MotionProvider";
import { asset, site } from "@/content/site";
import "./globals.css";

const syne = Syne({subsets:["latin"], variable:"--font-syne", display:"swap"});
const space = Space_Grotesk({subsets:["latin"], variable:"--font-space", display:"swap"});
const ibm = IBM_Plex_Mono({subsets:["latin"], weight:["400","500"], variable:"--font-ibm", display:"swap"});

const description = "Portfólio experimental de Camila Soares, desenvolvedora full stack. Engenharia, produto e criatividade além da interface.";

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {default: "Camila Soares — Beyond the Interface", template: "%s | Camila Soares"},
  description,
  icons: {icon: asset("favicon.svg")},
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Camila Soares — Beyond the Interface",
    title: "Camila Soares — Beyond the Interface",
    description,
    url: "./",
  },
  twitter: {card: "summary", title: "Camila Soares — Beyond the Interface", description},
};

export const viewport: Viewport = { themeColor: "#07070B", colorScheme: "dark" };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR" className={`${syne.variable} ${space.variable} ${ibm.variable}`}>
    <body className="bg-ink text-ivory font-sans antialiased">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <MotionProvider>
        <div className="noise" aria-hidden="true" />
        <CursorGlow />
        <Navigation />
        <div id="conteudo">{children}</div>
      </MotionProvider>
    </body>
  </html>;
}
