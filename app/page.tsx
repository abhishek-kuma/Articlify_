'use client'
import { ModeToggle } from '@/components/Toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <ModeToggle/>
          <Button>Click Button</Button>
        </ThemeProvider>
    </main>
  )
}
