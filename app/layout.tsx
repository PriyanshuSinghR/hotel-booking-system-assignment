import "./globals.css";

export const metadata = {
  title: "Hotel Reservation System",
  description: "Smart hotel room allocation system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
