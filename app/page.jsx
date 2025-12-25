"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      title: "Advanced Healthcare with Compassion",
      text: "Trusted multi-speciality care for your family",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      title: "Expert Doctors & Modern Facilities",
      text: "Quality treatment with experienced specialists",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580281657521-9b37e23c5b5f",
      title: "24/7 Emergency & Critical Care",
      text: "Always ready when your health matters most",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <h1>Sri Raksha Hospital</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Departments</a>
          <a href="#">Doctors</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO SLIDER */}
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].text}</p>
        </div>
      </div>

      {/* ABOUT */}
      <section>
        <h3 className="section-title">About Sri Raksha Hospital</h3>
        <p style={{ textAlign: "center", maxWidth: 900, margin: "auto" }}>
          Sri Raksha Hospital is committed to delivering ethical, affordable,
          and advanced healthcare with modern infrastructure and experienced
          doctors.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section>
        <h3 className="section-title">Our Departments</h3>
        <div className="cards">
          <div className="card">General Medicine</div>
          <div className="card">Diabetology</div>
          <div className="card">Gynecology</div>
          <div className="card">Pediatrics</div>
          <div className="card">Emergency Care</div>
          <div className="card">Diagnostics</div>
        </div>
      </section>

      {/* DOCTORS */}
      <section>
        <h3 className="section-title">Our Doctors</h3>
        <div className="cards">
          <div className="card">
            <strong>Dr. Kavati Vijay</strong><br />
            MD – General Medicine<br />
            Diabetologist
          </div>
          <div className="card">
            <strong>Dr. Divya Chandra</strong><br />
            MS – Obstetrics & Gynecology<br />
            Infertility Specialist
          </div>
        </div>
      </section>

      <footer>
        © 2025 Sri Raksha Hospital. All Rights Reserved.
      </footer>
    </>
  );
}
