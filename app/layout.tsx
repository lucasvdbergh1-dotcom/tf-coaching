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

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title:
    "Thom Fidder Coaching — Personal Training in Hulshorst | Eerste sessie gratis",
  description:
    "Personal training door Thom Fidder in Hulshorst. Geen quick fixes, maar duurzame verandering. Ruim 8 jaar ervaring. De eerste sessie is altijd gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${anton.variable} ${archivo.variable}`}>
      <body
        style={
          { "--bg-noise": `url(${BP}/assets/bg-noise.jpg)` } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
