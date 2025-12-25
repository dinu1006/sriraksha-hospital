"use client";
import "./header.css";

export default function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <span>24x7 Emergency</span>
        <span>📞 +91 97015 99982</span>
      </div>

      {/* MAIN HEADER */}
      <header className="main-header">
        <div className="logo">
          <img src="/logo.png" alt="Sri Raksha Hospital" />
          <span>Sri Raksha Hospital</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#departments">Departments</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#appointment" className="appointment-btn">
            Book Appointment
          </a>
        </div>
      </header>
    </>
  );
}

