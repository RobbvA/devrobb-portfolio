// src/app/layout.js
import "./globals.css";
import Providers from "./providers";
import Nav, { NAV_BOTTOM_HEIGHT } from "./components/Nav";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ backgroundColor: "#0d0d0d", color: "#FFFCDD" }}>
        <Providers>
          <Nav />
          <main
            style={{
              minHeight: "100dvh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ paddingBottom: "var(--bottom-nav-h, 0px)" }}>
              {children}
              <Footer />
            </div>
          </main>
        </Providers>

        {/* Houd content/footer vrij van de mobile bottom-nav */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --bottom-nav-h: 0px; }
              @media (max-width: 1023.98px) {
                :root { --bottom-nav-h: ${NAV_BOTTOM_HEIGHT}; }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
