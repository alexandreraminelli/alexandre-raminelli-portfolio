import { Button } from "@/components/ui/button"
import { CONTACT } from "@/constants/content/contact"
import GitHubLogo from "../svgs/github-logo"
import { UI_TEXTS } from "@/constants/content/ui"
import { cn } from "@/lib/utils"

/**
 * Props de `GitHubButton`.
 */
interface Props {
  label?: string
  hideLabel?: boolean
}

/**
 * Botão para abrir a conta do GitHub do autor.
 */
export default function GitHubButton({
  // Props
  label = UI_TEXTS.contact.github,
  hideLabel,
  variant = "outline",
  size = hideLabel ? "icon" : "default",
  className,
  ...props
}: Props & React.ComponentPropsWithoutRef<typeof Button>) {
  return (
    <Button asChild variant={variant} className={cn("bg-github-black! hover:bg-github-black-hover! text-white!", className)} size={size} {...props}>
      <a href={CONTACT.github} target="_blank">
        <GitHubLogo />
        <span className={cn({ "sr-only": hideLabel })}>{label}</span>
      </a>
    </Button>
  )
}
