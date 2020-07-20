import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Section from '../Section';
import ContactsForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = ({ contactsLenght }) => (
  <Container>
    <ContactsForm />
    {contactsLenght > 0 && (
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    )}
  </Container>
);

App.propTypes = {
  contactsLenght: PropTypes.number.isRequired,
};

export default App;
