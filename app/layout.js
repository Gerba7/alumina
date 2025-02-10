import "./globals.css";
import { Montserrat, Parisienne } from "next/font/google";
import Navbar from "./ui/components/Navbar/Navbar";


const montserrat = Montserrat({ subsets: ["latin"], display: 'swap', weight: ['300', '500', '700', '900'], });
export const parisienne = Parisienne({ subsets: ["latin"], display: 'swap', weight: ['400'], });

export const metadata = {
  title: "Alúmina",
  description: "Consultoría",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
