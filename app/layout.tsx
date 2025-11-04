import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MobiKudi - AI-Powered Personal Finance Assistant",
  description:
    "Take control of your money with MobiKudi. Get AI-powered guidance, track expenses, and save smarter — the simple, smart Nigerian way.",
  generator: "v0.app",
  openGraph: {
    title: "MobiKudi - Take Control of Your Money",
    description: "AI-powered personal finance assistant designed for Nigerians",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
