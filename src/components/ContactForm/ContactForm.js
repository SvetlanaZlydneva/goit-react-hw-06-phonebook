import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import styles from './ContactForm.module.css';

class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
    errorMessage: null,
  };

  handleChange = event => {
    const { errorMessage } = this.state;
    const { name, value } = event.currentTarget;
    if (errorMessage) this.setState({ errorMessage: null });
    this.setState({ [name]: value.toLowerCase() });
  };

  validateContact() {
    const { name } = this.state;
    const { contacts } = this.props;
    return contacts.map(item => item.name).includes(name);
  }

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    if (this.validateContact()) {
      this.setState({ errorMessage: `${name} is already in contacts` });
    } else {
      this.props.onSubmit({ name, number });
    }
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number, errorMessage } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.ContactsForm}>
          <input
            className={styles.contactName}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter Name"
            minLength="3"
            maxLength="25"
            required
          />
          <input
            type="tel"
            name="number"
            value={number}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            onChange={this.handleChange}
            placeholder="Enter Phone : 999-99-99"
            required
          />
          {errorMessage ? (
            <p className={styles.ErrorMessage}>{errorMessage}</p>
          ) : (
            <button type="submit">Add contact</button>
          )}
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ contacts: { items } }) => ({
  contacts: items,
});

const mapDispatchToPrors = dispatch => ({
  onSubmit: contact => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToPrors)(ContactsForm);
