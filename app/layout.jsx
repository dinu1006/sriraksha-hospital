import "./globals.css";

export const metadata = {
  title: "Sri Raksha Hospital",
  description: "Advanced Healthcare with Compassion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* TOP INFO BAR */}
        <div className="top-bar">
          <div className="top-bar-inner">
            <span>24/7 Emergency Services</span>
            <span>📞 +91 9XXXXXXXXX</span>
            <span>🕒 Mon – Sun: 24 Hours</span>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header className="main-header">
          <div className="header-inner">

            <div className="logo">
              Sri Raksha <span>Hospital</span>
            </div>

            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#departments">Departments</a>
              <a href="#doctors">Doctors</a>
              <a href="#contact" className="cta-btn">Book Appointment</a>
            </nav>

          </div>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}
