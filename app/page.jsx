export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header>
        <h1>Sri Raksha Hospital</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <div className="hero">
        <h2>Advanced Healthcare with Compassion</h2>
        <p>
          Ethical, affordable and advanced healthcare with experienced doctors
          and modern infrastructure.
        </p>
        <button>Book Appointment</button>
      </div>

      {/* SERVICES */}
      <section id="services">
        <h2>Our Medical Services</h2>
        <div className="services">

          <div className="service-card">
            <h3>General Medicine</h3>
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
              <li>Tuberculosis</li>
              <li>Pneumonia</li>
              <li>Pleural Effusion</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Kidney & Critical Care</h3>
            <ul>
              <li>AKI & CKD</li>
              <li>Kidney Related Issues</li>
              <li>Dialysis Support</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Cardiac & Neuro</h3>
            <ul>
              <li>Chest Pain</li>
              <li>Myocardial Infarction</li>
              <li>Stroke / CVA</li>
              <li>Paralysis</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Maternity & Gynecology</h3>
            <ul>
              <li>Infertility & PCOS</li>
              <li>Normal Delivery & VBAC</li>
              <li>LSCS & High-Risk Pregnancy</li>
              <li>Preeclampsia & Eclampsia</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Gynec Procedures</h3>
            <ul>
              <li>Hysterectomy</li>
              <li>Tubectomy</li>
              <li>NDVH</li>
              <li>Candidiasis & Cervicitis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors">
        <h2>Our Doctors</h2>
        <div className="doctors">

          <div className="doctor-card">
            <img src="/doctors/vijay.jpg" alt="Dr Kavati Vijay" />
            <h4>Dr. Kavati Vijay</h4>
            <p>MD – General Medicine</p>
            <p>Diabetologist</p>
          </div>

          <div className="doctor-card">
            <img src="/doctors/divya.jpg" alt="Dr Divya Chandra" />
            <h4>Dr. Divya Chandra</h4>
            <p>MS – Obstetrics & Gynecology</p>
            <p>Infertility Specialist</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <p>📞 +91 97015 99982</p>
        <p>© 2025 Sri Raksha Hospital. All Rights Reserved.</p>
      </footer>
    </>
  );
}
