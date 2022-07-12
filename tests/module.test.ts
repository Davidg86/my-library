import { getRandomQuote } from '../src'
import { quotes } from '../src/citations'

test('It gets a random quote', () => {
  const randomQuote = getRandomQuote()
  expect(quotes).toContain(randomQuote)
})
