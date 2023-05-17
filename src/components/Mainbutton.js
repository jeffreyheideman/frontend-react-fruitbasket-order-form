import React from 'react';

function Mainbutton({name, resetCounters, type}) {

    return (
        <button
            type={type}
            onClick={resetCounters}
        >{name}
        </button>
    );
}

export default Mainbutton;