import { BUTTON_TYPES } from './renderData';

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function getRandomLetter(): string {
  return String.fromCharCode(
    Math.floor('А'.charCodeAt(0) + Math.random() * ('Я'.charCodeAt(0) + 1 - 'А'.charCodeAt(0)))
  );
}

export function getRandomNumbersSet(min: number, max: number, count: number): string[] {
  const numArr: string[] = [];
  while (numArr.length < count) {
    const num = getRandomNumber(min, max);
    if (!numArr.includes(num.toString())) {
      numArr.push(num.toString());
    }
  }
  return numArr;
}

export function getRandomLettersSet(count: number): string[] {
  const letterArr: string[] = [];
  while (letterArr.length < count) {
    const letter = getRandomLetter();
    if (!letterArr.includes(letter)) {
      letterArr.push(letter);
    }
  }
  return letterArr;
}

export function sortArray(
  array: { value: string; image: string }[],
  direction: BUTTON_TYPES
): { value: string; image: string }[] {
  const arr = [...array];
  const sorted = arr.sort((a, b) => {
    if (direction === BUTTON_TYPES.ASCENDING) {
      if (a.value > b.value) {
        return 1;
      } else return -1;
    } else if (b.value > a.value) {
      return 1;
    } else return -1;
  });
  return sorted;
}
