import ColorBox from "./ColorBox";
import InputColor from "./InputColor";
import { useState } from "react";


function App() {
  const [color, setColor] = useState("Empty value");

  return (
    <div>
      <ColorBox color={color}/>
      <InputColor color={color} setColor={setColor} />
    </div>
  );
}

export default App;
