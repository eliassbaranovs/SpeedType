import React from "react";
import { Word } from "../types";

interface WordDisplayProps {
  words: Word[];
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ words }) => {
  return (
    <div className="word-display">
      {words.map((word, index) => (
        <span
          key={index}
          className={`word ${word.status}`}
          style={{
            color:
              word.status === "correct"
                ? "green"
                : word.status === "incorrect"
                ? "red"
                : word.status === "current"
                ? "blue"
                : "black",
          }}
        >
          {word.text}{" "}
        </span>
      ))}
    </div>
  );
};
