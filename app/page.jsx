export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-inner">
            <h1>Sri Raksha Hospital</h1>

            <p className="hero-tagline">
              Ethical • Affordable • Advanced Healthcare
            </p>

            <p className="hero-sub">
              Comprehensive medical care with experienced doctors, modern
              facilities, and 24/7 emergency services.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn primary">
                View Services
              </a>
              <a href="tel:+919701599982" className="btn secondary">
                Call +91 97015 99982
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEPARTMENTS (SHORT, VISUAL) ================= */}
      <section className="departments">
        <h2 className="section-title">Our Specialities</h2>

        <div className="departments-grid">
          <div className="dept-card">
            <span className="dept-icon">🩺</span>
            <h3>General Medicine</h3>
            <p>Diabetes, Hypertension, Thyroid Disorders</p>
          </div>

          <div className="dept-card">
            <span className="dept-icon">🫁</span>
            <h3>Respiratory Care</h3>
            <p>Asthma, COPD, TB, Pneumonia</p>
          </div>

          <div className="dept-card">
            <span className="dept-icon">🫀</span>
            <h3>Cardiac Care</h3>
            <p>Chest Pain, Heart Attack, Stroke</p>
          </div>

          <div className="dept-card">
            <span className="dept-icon">🩸</span>
            <h3>Nephrology</h3>
            <p>AKI, CKD & Kidney Disorders</p>
          </div>

          <div className="dept-card">
            <span className="dept-icon">🤰</span>
            <h3>Maternity Care</h3>
            <p>Normal Delivery, VBAC, High Risk Pregnancy</p>
          </div>

          <div className="dept-card">
            <span className="dept-icon">👩‍⚕️</span>
            <h3>Gynecology</h3>
            <p>PCOS, Infertility, Endometriosis</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES (ONLY ONCE) ================= */}
      <section id="services" className="services">
        <h2 className="section-title">Our Medical Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>General & Emergency Medicine</h3>
            <ul>
              <li>Diabetes</li>
              <li>Hypertension</li>
              <li>Thyroid Disorders</li>
              <li>Poisoning Cases</li>
              <li>Snake Bite & Scorpion Sting</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Respiratory Care</h3>
            <ul>
              <li>Asthma</li>
              <li>COPD</li>
              <li>Tuberculosis</li>
              <li>Pleural Effusion</li>
              <li>Pneumonia</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Kidney & Critical Care</h3>
            <ul>
              <li>AKI (Acute Kidney Injury)</
