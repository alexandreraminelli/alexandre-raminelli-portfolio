import { ThemeProvider } from "@/components/providers/theme-provider"

/**
 * Layout do Dashboard para gerenciamento do portfólio.
 */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Configuração de tema */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system" // tema padrão
        enableSystem // habilita detecção do tema do sistema
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}
