import GitHubButton from "@/components/shared/buttons/github-button"
import { ModeToggle } from "@/components/shared/buttons/mode-toggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IMAGES } from "@/constants/images"
import { SITE } from "@/constants/site"

/**
 * Cabeçalho do portfólio.
 */
export default function PortfolioHeader() {
  return (
    <header
      className="
        flex flex-row justify-between items-center
        my-4 mx-2.5 md:mx-6 px-4 py-3
        sticky top-2.5
        bg-sidebar/80 backdrop-blur border rounded-xl
        transition-all"
    >
      {/* Avatar e Título */}
      <AvatarAndTitle />

      {/* Menu de navegação */}

      {/* End Content */}
      <div className="flex flex-row items-center gap-2">
        {/* Botão do GitHub */}
        <GitHubButton className="max-sm:hidden" size="lg" />
        <GitHubButton hideLabel className="sm:hidden" size="icon-lg" />
        {/* Botão de tema */}
        <ModeToggle />
      </div>
    </header>
  )
}

/**
 * Avatar e título do portfólio.
 */
function AvatarAndTitle() {
  return (
    <div className="flex flex-row items-center gap-4">
      {/* Avatar */}
      <Avatar size="lg">
        <AvatarImage src={IMAGES.avatar} alt={IMAGES.avatarAlt} />
      </Avatar>
      {/* Título */}
      <h1 className="font-bold">{SITE.author.name}</h1>
    </div>
  )
}
