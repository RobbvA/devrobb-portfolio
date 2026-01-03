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
              minWidth: 0, // critical for stable flex behavior across widths
            }}
          >
            {/* Global content shell: stabilizes layout between laptop and monitor */}
            <div style={{ paddingBottom: "var(--bottom-nav-h, 0px)" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  margin: "0 auto",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                {children}
                <Footer />
              </div>
            </div>
          </main>
        </Providers>

        {/* Keep content/footer clear of the mobile bottom-nav */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --bottom-nav-h: 0px; }
              @media (max-width: 1023.98px) {
                :root { --bottom-nav-h: ${NAV_BOTTOM_HEIGHT}; }
              }

              /* Optional: slightly more breathing room on larger screens */
              @media (min-width: 768px) {
                body { overflow-x: hidden; }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
