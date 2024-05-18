import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Main(props) {
    return (
        <div className="App">
            <Header />

            <div className="container">
                {props.children}
            </div>

            <Footer date={new Date()} />
        </div>
    );
}
