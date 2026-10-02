import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { profile } from "@/data/profile";
import "./globals.css";

const description = `${profile.name}: ${profile.tagline}. Projects, experience and contact.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} | ${profile.title}`, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  openGraph: { type: "website", title: `${profile.name} | ${profile.title}`, description, siteName: profile.name },
  twitter: { card: "summary_large_image", title: `${profile.name} | ${profile.title}`, description },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#EDF1F6" }, { media: "(prefers-color-scheme: dark)", color: "#0E1B2E" }] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
