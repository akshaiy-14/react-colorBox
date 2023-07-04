import React from 'react';
import "./InputColor.css";

const InputColor = ( { color, setColor } ) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input required type="text" placeholder="Add color name" onChange={(e) => setColor(e.target.value)}></input>
    </form>
  )
}

export default InputColor