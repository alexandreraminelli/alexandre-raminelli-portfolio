import { SECTIONS_TEXTS } from "@/constants/content/sections"
import { MenuItem } from "@/types/navigation/menu-item"
import { ROUTES } from "./routes"
import { ANCHORS } from "./anchors"

/**
 * Destinos do menu de navegação do portfólio.
 */
export const PORTFOLIO_MENU: MenuItem[] = [
  // Início
  {
    label: SECTIONS_TEXTS.home,
    type: "anchor",
    href: `${ROUTES.portfolio.home}#${ANCHORS.about}`,
  },
  // Habilidades
  {
    label: SECTIONS_TEXTS.skills,
    type: "anchor",
    href: `${ROUTES.portfolio.home}#${ANCHORS.skills}`,
  },
  // Projetos
  {
    label: SECTIONS_TEXTS.projects,
    type: "anchor",
    href: `${ROUTES.portfolio.home}#${ANCHORS.projects}`,
  },
  // Contato
  {
    label: SECTIONS_TEXTS.contact,
    type: "anchor",
    href: `${ROUTES.portfolio.home}#${ANCHORS.contact}`,
  },
]
