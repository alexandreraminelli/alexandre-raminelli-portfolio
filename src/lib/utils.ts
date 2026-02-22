import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitário para mesclar classes CSS usando `clsx` e `tailwind-merge`.
 *
 * Permite combinar várias classes em uma única string, eliminando duplicatas
 * e resolvendo conflitos de classes do Tailwind CSS.
 *
 * @param inputs - Uma lista de classes CSS ou expressões que podem ser
 * avaliadas para classes.
 *
 * @returns Uma string contendo as classes CSS mescladas e otimizadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
