import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar_tailwind from '@/components/Navbar_tailwind'
import { ThemeProvider } from '@/components/theme-provider'
export const metadata: Metadata = {
  title: 'Articlyfy',
  description: 'Write your articles in markdown and publish them as a blog.',
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar_tailwind />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
