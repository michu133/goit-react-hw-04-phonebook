import { ContactsContext } from 'context/ContactsContex';
import { useContext } from 'react';

export const ContactList = ({ list }) => {
  const { contacts, setContacts } = useContext(ContactsContext);

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
