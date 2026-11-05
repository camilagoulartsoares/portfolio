import type {Metadata} from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contato",
  description: "Vamos conversar sobre o próximo desafio.",
};

export default function ContactPage() {
  return <ContactView/>;
}
