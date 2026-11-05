import type {Metadata} from "next";
import JourneyView from "./JourneyView";

export const metadata: Metadata = {
  title: "Trajetória",
  description: "Mais de quatro anos construindo software web: fundação, integração e complexidade.",
};

export default function JourneyPage() {
  return <JourneyView/>;
}
