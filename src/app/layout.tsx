import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ekora — India's First Creator Commerce Platform",
  description:
    "Discover India's best Instagram creators in one place. Buy unique handmade products directly from verified creators — no DMs, no hassle. From Reels to Cart.",
  keywords: [
    "creator marketplace",
    "Instagram sellers",
    "handmade products India",
    "creator commerce",
    "buy from Instagram creators",
    "handmade marketplace",
    "Ekora",
    "independent creators India",
  ],
  authors: [{ name: "Ekora" }],
  openGraph: {
    title: "Ekora — India's First Creator Commerce Platform",
    description:
      "Discover India's best Instagram creators in one place. Buy unique handmade products directly from verified creators.",
    type: "website",
    locale: "en_IN",
    siteName: "Ekora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekora — India's First Creator Commerce Platform",
    description:
      "Discover India's best Instagram creators in one place. From Reels to Cart.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
