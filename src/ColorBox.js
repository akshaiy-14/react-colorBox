import React from 'react';
import "./ColorBox.css";

const ColorBox = ( {color} ) => {
  return (
    <div className='box' style={{backgroundColor:color}}>
    <h1>{color}</h1>
    </div>
  )
}

export default ColorBox