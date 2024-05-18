import React from 'react';

export default function Footer (props) {
    return (
        <div className="container center-align">
            <p>Contact App &copy; {props.date.getFullYear()}</p>
        </div>
    );
}
