import React, { useState } from 'react';
import './App.css';
import Fruitcounter from "./components/Fruitcounter";


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Fruitcounter
                name="Aardbeien"
                counter={strawberryCounter}
                setCounter={setStrawberryCounter}/>

            <Fruitcounter
                name="Bananen"
                counter={bananaCounter}
                setCounter={setBananaCounter}/>

            <Fruitcounter
                name="Appels"
                counter={appleCounter}
                setCounter={setAppleCounter}/>

            <Fruitcounter
                name="Kiwi's"
                counter={kiwiCounter}
                setCounter={setKiwiCounter}/>



            <button
                type="button"
                onClick={() => {setStrawberryCounter(0)
                    setBananaCounter(0)
                    setAppleCounter(0)
                    setKiwiCounter(0)}}

            >Reset</button>
        </>
    );
}

export default App;