import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

/*
  Pricing:
  - Three simple cards showing plan name, price and features.
  - Buttons link to contact.
*/

const plans = [
  { id: 1, name: "Starter", price: "$800", features: ["Landing page", "1 week support"] },
  { id: 2, name: "Pro", price: "$2,000", features: ["3 pages", "2 weeks support", "Performance"] },
  { id: 3, name: "Plus", price: "$4,000", features: ["Custom build", "Design system", "1 month support"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Container className="container-custom">
        <h2 className="mb-4">Pricing</h2>
        <Row>
          {plans.map(p => (
            <Col key={p.id} md={4} className="mb-3">
              <div className="card-min h-100 d-flex flex-column">
                <h3>{p.name}</h3>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>{p.price}</div>
                <ul style={{ marginTop: 12 }}>
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="mt-auto">
                  <a href="#contact" className="btn btn-light-outline">Choose</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
