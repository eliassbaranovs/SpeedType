import type { TypingStats } from "../types";

export const calculateWPM = (
  wordCount: number,
  timeInSeconds: number
): number => {
  return Math.round((wordCount / timeInSeconds) * 60);
};

export const calculateAccuracy = (
  errors: number,
  totalWords: number
): number => {
  return Math.round(((totalWords - errors) / totalWords) * 100);
};

export const calculateStats = (
  wordCount: number,
  errors: number,
  timeInSeconds: number
): TypingStats => {
  return {
    wpm: calculateWPM(wordCount, timeInSeconds),
    accuracy: calculateAccuracy(errors, wordCount),
    errors,
    totalWords: wordCount,
  };
};
