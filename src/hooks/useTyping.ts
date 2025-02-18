import { useState, useCallback } from "react";
import { Word } from "../types";
import { splitIntoWords, getRandomText } from "../utils/wordUtils";

export const useTyping = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState(0);

  const initializeTest = useCallback(async () => {
    const text = await getRandomText();
    const wordList = splitIntoWords(text).map((word, index) => ({
      text: word,
      status: index === 0 ? "current" : "upcoming",
    }));
    setWords(wordList as Word[]);
    setCurrentIndex(0);
    setErrors(0);
  }, []);

  const checkWord = useCallback(
    (typedWord: string) => {
      const currentWord = words[currentIndex];
      const isCorrect = typedWord.trim() === currentWord.text;

      setWords(
        words.map((word, index) => {
          if (index === currentIndex) {
            return { ...word, status: isCorrect ? "correct" : "incorrect" };
          }
          if (index === currentIndex + 1) {
            return { ...word, status: "current" };
          }
          return word;
        })
      );

      if (!isCorrect) {
        setErrors((prev) => prev + 1);
      }
      setCurrentIndex((prev) => prev + 1);
      return isCorrect;
    },
    [words, currentIndex]
  );

  return {
    words,
    currentIndex,
    errors,
    initializeTest,
    checkWord,
    isCompleted: currentIndex === words.length,
  };
};
