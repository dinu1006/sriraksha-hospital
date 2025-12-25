export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-inner" data-animate>
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
{/* ================= WHY SRI RAKSHA ================= */}
<section className="why-hospital">
  <div className="why-container" data-animate>
    
    {/* IMAGE */}
    <div className="why-image">
      <img src="/hospital.jpg" alt="Sri Raksha Hospital Building" />
    </div>

    {/* CONTENT */}
    <div className="why-content">
      <h2>Why Sri Raksha Hospital</h2>

      <p>
        Sri Raksha Hospital is committed to providing ethical, affordable,
        and advanced medical care with a patient-first approach.
        Our focus is on quality treatment, timely diagnosis, and compassionate care.
      </p>

      <ul>
        <li>✔ 24/7 Emergency & Critical Care</li>
        <li>✔ Experienced & Dedicated Medical Team</li>
        <li>✔ Modern Facilities & Accurate Diagnosis</li>
        <li>✔ Personalized Care for Every Patient</li>
      </ul>

      <a href="tel:+919701599982" className="why-btn">
        Call Now
      </a>
    </div>

  </div>
</section>
{/* ================= TRUST STRIP ================= */}
<section className="trust-strip">
  <div className="trust-container" data-animate>

    <div className="trust-item">
      <h3>24×7</h3>
      <p>Emergency Care</p>
    </div>

    <div className="trust-item">
      <h3>10,000+</h3>
      <p>Patients Treated</p>
    </div>

    <div className="trust-item">
      <h3>Experienced</h3>
      <p>Medical Team</p>
    </div>

    <div className="trust-item">
      <h3>Modern</h3>
      <p>Facilities</p>
    </div>

  </div>
</section>

      {/* ================= DEPARTMENTS ================= */}
      <section className="departments">
        <h2 className="section-title" data-animate>
          Our Specialities
        </h2>

        <div className="departments-grid">
          <div className="dept-card" data-animate>
            <span className="dept-icon">🩺</span>
            <h3>General Medicine</h3>
            <p>Diabetes, Hypertension, Thyroid Disorders</p>
          </div>

          <div className="dept-card" data-animate>
            <span className="dept-icon">🫁</span>
            <h3>Respiratory Care</h3>
            <p>Asthma, COPD, TB, Pneumonia</p>
          </div>

          <div className="dept-card" data-animate>
            <span className="dept-icon">🫀</span>
            <h3>Cardiac Care</h3>
            <p>Chest Pain, Heart Attack, Stroke</p>
          </div>

          <div className="dept-card" data-animate>
            <span className="dept-icon">🩸</span>
            <h3>Nephrology</h3>
            <p>AKI, CKD & Kidney Disorders</p>
          </div>

          <div className="dept-card" data-animate>
            <span className="dept-icon">🤰</span>
            <h3>Maternity Care</h3>
            <p>Normal Delivery, VBAC, High Risk Pregnancy</p>
          </div>

          <div className="dept-card" data-animate>
            <span className="dept-icon">👩‍⚕️</span>
            <h3>Gynecology</h3>
            <p>PCOS, Infertility, Endometriosis</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services">
        <h2 className="section-title" data-animate>
          Our Medical Services
        </h2>

        <div className="services-grid">
          <div className="service-card" data-animate>
            <h3>General & Emergency Medicine</h3>
            <ul>
              <li>Diabetes</li>
              <li>Hypertension</li>
              <li>Thyroid Disorders</li>
              <li>Poisoning Cases</li>
              <li>Snake Bite & Scorpion Sting</li>
            </ul>
          </div>

          <div className="service-card" data-animate>
            <h3>Respiratory Care</h3>
            <ul>
              <li>Asthma</li>
              <li>COPD</li>
              <li>Tuberculosis</li>
              <li>Pleural Effusion</li>
              <li>Pneumonia</li>
            </ul>
          </div>

          <div className="service-card" data-animate>
            <h3>Kidney & Critical Care</h3>
            <ul>
              <li>AKI (Acute Kidney Injury)</li>
              <li>CKD</li>
              <li>Kidney Related Issues</li>
            </ul>
          </div>

          <div className="service-card" data-animate>
            <h3>Cardiac & Neuro Care</h3>
            <ul>
              <li>Chest Pain</li>
              <li>Myocardial Infarction</li>
              <li>Stroke / CVA</li>
              <li>Paralysis</li>
            </ul>
          </div>

          <div className="service-card" data-animate>
            <h3>Maternity & Gynecology</h3>
            <ul>
              <li>Infertility</li>
              <li>PCOS</li>
              <li>Endometriosis</li>
              <li>Normal Delivery & VBAC</li>
              <li>LSCS & High Risk Pregnancy</li>
              <li>Preeclampsia & Eclampsia</li>
            </ul>
          </div>

          <div className="service-card" data-animate>
            <h3>Gynec Procedures & Infections</h3>
            <ul>
              <li>Tubectomy</li>
              <li>Hysterectomy</li>
              <li>NDVH</li>
              <li>White Discharge Issues</li>
              <li>Candidiasis</li>
              <li>Cervicitis</li>
            </ul>
          </div>
        </div>
      </section>
{/* ================= DOCTORS ================= */}
<section className="doctors">
  <h2 className="section-title" data-animate>
    Our Doctors
  </h2>

  <div className="doctors-grid">

    <div className="doctor-card" data-animate>
      <img src="/doctors/doctor1.jpg" alt="Doctor 1" />
      <div className="doctor-info">
        <h3>Dr. NAME 1</h3>
        <p>Specialization</p>
      </div>
    </div>

    <div className="doctor-card" data-animate>
      <img src="/doctors/doctor2.jpg" alt="Doctor 2" />
      <div className="doctor-info">
        <h3>Dr. NAME 2</h3>
        <p>Specialization</p>
      </div>
    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="cta-section" data-animate>
        <h2>Need Medical Assistance?</h2>
        <p>Call us now for appointments and emergency care</p>
        <a href="tel:+919701599982" className="cta-btn">
          📞 +91 97015 99982
        </a>
      </section>

      {/* ================= STICKY BUTTONS ================= */}
      <div className="sticky-buttons">
        <a href="tel:+919701599982" className="sticky-call">
          📞
        </a>
        <a
          href="https://wa.me/919701599982"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-whatsapp"
        >
          💬
        </a>
      </div>
    </>
  );
}
