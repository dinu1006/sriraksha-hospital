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
            <span>📞 +91 97015 99982</span>
            <span>Mon – Sun : 24 Hours</span>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header className="main-header">
          <div className="header-inner">
            <div className="logo">
              Sri Raksha <span>Hospital</span>
            </div>

            <nav className="nav-links">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact" className="cta-btn">Call Now</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 Sri Raksha Hospital. All Rights Reserved.</p>
        </footer>

      </body>
    </html>
  );
}
