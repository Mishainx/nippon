import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../../src/components/header/header";
import Footer from "../../src/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nippon Game",
  description: "Ecommerce mayorista de videojuegos",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className= {`${inter.className}  bg-slate-100`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
