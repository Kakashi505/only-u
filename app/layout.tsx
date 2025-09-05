import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import AgeGate from "@/components/age-gate"
import { LocalizationProvider } from "@/contexts/LocalizationContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OnlyU - Creator Platform",
  description: "Connect with creators and discover exclusive content",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LocalizationProvider defaultLocale="ja">
          <AgeGate />
          <Navigation />
          <main className="pt-16 pb-20 lg:pb-0">{children}</main>
        </LocalizationProvider>
      </body>
    </html>
  )
}
