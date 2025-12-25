import Header from "./components/Header";
import "./components/header.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <script
  dangerouslySetInnerHTML={{
    __html: `
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.15 }
      );

      document.querySelectorAll("[data-animate]").forEach(el => {
        observer.observe(el);
      });
    `,
  }}
/>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
