import React, { useState } from 'react';
import './App.css';
import Mainbutton from "./components/Mainbutton";
import IncreaseDecreasebutton from "./components/IncreaseDecreasebutton";
import Input from "./components/Input";



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

    function resetCounters() {
        setStrawberryCounter(0)
        setBananaCounter(0)
        setAppleCounter(0)
        setKiwiCounter(0)
    }

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '0',
        zipcode: '',
        deliveryfrequency: 'Iedere week',
        moment: 'Overdag',
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
                    <IncreaseDecreasebutton name="+" onClick={() => setStrawberryCounter(strawberryCounter + 1)}/>
                    <p>{strawberryCounter}</p>
                    <IncreaseDecreasebutton name="-" onClick={() => decreaseCounter(strawberryCounter, setStrawberryCounter)}/>
                </div>

                <div>
                    <h2>Bananen</h2>
                    <IncreaseDecreasebutton name="+" onClick={() => setBananaCounter(bananaCounter + 1)}/>
                    <p>{bananaCounter}</p>
                    <IncreaseDecreasebutton name="-" onClick={() => decreaseCounter(bananaCounter, setBananaCounter)}/>
                </div>

                <div>
                    <h2>Appels</h2>
                    <IncreaseDecreasebutton name="+" onClick={() => setAppleCounter(appleCounter + 1)}/>
                    <p>{appleCounter}</p>
                    <IncreaseDecreasebutton name="-" onClick={() => decreaseCounter(appleCounter, setAppleCounter)}/>
                </div>

                <div>
                    <h2>Kiwi's</h2>
                    <IncreaseDecreasebutton name="+" onClick={() => setKiwiCounter(kiwiCounter + 1)}/>
                    <p>{kiwiCounter}</p>
                    <IncreaseDecreasebutton name="-" onClick={() => decreaseCounter(kiwiCounter, setKiwiCounter)}/>
                </div>

                <Mainbutton name="Reset" resetCounters={resetCounters} type="button"/>

                <form onSubmit={handleSubmit}>
                   <Input label="Voornaam" name="firstname" type="text" value={formState.firstname} onChange={handleChange}/>
                    <Input label="Achternaam" name="lastname" type="text" value={formState.lastname} onChange={handleChange}/>
                    <Input label="Leeftijd" name="age" type="text" value={formState.age} onChange={handleChange}/>
                    <Input label="Postcode" name="zipcode" type="text" value={formState.zipcode} onChange={handleChange}/>

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
                    <Mainbutton name="Verzend" type="submit"/>
                    
                </form>


            </>
        );

}

export default App;