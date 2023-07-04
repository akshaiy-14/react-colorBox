import React from 'react';
import "./ToggleTextColor.css";

const ToggleTextColor = ( {changeTextColor, toggleBorder} ) => {
  return (
    <div>
        <button className="forText" onClick={changeTextColor}> Toggle Text Color </button>
        <button className="forBorder" onClick={toggleBorder}> Toggle border </button>
    </div>
    
  )
}

export default ToggleTextColor