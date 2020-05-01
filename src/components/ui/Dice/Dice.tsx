import React from "react";
import "./Dice.css";
import DieFace from "./DieFace";

type DiceProps={
  inputValue: number;
  clickHandler: ()=>void;
}

const Dice = ({inputValue, clickHandler}:DiceProps) => {

  return (
    <div className={`dice show-${inputValue}`} onClick={clickHandler}  >
      <ThreeDFaces />
    </div>
  );
};

const ThreeDFaces = () => {
  const faces = [1, 2, 3, 4, 5, 6].map((number) => {
    let classesToBeApplied = "die-item die-item-" + number;
    return (
      <div key={number} className={classesToBeApplied}>
        {getFace(number)}
      </div>
    );
  });
  return <>{faces}</>;
};

const getFace = (faceValue: number) => {
  return <DieFace value={faceValue} />;
};

export default Dice;
