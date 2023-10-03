import { nanoid } from 'nanoid';
import { ContactsContext } from 'context/ContactsContex';
import { useContext, useState } from 'react';

export const ContactForm = () => {
  const [number, setNumber] = useState('');

  const [name, setName] = useState('');

  const { contacts, setContacts } = useContext(ContactsContext);

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createContact({ name: name, number: number });

    setName('');
    setNumber('');
  };

  const createContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    const contactCheck = contacts.find(({ name }) => name === data.name);

    if (contactCheck) {
      return alert(`${data.name} is already in contacts!`);
    }

    setContacts(curr => [...curr, newContact]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nanoid()}>
        Name
        <input
          id={nanoid()}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={nanoid()}>
        Number
        <input
          id={nanoid()}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
