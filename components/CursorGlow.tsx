"use client";
import { useEffect, useRef } from "react";
export function CursorGlow() {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;
    if (!el || window.matchMedia("(pointer:coarse)").matches) return;
    const move=(event:PointerEvent)=>{el.style.setProperty("--mx",`${event.clientX}px`);el.style.setProperty("--my",`${event.clientY}px`)};
    window.addEventListener("pointermove",move,{passive:true});
    return ()=>window.removeEventListener("pointermove",move);
  },[]);
  return <div className="cursor-glow" aria-hidden="true" ref={ref}/>;
}
