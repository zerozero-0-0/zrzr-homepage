import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title: "Zrzr Portfolio",
    description: "個人プロフィールと技術記事をまとめたホームページです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body style={{ background: "#f4f6fb" }}>
                <Header />
                {children}
            </body>
        </html>
    );
}
