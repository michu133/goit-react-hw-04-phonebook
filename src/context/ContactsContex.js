import { createContext, useEffect, useState } from 'react';

const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [searchContact, setsearchContact] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts.length > 0) {
        setContacts(parsedContacts);
      } else {
        localStorage.removeItem('contacts');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, searchContact, setsearchContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
