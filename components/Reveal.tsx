"use client";
import {motion,useReducedMotion} from "framer-motion";
export function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:42}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduced?0:.8,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
