import PortfolioNavMenu from "@/components/layout/portfolio/navigation/portfolio-nav-menu"
import GitHubButton from "@/components/shared/buttons/github-button"
import { ModeToggle } from "@/components/shared/buttons/mode-toggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IMAGES } from "@/constants/images"
import { SITE } from "@/constants/site"
import PortfolioMobileMenu from "./navigation/portfolio-mobile-menu"

/**
 * Cabeçalho do portfólio.
 */
export default function PortfolioHeader() {
  return (
    <header
      className="
        flex flex-row justify-between items-center
        my-4 mx-2.5 md:mx-6 p-3
        sticky top-2.5
        bg-sidebar/80 backdrop-blur border rounded-xl
        transition-all"
    >
      {/* Avatar e Título */}
      <AvatarAndTitle />

      {/* Menu de navegação */}
      <PortfolioNavMenu className="max-sm:hidden" />

      {/* End Content */}
      <div className="flex flex-row items-center gap-2">
        {/* Botão do GitHub */}
        <GitHubButton className="max-md:hidden" size="lg" />
        <GitHubButton iconOnly className="md:hidden" size="icon-lg" />
        {/* Botão de tema */}
        <ModeToggle size="icon-lg" />

        {/* Botão de menu mobile */}
        <PortfolioMobileMenu className="sm:hidden" />
      </div>
    </header>
  )
}

/**
 * Avatar e título do portfólio.
 */
function AvatarAndTitle() {
  return (
    <div className="flex flex-row items-center min-w-0 gap-2.5 w-fit">
      {/* Avatar */}
      <Avatar size="lg">
        <AvatarImage className="rounded-md" src={IMAGES.avatar} alt={IMAGES.avatarAlt} />
      </Avatar>
      {/* Título */}
      <h1 className="font-bold md:text-lg truncate text-ellipsis min-w-0">{SITE.author.name}</h1>
    </div>
  )
}
