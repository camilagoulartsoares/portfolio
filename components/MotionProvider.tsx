"use client";
import {MotionConfig} from "framer-motion";

/**
 * reducedMotion="user": com prefers-reduced-motion ativo, o Framer Motion
 * desliga animações de transform/layout (órbitas, flutuações, parallax),
 * complementando a media query do globals.css que cobre as animações CSS.
 */
export function MotionProvider({children}:{children:React.ReactNode}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
