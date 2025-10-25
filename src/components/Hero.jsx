

import React from "react";
import { motion } from "framer-motion";
import myImg from "../assets/FemiEben0.jpg";
import ScrollReveal from "./ScrollReveal";
import "../styles/Hero.css"; // 👈 Import your external stylesheet

export default function Hero() {
  return (
    <ScrollReveal animation="fadeUp" delay={0.4}>
      <section id="hero" className="hero-section section">
        <div className="container-custom">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <motion.div
              className="col-lg-6"
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="hero-card">
                <h1>
                  Hi, I’m <span>FemiBen</span>.
                </h1>
                <p>
                  I build fast, beautiful, and functional websites for brands and businesses that value great design and performance.
Studio-level design, thoughtful development.. delivered on time
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="hero-btn-primary">
                    View Projects
                  </a>
                  <a href="#contact" className="hero-btn-outline">
                    Let’s Talk
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="col-lg-6 text-lg-end mt-4 mt-lg-0 d-flex justify-content-center"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={myImg}
                alt="FemiBen portrait"
                className="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
