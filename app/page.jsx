export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-inner">
            <h1>Sri Raksha Hospital</h1>
            <p className="hero-tagline">
              Ethical • Affordable • Advanced Healthcare
            </p>
            <p className="hero-sub">
              Comprehensive medical care with experienced doctors and modern facilities.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn primary">View Services</a>
              <a href="tel:+919701599982" className="btn secondary">
                Call +91 97015 99982
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <div className="why-container">
          <div className="why-image">
            <img src="/hospital.jpg" alt="Sri Raksha Hospital" />
          </div>
          <div className="why-content">
            <h2>Why Sri Raksha Hospital</h2>
            <p>
              Sri Raksha Hospital provides ethical, affordable and quality healthcare
              with a patient-first approach.
            </p>
            <ul>
              <li>✔ 24/7 Emergency Care</li>
              <li>✔ Experienced Medical Team</li>
              <li>✔ Modern Facilities</li>
              <li>✔ Personalized Treatment</li>
            </ul>
            <a href="tel:+919701599982" className="why-btn">Call Now</a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-container">
          <div className="trust-item"><h3>24×7</h3><p>Emergency</p></div>
          <div className="trust-item"><h3>10,000+</h3><p>Patients</p></div>
          <div className="trust-item"><h3>Expert</h3><p>Doctors</p></div>
          <div className="trust-item"><h3>Modern</h3><p>Facilities</p></div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="doctors">
        <h2 className="section-title">Our Doctors</h2>

        <div className="doctors-grid">
          <div className="doctor-card">
            <img src="/doctors/doctor1.jpg" alt="Doctor" />
            <div className="doctor-info">
              <h3>Dr. NAME 1</h3>
              <p>MD – General Medicine</p>
            </div>
          </div>

          <div className="doctor-card">
            <img src="/doctors/doctor2.jpg" alt="Doctor" />
            <div className="doctor-info">
              <h3>Dr. NAME 2</h3>
              <p>MS – Obstetrics & Gynecology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Need Medical Assistance?</h2>
        <a href="tel:+919701599982" className="cta-btn">
          📞 +91 97015 99982
        </a>
      </section>
    </>
  );
}
