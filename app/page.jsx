export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(rgba(11,94,215,0.8), rgba(11,94,215,0.8)), url('/hospital/building.jpg') center/cover",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          Sri Raksha Hospital
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "auto" }}>
          Ethical, Affordable & Advanced Healthcare with Compassion
        </p>
      </section>

      {/* ABOUT */}
      <section className="container">
        <h2 className="section-title">About Sri Raksha Hospital</h2>
        <p style={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}>
          Sri Raksha Hospital is committed to delivering ethical, affordable, and
          advanced healthcare with modern infrastructure and experienced
          doctors. We focus on patient-centric treatment with compassion and
          integrity.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="container">
        <h2 className="section-title">Our Departments</h2>

        <div className="card-grid">
          {[
            "General Medicine",
            "Diabetology",
            "Gynecology",
            "Pediatrics",
            "Emergency Care",
            "Diagnostics",
          ].map((dept) => (
            <div className="card" key={dept}>
              <h3>{dept}</h3>
              <p>
                Comprehensive care delivered by experienced specialists using
                modern medical facilities.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section className="container">
        <h2 className="section-title">Our Doctors</h2>

        <div className="card-grid">
          <div className="card">
            <img src="/doctors/dr-vijay.jpg" alt="Dr. Kavati Vijay" />
            <h3>Dr. Kavati Vijay</h3>
            <p>MD – General Medicine</p>
            <p>Consultant Physician & Diabetologist</p>
          </div>

          <div className="card">
            <img src="/doctors/dr-divya.jpg" alt="Dr. Divya Chandra" />
            <h3>Dr. Divya Chandra</h3>
            <p>MS – Obstetrics & Gynecology</p>
            <p>Infertility Specialist</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0b5ed7",
          color: "white",
          padding: "30px",
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        © 2025 Sri Raksha Hospital. All Rights Reserved.
      </footer>
    </>
  );
}
