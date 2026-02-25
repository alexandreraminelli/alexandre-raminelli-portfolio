import PortfolioHeader from "@/components/layout/portfolio/portfolio-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ConstellationBackground } from "@/components/ui/constellation"

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
        <ConstellationBackground>
          {/* Header */}
          <PortfolioHeader />

          {/* Conteúdo */}
          {children}
        </ConstellationBackground>
      </ThemeProvider>
    </>
  )
}
