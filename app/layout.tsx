import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Bebas_Neue, Special_Elite } from "next/font/google";
import GoogleTagManager from "./components/GoogleTagManager";
import MicrosoftClarity from "./components/MicrosoftClarity";
import AliancaScript from "./components/AliancaScript";
const GTM_ID = "GTM-WNV8FX9J"; // Substitua pelo seu GTM ID

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Teste Gratuito de Nível de Permissão – descubra os bloqueios que te impedem de conquistar mais resultados.",
  description: "Aprovado por mais de 156 mil pessoas",
  icons: {
    icon: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
    shortcut: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
    apple: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="icon"
          href="/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
      </head>
      <body
        className={`${raleway.className} ${raleway.variable} ${bebasNeue.variable} ${specialElite.variable}`}
      >
        <GoogleTagManager />
        <MicrosoftClarity />
        <AliancaScript />
        {children}
      </body>
    </html>
  );
}
