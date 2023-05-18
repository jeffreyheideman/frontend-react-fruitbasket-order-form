import React from 'react';

function Input({ label, name, type, value, onChange }) {
    return (
        <>

            <label htmlFor={name} className="input-label">
                {label}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                />
            </label>
        </>
    );
}

export default Input;