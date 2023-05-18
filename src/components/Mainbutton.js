import React from 'react';

function Mainbutton({name, resetCounters, type}) {

    return (
        <button
            className="reset-btn send-btn"
            type={type}
            onClick={resetCounters}
        >{name}
        </button>
    );
}

export default Mainbutton;