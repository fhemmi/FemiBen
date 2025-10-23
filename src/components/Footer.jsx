import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div>© {new Date().getFullYear()} FemiBen</div>
      </div>
    </footer>
  );
}
