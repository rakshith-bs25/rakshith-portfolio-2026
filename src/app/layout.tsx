import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { SideSocial } from "@/components/SideSocial";
import { SideEmail } from "@/components/SideEmail";
import { SpotlightCursor } from "@/components/SpotlightCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";
import { ClientAnimationWrapper } from "@/components/ClientAnimationWrapper";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rakshith | Full-Stack Developer",
  description: "Recruiter-ready personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-primary min-h-screen selection:bg-accent/30 selection:text-text-primary flex flex-col relative`}>
        {/* Pinned background for infinite scroll illusion */}
        <div className="fixed inset-0 z-[-1] bg-primary"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={['light', 'dark', 'theme-green', 'theme-blue', 'theme-orange']}>
          <LanguageProvider>
            <ClientAnimationWrapper>
              <SpotlightCursor />
              <TopNav />
              <SideSocial />
              <SideEmail />
              {children}
            </ClientAnimationWrapper>
          </LanguageProvider>
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  );
}
