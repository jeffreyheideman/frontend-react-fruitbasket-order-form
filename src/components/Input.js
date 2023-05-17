import React from 'react';

function Input({ label, name, type, value, onChange }) {
    return (
        <>
            <label htmlFor={name}>
                {label}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
            <br />
        </>
    );
}

export default Input;