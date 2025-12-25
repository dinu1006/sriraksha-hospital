import "./globals.css";

export const metadata = {
  title: "Sri Raksha Hospital",
  description: "Advanced Healthcare with Compassion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
