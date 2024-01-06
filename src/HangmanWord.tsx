type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealWord?: boolean;
};
export function HangmanWord({ revealWord = false, guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div style={{ fontFamily: "monospace", fontSize: "6rem", fontWeight: "bold", display: "flex", gap: ".25em", textTransform: "uppercase" }}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{ visibility: guessedLetters.includes(letter) || revealWord ? "visible" : "hidden", color: revealWord && !guessedLetters.includes(letter) ? "red" : "black" }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
