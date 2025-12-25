import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <section style={styles.hero}>
        <h2>Advanced Care. Trusted Healing.</h2>
        <p>
          Sri Raksha Hospital delivers ethical, affordable, and advanced
          healthcare with experienced doctors and modern facilities.
        </p>
        <button style={styles.cta}>Book Appointment</button>
      </section>

      <section style={styles.section}>
        <h3 style={styles.heading}>Our Services</h3>
        <div style={styles.grid}>
          <Card title="General Medicine" />
          <Card title="Gynecology & Obstetrics" />
          <Card title="Diabetology" />
          <Card title="24/7 Emergency Care" />
        </div>
      </section>

      <section style={{ ...styles.section, background: "#fff" }}>
        <h3 style={styles.heading}>Our Doctors</h3>
        <div style={styles.grid}>
          <Doctor name="Dr. Kavati Vijay" role="MD (General Medicine)" />
          <Doctor name="Dr. Divya Chandra" role="MS (OBG)" />
        </div>
      </section>

      <section style={styles.contact}>
        <h3>Need Medical Assistance?</h3>
        <p>📞 +91 XXXXXXXXXX</p>
      </section>

      <Footer />
    </>
  );
}

function Card({ title }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p>Comprehensive patient-focused care.</p>
    </div>
  );
}

function Doctor({ name, role }) {
  return (
    <div style={styles.card}>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}

const styles = {
  hero: {
    background:
      "linear-gradient(rgba(11,94,215,0.85), rgba(11,94,215,0.85)), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3') center/cover",
    color: "#fff",
    textAlign: "center",
    padding: "120px 20px"
  },
  cta: {
    marginTop: "25px",
    padding: "14px 30px",
    background: "#fff",
    color: "#0b5ed7",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  section: {
    padding: "70px 20px",
    maxWidth: "1100px",
    margin: "auto"
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    color: "#0b5ed7",
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px"
  },
  card: {
    background: "#f4f9ff",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.12)"
  },
  contact: {
    background: "#0b5ed7",
    color: "#fff",
    textAlign: "center",
    padding: "60px 20px"
  }
};
