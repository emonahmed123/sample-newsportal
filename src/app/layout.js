import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar/Navbar";
import Footer from "@/component/shared/Footer";
import Header from "@/component/shared/Header";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "This is Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Navbar></Navbar>

        <Container className="min-h-screen">

          {children}
        </Container>
        <Footer></Footer>
      </body>
    </html>
  );
}
