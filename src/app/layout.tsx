import type { Metadata } from "next";
import { Syne, DM_Mono, Lora, Geist, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prism",
  description: "O Prism permite que times de produto e desenvolvedores publiquem atualizações de forma organizada em uma página pública, com sistema de assinantes por e-mail e widget embeddable para terceiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", syne.variable, dmMono.variable, lora.variable, pressStart2P.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
