import GitHubButton from "@/components/shared/buttons/github-button"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { ICONS } from "@/constants/icons"
import { SITE } from "@/constants/site"
import { HugeiconsIcon } from "@hugeicons/react"
import PortfolioNavMenu from "./portfolio-nav-menu"

/**
 * Botão que abre o menu de navegação em telas menores.
 */
export default function PortfolioMobileMenu({ className, ...props }: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <Sheet>
      {/* Botão de menu */}
      <SheetTrigger asChild>
        <Button className={className} variant="outline" size="icon-lg" {...props}>
          <HugeiconsIcon icon={ICONS.menu} />
        </Button>
      </SheetTrigger>

      {/* Menu mobile */}
      <SheetContent className="max-w-3xs">
        <SheetHeader>{SITE.author.name}</SheetHeader>

        <PortfolioNavMenu className="p-4" orientation="vertical" />

        {/* Contato */}
        <SheetFooter>
          <GitHubButton size="lg" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
