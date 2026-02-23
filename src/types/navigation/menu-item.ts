interface BaseMenuItem {
  /** Nome exibido no item. */
  label: string
}

interface PathMenuItem extends BaseMenuItem {
  type: "path"
  href: string
}

interface AnchorMenuItem extends BaseMenuItem {
  type: "anchor"
  href: `${string}#${string}`
}

/**
 * Tipagem do item do menu de navegação.
 */
export type MenuItem = PathMenuItem | AnchorMenuItem
