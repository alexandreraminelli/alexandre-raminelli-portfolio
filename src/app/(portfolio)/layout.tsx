import PortfolioHeader from "@/components/layout/portfolio/portfolio-header"
import { DotPattern } from "@/components/ui/dot-pattern"

/**
 * Layout do portfólio.
 */
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <DotPattern>
      {/* Header */}
      <PortfolioHeader />

      {/* Conteúdo */}
      {children}
    </DotPattern>
  )
}
