import React from 'react';

export default function TextInput(props) {
    return (
        <li className="form-field">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required />
            {/* Instead of type out all the properties and map them to their correct fields, you can use the spread operator here
                as long as the property comes in correctly from the parent.  */}
        </li>
    );
}
