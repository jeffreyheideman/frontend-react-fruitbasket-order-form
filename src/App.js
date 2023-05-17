import React, { useState } from 'react';
import './App.css';



function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function decreaseCounter(counter, setCounter) {
        if (counter > 0) {
            setCounter( counter - 1)
        }
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div>
                <h2>Aardbeien</h2>
                <button type="button" onClick={() => setStrawberryCounter(strawberryCounter + 1)}>+</button>
                <p>{strawberryCounter}</p>
                <button type="button" onClick={() => decreaseCounter(strawberryCounter, setStrawberryCounter)}>-</button>
            </div>

            <div>
                <h2>Bananen</h2>
                <button type="button" onClick={() => setBananaCounter(bananaCounter + 1)}>+</button>
                <p>{bananaCounter}</p>
                <button type="button" onClick={() => decreaseCounter(bananaCounter, setBananaCounter())}>-</button>
            </div>

            <div>
                <h2>Appels</h2>
                <button type="button" onClick={() => setAppleCounter(appleCounter + 1)}>+</button>
                <p>{appleCounter}</p>
                <button type="button" onClick={() => decreaseCounter(appleCounter, setAppleCounter())}>-</button>
            </div>

            <div>
                <h2>Kiwi's</h2>
                <button type="button" onClick={() => setKiwiCounter(kiwiCounter + 1)}>+</button>
                <p>{kiwiCounter}</p>
                <button type="button" onClick={() => decreaseCounter(kiwiCounter, setKiwiCounter())}>-</button>
            </div>



            <button
                type="button"
                onClick={() => {
                    setStrawberryCounter(0)
                    setBananaCounter(0)
                    setAppleCounter(0)
                    setKiwiCounter(0)}}
            >Reset
            </button>


        </>
    );
}

export default App;