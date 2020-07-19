import React from 'react';
import Container from '../Container';
import Section from '../Section';
import ContactsForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = () => (
  <Container>
    <Section title="Phonebook">
      <ContactsForm />
    </Section>
    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
  </Container>
);

export default App;
