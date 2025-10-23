
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CustomNavbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setExpanded(false); // close navbar on mobile
    }
  };

  // Scroll to top for home/femiben
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="py-3"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
      variant="dark"
    >
      <Container
        className={`align-items-center ${
          isMobile ? "justify-content-between" : "justify-content-between"
        }`}
      >
        {isMobile ? (
          // -------- MOBILE VIEW --------
          <>
            {/* Left: Brand */}
            <Navbar.Brand
              href="#home"
              onClick={scrollToTop}
              className="fw-bold fs-5 cursor-pointer text-light"
            >
              FemiBen
            </Navbar.Brand>

            {/* Middle: Projects */}
            <Nav.Link
              href="#projects"
              className="text-light fw-semibold"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
            >
              Projects
            </Nav.Link>

            {/* Right: Hire Me */}
            <Button
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              style={{
                background: "var(--accent, #00aeef)",
                border: "none",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "0.9rem",
              }}
            >
              Hire Me
            </Button>
          </>
        ) : (
          // -------- DESKTOP VIEW --------
          <>
            {/* Left: Brand */}
            <Navbar.Brand
              href="#home"
              onClick={scrollToTop}
              className="fw-bold fs-4 cursor-pointer"
            >
              FemiBen
            </Navbar.Brand>

            {/* Toggle for smaller screens */}
            <Navbar.Toggle
              aria-controls="main-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />

            {/* Middle Nav Items */}
            <Navbar.Collapse id="main-nav" className="justify-content-center">
              <Nav className="align-items-center">
                <Nav.Link
                  href="#home"
                  className="mx-3 text-light"
                  onClick={scrollToTop}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#services"
                  className="mx-3 text-light"
                  onClick={(e) => handleSmoothScroll(e, "#services")}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className="mx-3 text-light"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                >
                  Projects
                </Nav.Link>

                {/* Dropdown */}
                {/* <div className="nav-item dropdown mx-3">
                  <span
                    className="nav-link dropdown-toggle text-light"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </span>
                  <ul className="dropdown-menu bg-dark border-0 shadow-lg mt-2">
                    <li>
                      <a
                        href="#about"
                        className="dropdown-item text-light"
                        onClick={(e) => handleSmoothScroll(e, "#about")}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        className="dropdown-item text-light"
                        onClick={(e) =>
                          handleSmoothScroll(e, "#testimonials")
                        }
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="dropdown-item text-light"
                        onClick={(e) => handleSmoothScroll(e, "#contact")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div> */}
              </Nav>
            </Navbar.Collapse>

            {/* Right: Hire Me */}
            <Button
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              style={{
                background: "#000",
                border: "none",
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: "8px",
              }}
            >
              Hire Me
            </Button>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
