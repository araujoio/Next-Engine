
/**
 * Default page template
*/
export const pageTemplate = (name: string) => `
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${name}",
  description: "Specific description of this page in up to 160 characters.",
  alternates: {
    canonical: "/${name}",
  },
  openGraph: {
    title: "Catchy title for sharing this page",
    description: "Link preview text for this specific page.",
    images: [{ url: "/imgs/og-about.jpg", width: 1200, height: 630, alt: "..." }],
    url: "/${name}"
  },
  twitter: {
    card: "summary_large_image",
    title: "Catchy title for sharing this page",
    description: "Link preview text for this specific page.",
    images: [{ url: "/imgs/og-about.jpg", width: 1200, height: 630, alt: "..." }],
  },
};

export default function ${name}Page() {
  return (
    <main>
      <h1>${name}</h1>
    </main>
  )
}
`

/**
 * Default public layout template
*/
export const publicLayoutTemplate = () => `\

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
`

/**
 * Default private layout template for authenticated routes
*/
export const privateLayoutTemplate = () => `\

export default function PrivateLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}
`