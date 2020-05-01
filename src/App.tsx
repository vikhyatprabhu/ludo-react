import React, { useState } from "react";
import "./App.css";
import Dice from "./components/ui/Dice/Dice";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

function App() {
  const getRandomDiceValue = (): number => {
    return Math.floor(Math.random() * 6 + 1);
  };

  let [diceValue, setDiceValue] = useState(getRandomDiceValue());

  const handleClick = () => {
    setDiceValue(getRandomDiceValue());
  };

  return (
    <div className="App text-center">
      <Typography variant="h2">LUDO</Typography>
      <Grid container justify="center">
        <div className="dice-box ">
          <Dice inputValue={diceValue} clickHandler={() => handleClick()} />
        </div>
      </Grid>
    </div>
  );
}

export default App;
