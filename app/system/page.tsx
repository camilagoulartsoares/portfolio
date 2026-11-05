import type {Metadata} from "next";
import SystemView from "./SystemView";

export const metadata: Metadata = {
  title: "Stack",
  description: "A stack de Camila Soares como ecossistema: lógica e serviços, interfaces, dados e entrega.",
};

export default function SystemPage() {
  return <SystemView/>;
}
