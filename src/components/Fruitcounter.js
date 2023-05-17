import React from 'react';

function Fruitcounter({ name, counter, setCounter}) {
    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div>
            <h2>{name}</h2>
            <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
            <p>{counter}</p>
            <button type="button" onClick={decreaseCounter}>-</button>
        </div>
    );
}

export default Fruitcounter;