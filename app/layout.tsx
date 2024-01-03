import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
export const metadata: Metadata = {
  title: 'Articlyfy',
  description: 'Write your articles in markdown and publish them as a blog.',
}
import { Toaster } from "@/components/ui/sonner"
import { LoginContextProvider } from './LoginContext'
import NavbarApp from '@/components/NavbarApp'

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
          <LoginContextProvider>
            {/* <MyContext.Provider value={false}> */}
            <NavbarApp />
            {children}
            <Toaster />
            {/* </MyContext.Provider> */}
          </LoginContextProvider>

        </ThemeProvider>
      </body>
    </html>
  )
}
