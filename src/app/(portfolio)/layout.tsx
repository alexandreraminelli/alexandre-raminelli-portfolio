import PortfolioHeader from "@/components/layout/portfolio-header"

/**
 * Layout do portfólio.
 */
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header */}
      <PortfolioHeader />

      {/* Conteúdo */}
      {children}
    </>
  )
}
