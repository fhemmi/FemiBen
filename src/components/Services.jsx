
import React from "react";
import { FaPaintBrush, FaCode, FaLaptopCode } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "../styles/Services.css"; // 👈 Import external CSS file

const services = [
  {
    id: 1,
    title: "Web Development & Build",
    icon: <FaPaintBrush size={26} />,
    desc: "Design and develop fast, responsive, and scalable websites that bring ideas to life.",
  },
  {
    id: 2,
    title: "UI/UX & Visual Design",
    icon: <FaCode size={26} />,
    desc: "Create clean, modern interfaces focused on usability and brand consistency.",
  },
  {
    id: 3,
    title: "Optimization & Maintenance",
    icon: <FaLaptopCode size={26} />,
    desc: "Ensure your website performs smoothly, loads fast, and stays secure long-term.",
  },
];

export default function Services() {
  return (
    <ScrollReveal animation="fadeUp">
      <section id="services" className="services-section">
        <div className="container-custom">
          {/* Section Heading */}
          <h2>Services</h2>
          <p className="section-desc">
            I create digital experiences that merge design and development,  built
            to help creators and small brands stand out online.
          </p>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

