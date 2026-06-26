import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Ana Kelly | Advocacia Especializada & Consultoria Jurídica",
  description: "Soluções jurídicas eficientes com transparência, agilidade e atendimento personalizado. Especialista em Direito Civil, Família e Sucessões.",
  keywords: ["advogada", "direito de familia", "advocacia digital", "consultoria juridica", "inventario", "divorcio", "contratos"],
  authors: [{ name: "Dra. Ana Kelly" }],
  openGraph: {
    title: "Dra. Ana Kelly | Advocacia Especializada",
    description: "Atendimento de excelência e soluções sob medida para os seus direitos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${serifFont.variable} ${sansFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
