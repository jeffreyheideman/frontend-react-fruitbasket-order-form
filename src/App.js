import React, {useState} from 'react';
import './App.css';
import Mainbutton from "./components/Mainbutton";
import Input from "./components/Input";
import Fruitcounter from "./components/Fruitcounter";
import emoji from "emoji-dictionary";


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

    function convertEmoji(em) {
        return emoji.getUnicode(em)
    }

    return (
        <>
            <main>
                <h1>Fruitmand bezorgservice</h1>
                <Fruitcounter title="Aardbeien"
                              onClickIncrease={() => setStrawberryCounter(strawberryCounter + 1)}
                              onClickDecrease={() => decreaseCounter(strawberryCounter, setStrawberryCounter)}
                              className={strawberryCounter >= 1 ? "increase-decrease-active-btn" : "increase-decrease-default-btn"}
                              counter={strawberryCounter}
                              emoji={convertEmoji("strawberry")}/>

                <Fruitcounter title="Bananen"
                              onClickIncrease={() => setBananaCounter(bananaCounter + 1)}
                              onClickDecrease={() => decreaseCounter(bananaCounter, setBananaCounter)}
                              className={bananaCounter >= 1 ? "increase-decrease-active-btn" : "increase-decrease-default-btn"}
                              counter={bananaCounter}
                                emoji={convertEmoji("banana")}/>

                <Fruitcounter title="Appels"
                              onClickIncrease={() => setAppleCounter(appleCounter + 1)}
                              onClickDecrease={() => decreaseCounter(appleCounter, setAppleCounter)}
                              className={appleCounter >= 1 ? "increase-decrease-active-btn" : "increase-decrease-default-btn"}
                              counter={appleCounter}
                              emoji={convertEmoji("apple")}/>

                <Fruitcounter title="Kiwi's"
                              onClickIncrease={() => setKiwiCounter(kiwiCounter + 1)}
                              onClickDecrease={() => decreaseCounter(kiwiCounter, setKiwiCounter)}
                              className={kiwiCounter >= 1 ? "increase-decrease-active-btn" : "increase-decrease-default-btn"}
                              counter={kiwiCounter}
                              emoji="🥝"/>

                <Mainbutton name="Reset" resetCounters={resetCounters} type="button"/>

                <form onSubmit={handleSubmit}>
                    <Input label="Voornaam" name="firstname" type="text" value={formState.firstname}
                           onChange={handleChange}/>
                    <Input label="Achternaam" name="lastname" type="text" value={formState.lastname}
                           onChange={handleChange}/>
                    <Input label="Leeftijd" name="age" type="text" value={formState.age} onChange={handleChange}/>
                    <Input label="Postcode" name="zipcode" type="text" value={formState.zipcode}
                           onChange={handleChange}/>

                    <label htmlFor="delivery-frequency" className="delivery-freq-container">
                        Bezorgfrequentie
                        <br/>
                        <select className="select-box" name="deliveryfrequency" id="delivery-frequency" onChange={handleChange}
                                value={formState.deliveryfrequency}>
                            <option value="every-week">Iedere week</option>
                            <option value="every-2-weeks">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <div className="radiobutton-container">
                    <label htmlFor="afternoon">
                        <input type="radio"
                               id="afternoon"
                               name="moment"
                               value="afternoon"
                               onChange={handleChange}
                               checked={formState.moment === "afternoon"}
                        />
                        Overdag
                    </label>
                    <label htmlFor="evening">
                        <input type="radio"
                               id="evening"
                               name="moment"
                               onChange={handleChange}
                               value="evening"
                               checked={formState.moment === "evening"}/>
                        'S Avonds
                    </label>
                    </div>
                    <label htmlFor="message">
                        Opmerking
                        <br/>
                        <textarea name="message" id="message" cols="30" rows="10" value={formState.message}
                                  onChange={handleChange}></textarea>
                    </label>
                    <label htmlFor="conditions">
                        <input type="checkbox"
                               id="conditions"
                               name="conditions"
                               checked={formState.conditions}
                               onChange={handleChange}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Mainbutton name="Verzend" type="submit"/>

                </form>
            </main>


        </>
    );

}

export default App;