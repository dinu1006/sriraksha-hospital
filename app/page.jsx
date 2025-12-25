export default function Home() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Advanced Healthcare with Compassion</h1>
        <p>
          Ethical, affordable, and advanced medical care for your family.
        </p>
        <a href="tel:+919701599982" className="hero-btn">
          Call +91 97015 99982
        </a>
      </section>
{/* DEPARTMENTS SECTION */}
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
      <p>PCOS, Infertility, Hysterectomy</p>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Sri Raksha Hospital</h2>
        <p>
          Sri Raksha Hospital is committed to providing comprehensive
          healthcare with experienced doctors, modern facilities,
          and patient-centric care.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section gray">
        <h2>Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>General & Emergency Care</h3>
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
              <li>Asthma & COPD</li>
              <li>Respiratory Illness</li>
              <li>Tuberculosis</li>
              <li>Pleural Effusion</li>
              <li>Pneumonia</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Kidney & Critical Care</h3>
            <ul>
              <li>AKI (Acute Kidney Injury)</li>
              <li>CKD</li>
              <li>Kidney Related Issues</li>
              <li>Chest Pain</li>
              <li>APD</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Cardiac & Neuro Care</h3>
            <ul>
              <li>Myocardial Infarction</li>
              <li>Stroke / CVA</li>
              <li>Paralysis</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Maternity & Gynecology</h3>
            <ul>
              <li>Infertility</li>
              <li>PCOS</li>
              <li>Endometriosis</li>
              <li>Normal Delivery & VBAC</li>
              <li>LSCS & High-Risk Pregnancies</li>
              <li>Preeclampsia & Eclampsia</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Gynec Procedures & Infections</h3>
            <ul>
              <li>Tubectomy</li>
              <li>Hysterectomy</li>
              <li>NDVH</li>
              <li>White & Vaginal Discharges</li>
              <li>Candidiasis</li>
              <li>Cervicitis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>For appointments and emergencies</p>
        <a href="tel:+919701599982" className="contact-btn">
          📞 +91 97015 99982
        </a>
      </section>

    </>
  );
}
