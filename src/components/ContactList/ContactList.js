import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/actions';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, ...contact }) => (
      <li key={id}>
        <ContactItem
          contact={contact}
          deleteContact={() => deleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const getVisibleTodos = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) => name.includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
