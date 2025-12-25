import "./globals.css";

export const metadata = {
  title: "Sri Raksha Hospital",
  description: "Sri Raksha Hospital – Advanced Care with Compassion"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
