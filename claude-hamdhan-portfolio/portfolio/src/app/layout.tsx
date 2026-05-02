import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Muhammed Hamdhan | Software Engineering & IT Administrator",
  description: "Portfolio of Muhammed Hamdhan — Software Engineering Undergraduate, IT Administrator, and founder of RH Solution. Building smart solutions with modern technology.",
  keywords: ["Software Engineer", "IT Administrator", "Laravel", "IoT", "Web Development", "AI", "Sri Lanka", "RH Solution"],
  authors: [{ name: "Muhammed Hamdhan" }],
  openGraph: {
    title: "Muhammed Hamdhan | Software Engineering & IT Administrator",
    description: "Building smart solutions with modern technology",
    type: "website",
    locale: "en_US",
    url: "https://muhammedhamdhan.com",
    siteName: "Muhammed Hamdhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Hamdhan | Software Engineering",
    description: "Building smart solutions with modern technology",
  },
  robots: {
    index: true,
    follow: true,
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#020409" />
      </head>
      <body className="antialiased" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        {children}
      </body>
    </html>
  );
}