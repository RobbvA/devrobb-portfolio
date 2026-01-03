// src/app/layout.js
import "./globals.css";
import Providers from "./providers";
import Nav, { NAV_BOTTOM_HEIGHT } from "./components/Nav";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Hard value based on your desktop sidebar visual width.
// If your Nav uses a different width, set this to match (e.g. 220px / 260px).
const DESKTOP_SIDENAV_WIDTH = "240px";

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
              minWidth: 0, // prevents flex overflow weirdness across widths
            }}
          >
            {/* Content area respects sidebar (desktop) + bottom-nav (mobile) */}
            <div style={{ paddingBottom: "var(--bottom-nav-h, 0px)" }}>
              <div
                style={{
                  width: "100%",
                  // Reserve space for the desktop sidebar so content doesn't "re-center" weirdly
                  paddingLeft: "var(--side-nav-w, 0px)",
                  paddingRight: "16px",
                  // Flex centers the max-width shell within the remaining content area
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Max-width shell only for page content */}
                <div style={{ width: "100%", maxWidth: "1100px", minWidth: 0 }}>
                  {children}
                </div>
              </div>

              {/* Footer should be full width (not clipped), but content stays aligned */}
              <div
                style={{
                  width: "100%",
                  paddingLeft: "var(--side-nav-w, 0px)",
                  paddingRight: "16px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", maxWidth: "1100px", minWidth: 0 }}>
                  <Footer />
                </div>
              </div>
            </div>
          </main>
        </Providers>

        {/* Keep content/footer clear of the mobile bottom-nav + reserve desktop sidebar width */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --bottom-nav-h: 0px; --side-nav-w: 0px; }

              @media (max-width: 1023.98px) {
                :root { --bottom-nav-h: ${NAV_BOTTOM_HEIGHT}; --side-nav-w: 0px; }
              }

              @media (min-width: 1024px) {
                :root { --bottom-nav-h: 0px; --side-nav-w: ${DESKTOP_SIDENAV_WIDTH}; }
              }

              body { overflow-x: hidden; }
            `,
          }}
        />
      </body>
    </html>
  );
}
