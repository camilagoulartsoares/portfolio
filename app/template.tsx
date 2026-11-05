"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Template({children}:{children:React.ReactNode}) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced?false:{opacity:0, y:22, filter:"blur(7px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}}
    transition={{duration:reduced?0:0.65, ease:[0.22,1,0.36,1]}}>{children}</motion.div>;
}
