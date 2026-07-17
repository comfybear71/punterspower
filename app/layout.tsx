import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ValuesRibbon } from "@/components/ValuesRibbon";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://punterspower.au"),
  title: {
    default: "Punter Power Australia | No One Left Behind",
    template: "%s | Punter Power Australia",
  },
  description:
    "Punter Power Australia — a community that grows together. Join for $10. No one left behind. We grow together.",
  icons: {
    icon: [{ url: "/assets/logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/assets/logo.jpg", type: "image/jpeg" }],
    shortcut: "/assets/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://punterspower.au",
    siteName: "Punter Power Australia",
    title: "Punter Power Australia | No One Left Behind",
    description:
      "Everyday Aussie punters growing together. Tools, community, transparent fund, and a mass media push — join for $10.",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Punter Power Australia logo — kangaroo, fist, PPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punter Power Australia | No One Left Behind",
    description:
      "Everyday Aussie punters growing together. Join for $10 at punterspower.au.",
    images: ["/assets/logo.jpg"],
  },
};

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem("ppa-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark"
      ? stored
      : prefersDark ? "dark" : "light";
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${oswald.variable} ${sourceSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <ValuesRibbon />
          <main className="flex-1">{children}</main>
          <Footer />
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
