"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Provedor de tema do aplicativo.
 * Permite alternar entre modos de tema (claro, escuro, sistema).
 */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
