import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, htmlLang, localeDirection } from "@/lib/i18n";
import { contact, site } from "@/lib/site";
import "./globals.css";

/** §15 — serif for headlines, sans for body/UI. */
const serif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz", "SOFT", "WONK"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#fffaf5",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(defaultLocale);
  const title = `${site.name} — ${t.hero.role}`;
  const description = `${t.contact.headingLine1} ${t.contact.body} ${site.description}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={htmlLang[defaultLocale]}
      dir={localeDirection[defaultLocale]}
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {children}
        <footer className="sr-only">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </footer>
      </body>
    </html>
  );
}
