import React from 'react';

function IncreaseDecreasebutton({name, onClick}) {
    return (
        <button type="button" onClick={onClick}>{name}</button>
    );
}

export default IncreaseDecreasebutton;