import type {Metadata} from "next";
import LabView from "./LabView";

export const metadata: Metadata = {
  title: "Laboratório",
  description: "Experimentos de interação: campo gravitacional arrastável, gerador de princípios e sintonizador de sinal.",
};

export default function LabPage() {
  return <LabView/>;
}
