
import React from "react";
import "../styles/Testimonials.css";
import johnImg from "../assets/maletest.png";
import ngoziImg from "../assets/testimgirl.png";
import sarahImg from "../assets/maletest.png";
import michaelImg from "../assets/maletest.png";

const quotes = [
  {
    name: "Oshomo Oforomeh",
    role: "Tripzapp",
    text: "Working with Femi on Tripzapp was a great experience. He contributed thoughtful improvements to the frontend and paid strong attention to design consistency.",
    avatar: johnImg,
  },
  {
    name: "Jerry Nwobodo",
    role: "Presibo",
    text: "His collaborative spirit and quick problem-solving approach helped streamline our health care experience.",
    avatar: sarahImg,
  },
  {
    name: "Alabi Anu",
    role: "Entrepreneur",
    text: "I introduced Femi to brand to help revamp their website, and the results exceeded expectations. The communication was clear and the delivery was fast, .",
    avatar: ngoziImg,
  },
  {
    name: "Opeyemi Todowede",
    role: "Mausight",
    text: "Working with Femi was really cool. He turned our rough concept into a clean, fast, and modern website that perfectly fits our audience.",
    avatar: michaelImg,
  },
];

export default function Testimonials() {
  const doubledQuotes = [...quotes, ...quotes];

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <div className="testimonial-header">
          <div className="muted">Client Testimonials</div>
          <h2>What They Say</h2>
        </div>

        <div className="testimonial-scroll">
          <div className="testimonial-track">
            {doubledQuotes.map((q, i) => (
              <div className="test-card" key={i}>
                <div className="star-row">★★★★★</div>
                <p>{q.text}</p>
                <div className="person">
                  <img src={q.avatar} alt={q.name} />
                  <div>
                    <div className="name">{q.name}</div>
                    <div className="role">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
