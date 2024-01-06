import { KeyboardEvent, useEffect, useState, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing.tsx";
import { HangmanWord } from "./HangmanWord.tsx";
import { Keyboard } from "./Keyboard.tsx";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return getWord();
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length > 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((curr) => [...curr, letter]);
    },
    [guessedLetters]
  );

  const handler = (e: KeyboardEvent) => {
    const key = e.key;
    if (!key.match(/^[a-z]$/)) return;

    e.preventDefault();
    addGuessedLetter(key);
  };

  useEffect(() => {
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", margin: "auto" }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner!! Refresh to Try Again"}
        {isLoser && "Nice Try!! Refresh to Try Again"}
      </div>
      <HangmanDrawing incorrectNumberOfGuesses={incorrectLetters.length} />
      <HangmanWord revealWord={isWinner || isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
