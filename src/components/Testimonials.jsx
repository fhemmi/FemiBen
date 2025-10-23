
import React from "react";
import "../styles/Testimonials.css";
import johnImg from "../assets/Maletest.png";
import ngoziImg from "../assets/testimgirl.png";
import sarahImg from "../assets/Maletest.png";
import michaelImg from "../assets/Maletest.png";

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
    text: "We work with a lot of freelancers, but Femi stands out. His design sense is clean and he’s reliable — he delivers what he promises, and quickly.",
    avatar: ngoziImg,
  },
  {
    name: "Opeyemi Todowede",
    role: "Mausight",
    text: "Working with Femi was really cool. He turned our rough concept into a clean, fast, and modern website that perfectly fits our audience. The communication was clear, the delivery was fast, and the results exceeded expectations.",
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
