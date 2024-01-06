const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      backgroundColor: "black",
      top: "120px",
      right: 0,
    }}
  />
);

const LeftArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawingProps = {
  incorrectNumberOfGuesses: number;
};
export function HangmanDrawing({ incorrectNumberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, incorrectNumberOfGuesses)}
      <div style={{ height: "50px", width: "10px", backgroundColor: "black", position: "absolute", marginLeft: "310px" }} />
      <div style={{ height: "10px", width: "200px", backgroundColor: "black", marginLeft: "120px" }} />
      <div style={{ height: "400px", width: "10px", backgroundColor: "black", marginLeft: "120px" }} />
      <div style={{ height: "10px", width: "250px", backgroundColor: "black" }} />
    </div>
  );
}
