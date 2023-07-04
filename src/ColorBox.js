import React from 'react';
import "./ColorBox.css";

const ColorBox = ( {color, textColor} ) => {
  return (
    <div className='box' style={{backgroundColor:color}}>
    <h1 style={{color:textColor}}>{color ? color : "Empty value"}</h1>
    </div>
  )
}

export default ColorBox