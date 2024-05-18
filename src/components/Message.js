import React from 'react';

export default function Message(props) {
    return <p className={props.showMsg ? 'show ' : 'hide ' + props.cssClass}>{props.text}</p>;
}
