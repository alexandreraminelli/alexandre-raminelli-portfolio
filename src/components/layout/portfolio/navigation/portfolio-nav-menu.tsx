import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { PORTFOLIO_MENU } from "@/constants/navigation/portfolio-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * Menu de navegação do portfólio.
 */
export default function PortfolioNavMenu({ className, orientation, ...props }: React.ComponentPropsWithRef<typeof NavigationMenu>) {
  return (
    <NavigationMenu
      className={cn(
        className,
        // Menu mobile
        { "items-start w-full": orientation === "vertical" },
      )}
      orientation={orientation}
      {...props}
    >
      <NavigationMenuList
        className={cn(
          "gap-1.5",
          // Menu mobile
          { "flex-col items-start justify-start w-full *:w-full": orientation === "vertical" },
        )}
      >
        {PORTFOLIO_MENU.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
