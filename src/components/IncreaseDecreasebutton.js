import React from 'react';
import "../App.css"


function IncreaseDecreasebutton({name, onClick, className}) {
    return (
        <button className={className}
                type="button" onClick={onClick}>{name}</button>
    );
}

export default IncreaseDecreasebutton;