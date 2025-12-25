export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">Sri Raksha Hospital</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Departments</a>
          <a href="#">Doctors</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Advanced Healthcare with Compassion</h1>
        <p>Trusted multi-speciality care for your family</p>
        <button>Book Appointment</button>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Sri Raksha Hospital</h2>
        <p>
          Sri Raksha Hospital is committed to delivering ethical, affordable,
          and advanced healthcare with modern infrastructure and experienced doctors.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="section gray">
        <h2>Our Departments</h2>
        <div className="cards">
          {[
            "General Medicine",
            "Diabetology",
            "Gynecology",
            "Pediatrics",
            "Emergency Care",
            "Diagnostics",
          ].map((dept) => (
            <div className="card" key={dept}>{dept}</div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section">
        <h2>Our Doctors</h2>
        <div className="cards">
          <div className="card">
            <h3>Dr. Kavati Vijay</h3>
            <p>MD – General Medicine</p>
            <p>Consultant Physician & Diabetologist</p>
          </div>
          <div className="card">
            <h3>Dr. Divya Chandra</h3>
            <p>MS – Obstetrics & Gynecology</p>
            <p>Infertility Specialist</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Sri Raksha Hospital. All Rights Reserved.
      </footer>
    </>
  );
}
