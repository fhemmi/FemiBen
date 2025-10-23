

import React, { useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      });
      setStatus("sent");
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("error");
    }
  }

  function handleNewMessage() {
    setSubmitted(false);
    setStatus("");
  }

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="contact-title">Get in touch</h2>

        <div className="contact-layout">
          {/* Left info */}
          <div className="contact-left">
            <div className="contact-card">
              <div className="contact-subtitle">Let’s work together</div>
              <p className="contact-text">
                Tell me about your project and timeline. I will respond as soon
                as possible.
              </p>
              <div className="contact-location">
                <div>Location: Lagos, Nigeria</div>
              </div>

              {/* Social icons */}
              <div className="contact-socials">
                <a
                  href="https://wa.me/2348124023479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                  style={{ color: "#25D366" }}
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:femieben00@gmail.com"
                  className="contact-icon"
                  style={{ color: "#EA4335" }}
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="contact-right">
            <div className="contact-card">
              {!submitted ? (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input name="name" required />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" required />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows={5} required />
                  </div>

                  <div className="form-actions">
                    <button type="submit">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="contact-success">
                  <h3>✅ Message Sent Successfully!</h3>
                  <p>
                    Thanks for reaching out. I’ll get back to you as soon as
                    possible.
                  </p>
                  <button onClick={handleNewMessage}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
