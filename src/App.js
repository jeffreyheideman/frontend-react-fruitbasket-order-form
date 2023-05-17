import React, { useState } from 'react';
import './App.css';



function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function decreaseCounter(counter, setCounter) {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '0',
        zipcode: '',
        deliveryfrequency: 'Iedere week',
        moment: 'afternoon',
        message: '',
        conditions: false


    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ?
            e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue
        });

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(strawberryCounter, bananaCounter, appleCounter, kiwiCounter, formState)
    }
        return (
            <>
                <h1>Fruitmand bezorgservice</h1>
                <div>
                    <h2>Aardbeien</h2>
                    <button type="button" onClick={() => setStrawberryCounter(strawberryCounter + 1)}>+</button>
                    <p>{strawberryCounter}</p>
                    <button type="button" onClick={() => decreaseCounter(strawberryCounter, setStrawberryCounter)}>-
                    </button>
                </div>

                <div>
                    <h2>Bananen</h2>
                    <button type="button" onClick={() => setBananaCounter(bananaCounter + 1)}>+</button>
                    <p>{bananaCounter}</p>
                    <button type="button" onClick={() => decreaseCounter(bananaCounter, setBananaCounter)}>-</button>
                </div>

                <div>
                    <h2>Appels</h2>
                    <button type="button" onClick={() => setAppleCounter(appleCounter + 1)}>+</button>
                    <p>{appleCounter}</p>
                    <button type="button" onClick={() => decreaseCounter(appleCounter, setAppleCounter)}>-</button>
                </div>

                <div>
                    <h2>Kiwi's</h2>
                    <button type="button" onClick={() => setKiwiCounter(kiwiCounter + 1)}>+</button>
                    <p>{kiwiCounter}</p>
                    <button type="button" onClick={() => decreaseCounter(kiwiCounter, setKiwiCounter)}>-</button>
                </div>


                <button
                    type="button"
                    onClick={() => {
                        setStrawberryCounter(0)
                        setBananaCounter(0)
                        setAppleCounter(0)
                        setKiwiCounter(0)
                    }}
                >Reset
                </button>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">
                        Voornaam
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formState.firstname}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>

                    <label htmlFor="lastname">
                        Achternaam
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formState.lastname}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>

                    <label htmlFor="age">
                        leeftijd
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={formState.age}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>

                    <label htmlFor="zipcode">
                        Postcode
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            value={formState.zipcode}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <label htmlFor="delivery-frequency">
                        Bezorgfrequentie
                        <select name="deliveryfrequency" id="delivery-frequency" onChange={handleChange} value={formState.deliveryfrequency}>
                            <option value="every-week">Iedere week</option>
                            <option value="every-2-weeks">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <br/>
                    {/*radiobuttons werken nog niet*/}
                    <label htmlFor="afternoon">
                        Overdag
                        <input type="radio"
                               id="afternoon"
                                name="moment"
                               value="afternoon"
                               onChange={handleChange}
                               checked={formState.moment === "afternoon"}
                                />
                    </label>
                    <label htmlFor="evening">
                        'S Avonds
                        <input type="radio"
                                id="evening"
                                name="moment"
                                onChange={handleChange}
                                value="evening"
                                checked={formState.moment === "evening"}/>
                    </label>
                    <br/>
                    <label htmlFor="message">
                        Opmerking
                        <br/>
                        <textarea name="message" id="message" cols="30" rows="10" value={formState.message} onChange={handleChange}></textarea>
                    </label>
                    <br/>
                    <label htmlFor="conditions">
                        <input type="checkbox"
                                id="conditions"
                                name="conditions"
                                checked={formState.conditions}
                                onChange={handleChange}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/>
                    <button type="submit">Verzend</button>
                    
                </form>


            </>
        );

}

export default App;