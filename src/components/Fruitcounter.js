import React from 'react';
import "../App.css"
import IncreaseDecreasebutton from "./IncreaseDecreasebutton";

function Fruitcounter({title, onClickIncrease,onClickDecrease, counter, emoji, className}) {

    return (
        <div className="fruitcounter">
            <span>{emoji}</span>
            <h2 className="fruit-title">{title}</h2>
            <IncreaseDecreasebutton name="+" onClick={onClickIncrease} className={className}/>
            <p className="counter">{counter}</p>
            <IncreaseDecreasebutton name="-" onClick={onClickDecrease} className="increase-decrease-default-btn"/>
        </div>

    );
}

export default Fruitcounter;