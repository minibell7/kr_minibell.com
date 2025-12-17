import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleAdsense from "@/components/GoogleAdsense"; // Import AdSense
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mini-bell.com",
  description: "Showcase of my PWAs and Blog",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="naver-site-verification" content="fa698ed31519bfed3a947ef9bd307f879b4631a7" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2875879574828967" crossOrigin="anonymous"></script>
      </head>
      <body className={outfit.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYTPQ1ZR07"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XYTPQ1ZR07');
          `}
        </Script>

        <div className="background-gradient" />
        <div className="background-noise" />
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <ThemeToggle />
          <Header />
          <main className="container" style={{ minHeight: '80vh', paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
            {children}
            <GoogleAdsense slot="3688754480" />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
