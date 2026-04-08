import "@styles/globals.css";
import { Metadata, Viewport } from "next";
import { BASE_URL, SITE_NAME, GOOGLE_VERIFICATION_CODE } from "@config/env";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  // ─── Basic Settings ─────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Clear description of your site in up to 160 characters. What you offer and why the user should click.",
  keywords: [],
  authors: [{ name: "Your Name or Company", url: "/" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",

  // ─── Canonical URLs and hreflang ───────────────────────────
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
    },
  },

  // ─── Open Graph (Facebook, LinkedIn, WhatsApp…) ──────────
  openGraph: {
    title: "Catchy title for sharing",
    description:
      "Link preview text. Can be the same as description or more engagement-focused.",
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/imgs/og-image.jpg", // 1200x630px, JPG or PNG
        width: 1200,
        height: 630,
        alt: "Accessible description of the preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ─── Twitter / X (also used by Slack, Discord…) ─────
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Short tagline`,
    description: "Short description for the Twitter/X card.",
    images: [
      {
        url: "/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accessible description of the image",
      },
    ],
    // creator: "@your_user", // optional: your @ on X
  },

  // ─── Indexing ───────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,    // no limit on video preview
      "max-image-preview": "large", // large image in results
      "max-snippet": -1,          // unlimited text snippet
    },
  },

  // ─── Icons ───────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png", // 180x180px
  },

  // ─── PWA ───────────────────────────────────────────────
  manifest: "/icons/site.webmanifest",

  // ─── Property Verification ──────────────────────────
  verification: {
    google: GOOGLE_VERIFICATION_CODE,
  },

  // ─── Windows / Metro ─────────────────────────────────────
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-TileImage": "/icons/mstile-144x144.png",
    "format-detection": "telephone=no, date=no, email=no, address=no"
  },

  // ─── Categorization ───────────────────────────────────────
  classification: "Your classification", // e.g.: Technology, Health, Education…
  category: "Your category",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
