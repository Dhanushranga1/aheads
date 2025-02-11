import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar"; // Import the Navbar component

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ahead Services",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                    ${inter.variable} 
                    font-sans 
                    antialiased 
                    text-black 
                    bg-white 
                    min-h-screen
                `}
            >
                <Navbar /> {/* Include the Navbar here */}
                {children}
            </body>
        </html>
    );
}