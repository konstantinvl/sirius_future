import { getRandomLettersSet, getRandomNumbersSet } from './getRandom';

export const GameSets: Record<number, (count: number) => string[]> = {
  1: (count: number) => getRandomLettersSet(count),
  2: (count: number) => getRandomNumbersSet(1, 9, count),
  3: (count: number) => getRandomNumbersSet(10, 19, count),
  4: (count: number) => getRandomNumbersSet(30, 60, count),
  5: (count: number) => getRandomNumbersSet(70, 99, count),
  6: (count: number) => getRandomNumbersSet(100, 999, count),
};
