import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useContext } from 'react';
import { ContactsContext } from 'context/ContactsContex';

export const App = () => {
  const { contacts, searchContact } = useContext(ContactsContext);

  const findContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchContact)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
        {findContact().length ? (
          <ContactList list={findContact()}></ContactList>
        ) : (
          <p>No matches found!</p>
        )}
    </div>
  );
};
