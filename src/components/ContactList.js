import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import Contact from './Contact';
import Message from './Message';

import { removeContact } from '../actions/actions';

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

class ContactList extends Component {

    constructor() {
        super();
        this.state = {
            showMsg: false
        }
    }

    removeContact(id) {
        this.props.dispatch(removeContact(id));

        this.setState({
			showMsg: true
		});

    }

    render() {
        let hasContacts = undefined;
        if(this.props.contacts.length) {
            hasContacts = true;
        }
        return (
            <div className="contacts center-align">
                <h2>Your Contacts</h2>

                <Message text="Contact was removed!" showMsg={this.state.showMsg} cssClass="success" />

                {hasContacts
                    ? <ul className="contacts-grid">
                        {this.props.contacts.map((contact, i) =>
                            <Contact key={i} contacts={contact} removeContact={this.removeContact.bind(this)} />
                        )}
                    </ul>
                    : <p>You have no contacts. <Link to="/new">Add some</Link>.</p>
                }

            </div>
        );
    }
}

export default connect(mapStateToProps)(ContactList);
