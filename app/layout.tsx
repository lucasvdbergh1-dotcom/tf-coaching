import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title:
    "Thom Fidder Coaching — Personal Training in Hulshorst | Eerste sessie gratis",
  description:
    "Personal training door Thom Fidder in Hulshorst. Geen quick fixes, maar duurzame verandering. Ruim 8 jaar ervaring. De eerste sessie is altijd gratis.",
  icons: { icon: "/assets/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
