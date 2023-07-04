import React from 'react';
import "./ToggleTextColor.css";

const ToggleTextColor = ( {changeTextColor} ) => {
  return (
    <button onClick={changeTextColor}> Toggle Text Color </button>
  )
}

export default ToggleTextColor