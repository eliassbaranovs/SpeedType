export interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  totalWords: number;
}

export interface Word {
  text: string;
  status: "correct" | "incorrect" | "current" | "upcoming";
}
