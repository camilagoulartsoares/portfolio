import type {Metadata} from "next";
import WorkView from "./WorkView";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Exposição interativa de cinco projetos — cases profissionais em evolução, projeto autoral e conceitos declarados como tal.",
};

export default function WorkPage() {
  return <WorkView/>;
}
