import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    ...contact,
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
