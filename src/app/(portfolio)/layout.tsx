import PortfolioHeader from "@/components/layout/portfolio/portfolio-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { DotPattern } from "@/components/ui/dot-pattern"

/**
 * Layout do portfólio.
 */
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark" // forçar tema escuro
        disableTransitionOnChange
      >
        <DotPattern>
          {/* Header */}
          <PortfolioHeader />

          {/* Conteúdo */}
          {children}
        </DotPattern>
      </ThemeProvider>
    </>
  )
}
