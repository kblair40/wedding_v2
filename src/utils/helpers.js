import uniqueRandom from 'unique-random';

export const getRandomNum = () => {
  return uniqueRandom(1000, 9999)
}