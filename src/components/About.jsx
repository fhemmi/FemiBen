

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SiJavascript } from 'react-icons/si';
import ScrollReveal from "./ScrollReveal";
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  // FaJa,
  FaCss3Alt,
  FaNodeJs,
  FaBolt,
} from "react-icons/fa";
import "../styles/About.css"; // 👈 Import external CSS

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, 90]),
    { stiffness: 100, damping: 20 }
  );
  const rotateRight = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-90, 0, -90]),
    { stiffness: 100, damping: 20 }
  );
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  const skills = [
     { name: "HTML", icon: <FaHtml5 size={22} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={22} color="#1572B6" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={22} color="#7952B3" /> },
    { name: "React", icon: <FaReact size={22} color="#61DBFB" /> },
     { name: "Javascript", icon: <SiJavascript size={22} color="#1572B6" /> },
    { name: "Node.js", icon: <FaNodeJs size={22} color="#3C873A" /> },
    // { name: "Javascript", icon: <SiJavascript size={22} color="#1572B6" /> },
    // { name: "Node.js", icon: <FaNodeJs size={22} color="#3C873A" /> },
    // { name: "Performance", icon: <FaBolt size={22} color="#f5b300" /> },
  ];

  return (
    <ScrollReveal animation="fadeUp" delay={0.4}>
      <section id="about" ref={ref} className="about-section">
        <div className="about-container">
          {/* Left Page */}
          <motion.div
            className="about-left"
            style={{
              rotateY: isMobile ? 0 : rotateLeft,
              opacity: isMobile ? 1 : opacity,
            }}
          >
            <h2>About Me</h2>
            <p>
              I'm a <strong>web developer and designer</strong> passionate about
              crafting digital experiences that are elegant and human-centered.
            </p>
            <p>
         I combine smart design with solid development to craft websites that not only look great but help brands and businesses grow and connect meaningfully with their audiences.

Whether it’s a personal brand, startup, or established company, I focus on clean design, speed, and usability...  turning ideas into fast, reliable, and engaging web experiences.
            </p>
            <div className="about-focus">
              <strong>Current Focus:</strong> Building modern, fast websites and
              webapps.
            </div>
          </motion.div>

          {/* Right Page */}
          <motion.div
            className="about-right"
            style={{
              rotateY: isMobile ? 0 : rotateRight,
              opacity: isMobile ? 1 : opacity,
            }}
          >
            <h3>Skills & Tools</h3>
            <div className="skills-grid">
              {skills.map((s) => (
                <motion.div key={s.name} whileHover={{ scale: 1.05 }} className="skill-card">
                  <div>{s.icon}</div>
                  <span>{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}
