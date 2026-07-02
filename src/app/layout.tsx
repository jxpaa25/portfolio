import type { Metadata } from "next";
import { Lora, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimationProvider } from "@/components/context/AnimationProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-opal-iota-10.vercel.app/"),
  title: {
    default: "Pavle Josić | Full-Stack Developer",
    template: "%s | Pavle Josić",
  },
  description:
    "Software and Information Engineering student focused on backend systems, distributed architecture, and application security (AppSec). Stack-agnostic developer proficient in Go, Java, and Next.js.",
  keywords: [
    "Pavle Josic",
    "Backend Engineer Serbia",
    "Full-Stack Developer Belgrade",
    "Software Engineer Pozarevac",
    "Go backend developer",
    "Spring Boot distributed systems",
    "NestJS developer",
    "Application Security AppSec",
    "Next.js portfolio GSAP",
  ],
  authors: [{ name: "Pavle Josić", url: "https://github.com/jxpaa25" }],
  creator: "Pavle Josić",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-opal-iota-10.vercel.app/",
    title: "Pavle Josić | Full-Stack & Backend Engineer",
    description:
      "Software and Information Engineering student focused on backend systems, distributed architecture, and application security (AppSec).",
    siteName: "Pavle Josić Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pavle Josić — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavle Josić | Full-Stack & Backend Engineer",
    description: "Backend architecture, distributed systems, and AppSec.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-primary">
        <AnimationProvider>
          <CustomCursor />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
