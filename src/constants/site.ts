import { CONTACT } from "./content/contact"
import { IMAGES } from "./images"

/** Nome do site. */
const SITE_NAME = "Alexandre Raminelli | Front-end Developer"

/**
 * Metadados globais do site.
 */
export const SITE = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: "Portfólio de Alexandre Raminelli, desenvolvedor front-end especializado em React, Next.js e TypeScript.",

  url: "https://alexandre-raminelli-portfolio.vercel.app",
  locale: "pt-BR",

  author: {
    name: "Alexandre Raminelli",
    email: CONTACT.email,
    github: CONTACT.github,
    linkedin: CONTACT.linkedin,
  },

  openGraph: {
    image: IMAGES.avatar,
    type: "profile",
  },
} as const
