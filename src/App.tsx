// src/App.tsx
import { useEffect } from "react";
import "./App.css";
import { Timer } from "./components/Timer";
import { TypingField } from "./components/TypingField";
import { WordDisplay } from "./components/WordDisplay";
import { Statistics } from "./components/Statistics";
import { useTimer } from "./hooks/useTimer";
import { useTyping } from "./hooks/useTyping";
import { calculateStats } from "./utils/calculateStats";

function App() {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();
  const {
    words,
    currentIndex,
    errors,
    initializeTest,
    checkWord,
    isCompleted,
  } = useTyping();

  useEffect(() => {
    initializeTest().catch(console.error);
  }, [initializeTest]);

  const handleWordSubmit = (word: string) => {
    if (!isRunning) {
      startTimer();
    }

    // Check if this is the last word before processing it
    if (currentIndex === words.length - 1) {
      checkWord(word);
      stopTimer();
    } else {
      checkWord(word);
    }
  };

  const handleReset = () => {
    resetTimer();
    initializeTest();
  };

  const stats = isCompleted
    ? calculateStats(words.length, errors, time)
    : { wpm: 0, accuracy: 0, errors: 0, totalWords: 0 };

  return (
    <div className="app">
      <h1>Typing Speed Test</h1>
      <Timer seconds={time} />
      <WordDisplay words={words} />
      <TypingField onWordSubmit={handleWordSubmit} isEnabled={!isCompleted} />
      {isCompleted && (
        <>
          <Statistics stats={stats} />
          <button onClick={handleReset}>Try Again</button>
        </>
      )}
    </div>
  );
}

export default App;
