import ColorBox from "./ColorBox";
import InputColor from "./InputColor";
import { useState } from "react";
import ToggleTextColor from "./ToggleTextColor";


function App() {
  const [color, setColor] = useState("Empty value");
  const [textColor, setTextColor] = useState("black");
  const [borderColor, setBorderColor] = useState("black");

  const changeTextColor = () => {
    setTextColor(textColor === "black" ? "white" : "black");
  }

  const toggleBorder = () => {
    setBorderColor(borderColor === "black" ? "white" : "black");
  }

  return (
    <div>
      <ColorBox color={color} textColor={textColor} borderColor={borderColor}/>
      <InputColor color={color} setColor={setColor} />
      <ToggleTextColor changeTextColor={changeTextColor} toggleBorder={toggleBorder}/>
    </div>
  );
}

export default App;
