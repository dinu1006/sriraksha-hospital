export default function Home() {
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

      <div className="hero">
        <h2>Advanced Healthcare with Compassion</h2>
        <p>Trusted multi-speciality care for your family</p>
      </div>

      <section>
        <h3 className="section-title">About Sri Raksha Hospital</h3>
        <p style={{ textAlign: "center", maxWidth: 900, margin: "auto" }}>
          Sri Raksha Hospital is committed to delivering ethical, affordable,
          and advanced healthcare with modern infrastructure and experienced
          doctors.
        </p>
      </section>

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

      <section>
        <h3 className="section-title">Our Doctors</h3>
        <div className="cards">
          <div className="card">
            <strong>Dr. Kavati Vijay</strong>
            <br />
            MD – General Medicine
            <br />
            Diabetologist
          </div>
          <div className="card">
            <strong>Dr. Divya Chandra</strong>
            <br />
            MS – Obstetrics & Gynecology
            <br />
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
