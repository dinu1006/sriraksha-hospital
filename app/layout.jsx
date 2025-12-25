import "./globals.css";

export const metadata = {
  title: "Sri Raksha Hospital",
  description: "Ethical, Affordable & Advanced Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="main-header">
          <div className="header-container">
            <div className="logo">
              <span>Sri Raksha Hospital</span>
            </div>

            <nav className="nav-menu">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#departments">Departments</a>
              <a href="#doctors">Doctors</a>
              <a href="#contact" className="btn-appointment">
                Book Appointment
              </a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
