import GitHubLogo from "@/components/shared/svgs/github-logo"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/constants/content/contact"
import { UI_TEXTS } from "@/constants/content/ui"
import { cn } from "@/lib/utils"

/**
 * Props de `GitHubButton`.
 */
interface Props {
  label?: string
  iconOnly?: boolean
}

/**
 * Botão para abrir a conta do GitHub do autor.
 */
export default function GitHubButton({
  // Props
  label = UI_TEXTS.contact.github,
  iconOnly,
  variant = "default",
  size = iconOnly ? "icon" : "default",
  className,
  ...props
}: Props & React.ComponentPropsWithoutRef<typeof Button>) {
  return (
    <Button
      asChild
      className={cn(
        // Style:
        "bg-github-gray-6 dark:bg-github-gray-5 text-white!",
        className,
      )}
      variant={variant}
      size={size}
      {...props}
    >
      <a href={CONTACT.github} target="_blank">
        <GitHubLogo />
        <span className={cn({ "sr-only": iconOnly })}>{label}</span>
      </a>
    </Button>
  )
}
