import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Providers from "./store/Providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shoppy",
//   description: "Shoppy e-commerce",
// };

export default function RootLayout({ children }) {
  return (
    <Providers>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
