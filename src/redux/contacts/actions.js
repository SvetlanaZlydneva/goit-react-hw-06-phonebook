import { v4 as uuidv4 } from 'uuid';
import types from './types';

const addContact = contact => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    ...contact,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
