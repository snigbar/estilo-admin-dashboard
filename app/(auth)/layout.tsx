import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Estilo - Admin Dashboard",
  description: "Admin panel for estilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.className} flex items-center justify-center h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
