import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ScrollReveal({ children, delay = 0, animation = "fadeUp" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, delay } },
    },
    bookOpen: {
      hidden: { rotateY: 90, opacity: 0, transformOrigin: "left" },
      visible: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 1.2, delay, ease: "easeOut" },
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants[animation]}>
      {children}
    </motion.div>
  );
}
