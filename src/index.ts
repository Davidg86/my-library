/**
 * Récupère une citation aléatoire
 */
import { quotes } from './citations.js'
import { randomElement } from './random-element.js'

export function getRandomQuote () {
  return randomElement(quotes)
}
