
export const contacts = (contacts = [], action) => {
    switch(action.type) {
        case 'ADD_CONTACT':

            // Add the id to the data object
            const data = Object.assign({}, action.data, {id: action.id});

            return contacts.concat([data]);

        case 'REMOVE_CONTACT':

            function updateContacts(contact) {
                if(contact.id !== action.id) {
                    return contact;
                }
            }

            return contacts.filter(updateContacts);

        default:
            return contacts;

    }
}
