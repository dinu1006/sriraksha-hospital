* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #ffffff;
  color: #222;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 60px;
  background: #0b5ed7;
  color: white;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.nav a {
  color: white;
  margin-left: 25px;
  text-decoration: none;
  font-weight: 500;
}

/* HERO */
.hero {
  background: linear-gradient(rgba(11,94,215,0.8), rgba(11,94,215,0.8)),
    url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3") center/cover;
  color: white;
  text-align: center;
  padding: 120px 20px;
}

.hero h1 {
  font-size: 44px;
  margin-bottom: 15px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 25px;
}

.hero button {
  background: white;
  color: #0b5ed7;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

/* SECTIONS */
.section {
  padding: 70px 60px;
  text-align: center;
}

.section h2 {
  margin-bottom: 20px;
  font-size: 32px;
}

.section p {
  max-width: 800px;
  margin: auto;
  font-size: 16px;
  line-height: 1.6;
}

.gray {
  background: #f4f6f9;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.card,
.doctor-card {
  background: white;
  padding: 25px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.doctor-card h3 {
  margin-bottom: 8px;
}

/* FOOTER */
.footer {
  background: #0b5ed7;
  color: white;
  text-align: center;
  padding: 15px;
}

/* MOBILE */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .nav {
    margin-top: 10px;
  }

  .hero h1 {
    font-size: 30px;
  }

  .section {
    padding: 50px 20px;
  }
}

