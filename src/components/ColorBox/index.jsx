import React, { useState } from 'react';
import './style.scss';

function getRandomColor() {
    const listColor = ['red', 'green', 'violet', 'blue', 'yellow'];
    const indexColor= Math.trunc(Math.random() *5);
    return listColor[indexColor];
}
function ColorBox() { 
    const [color, setColor]= useState(() =>{
        const initialColor= localStorage.getItem("color") || "blue";
        return initialColor;
    });

    function handleColor() {
        const newColor= getRandomColor();
        setColor(newColor);
        localStorage.setItem("color", newColor)
    }


    return (
        <div className='main'>
            <div
            className="box" 
            style= {{backgroundColor: color }}
            onClick={handleColor}
            >
            </div>
        </div>       
    );
}

export default ColorBox;