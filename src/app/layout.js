import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviders from "@/providers/ThemeProvider";
import MenuBar from "@/components/MenuBar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsFlick",
  description: "India's Best Short News App (text & Video)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviders>
          <Navbar/>
          {children}
          <MenuBar/>
        </ThemeProviders>
      </body>
    </html>
  );
}
