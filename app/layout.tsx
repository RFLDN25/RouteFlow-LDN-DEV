import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "RouteFlow London",
  description: "Modern, responsive live transport tracking platform for London.",
  metadataBase: new URL("https://routeflow.ldn"),
  openGraph: {
    title: "RouteFlow London",
    description: "Live TfL bus tracking, fleet insights, and community features.",
    siteName: "RouteFlow London",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RouteFlow London",
    description: "Live TfL bus tracking, fleet insights, and community features."
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-transparent antialiased">
        {children}
      </body>
    </html>
  );
}
