export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Sri Raksha Hospital</h1>
      <nav>
        <a href="/" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>Services</a>
        <a href="#" style={styles.link}>Doctors</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: "#0b5ed7",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  logo: { fontSize: "22px" },
  link: { marginLeft: "20px", fontWeight: 500 }
};
