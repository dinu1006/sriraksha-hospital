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
