let contactId = 0;

export const addContact = data => {
    return {
        type: 'ADD_CONTACT',
        id: contactId++,
        data
    }
};

export const removeContact = data => {
    return {
        type: 'REMOVE_CONTACT',
        id: data
    }
}
