
import React, { useState } from "react";
import "../index.css";
import ScrollReveal from "./ScrollReveal";

const projects = [
   {
    id: 1,
    title: "Tripzapp",
    desc: "Tripzapp is an online travel experience platform that connects global travelers with local tours, activities, and safaris in Africa.",
    img: "./images/tripzapp.png",
    link: "https://tripzapp.com",
  },
    {
    id: 2,
    title: "Presibo",
    desc: "Presibo is a digital medical service that help patients get fast, smart, stress-free, affordable and quality medical care by leveraging on Artificial Intelligence.",
    img: "./images/presiboimg.png",
    link: "https://presibo.com",
  },
   {
    id: 3,
    title: "CrappoTech",
    desc: "A cryptocurency landing page website ",
    img: "./images/cryptoapp.png",
    link: "https://crappotech.netlify.app",
  },
 {
    id: 4,
    title: "Faithchurch",
    desc: "A church website",
    img: "./images/faithchurch.png",
    link: "https://churchwebs.netlify.app/",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <ScrollReveal animation="fadeUp" delay={0.4}>
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2>Projects</h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="view-all"
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            {showAll ? "Show less ↙" : "View all ↗"}
          </button>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((p, index) => (
            <ScrollReveal key={p.id} animation="fadeUp" delay={index * 0.2}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-image">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="project-content">
                  <h3>
                    {p.title} <span>↗</span>
                  </h3>
                  <p>{p.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
