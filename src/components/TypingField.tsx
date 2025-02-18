import React, { useState, useEffect, useRef } from "react";

interface TypingFieldProps {
  onWordSubmit: (word: string) => void;
  isEnabled: boolean;
}

export const TypingField: React.FC<TypingFieldProps> = ({
  onWordSubmit,
  isEnabled,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.endsWith(" ")) {
      onWordSubmit(value);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (!isEnabled) {
      setInputValue("");
    } else {
      // Focus the input when enabled
      inputRef.current?.focus();
    }
  }, [isEnabled]);

  // Focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={handleChange}
      disabled={!isEnabled}
      className="typing-input"
      placeholder={isEnabled ? "Start typing..." : "Test completed"}
      autoFocus
    />
  );
};
