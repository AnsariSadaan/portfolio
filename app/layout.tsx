import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadaan Ansari | Software Developer Portfolio",
  description:
    "Portfolio of Sadaan Ansari - Software Developer specializing in React, Next.js, and TypeScript.",
  // Favicon Configuration
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/icons/favicon.ico" }],
  },
  // Open Graph (for social sharing)
  openGraph: {
    title: "Sadaan Ansari | Software Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and TypeScript.",
    type: "website",
    images: [
      {
        url: "/icons/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Sadaan Ansari Portfolio",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary",
    title: "Sadaan Ansari | Software Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and TypeScript.",
    images: ["/icons/favicon-512x512.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional favicon for older browsers */}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#1A1A1A" />
        <meta name="msapplication-TileColor" content="#1A1A1A" />

      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
