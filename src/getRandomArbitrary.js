/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range/1527820#1527820
 */
export default function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}