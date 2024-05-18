import React from 'react';

export default function Contact(props) {
    return (
        <li className="contact">
            <p>First name: {props.contacts.firstName}</p>
            <p>Last name: {props.contacts.lastName}</p>
            <p>Email: {props.contacts.email}</p>
            <p><a href="#" onClick={e => {
                e.preventDefault()
                props.removeContact(props.contacts.id);
            }}>Remove</a></p>
        </li>
    );
}
