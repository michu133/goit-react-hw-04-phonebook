import { ContactsContext } from 'context/ContactsContex';
import { nanoid } from 'nanoid';
import { useContext } from 'react';

export const Filter = () => {
  const { searchContact, setsearchContact } = useContext(ContactsContext);

  const filterChange = ({ target }) => {
    const normalizedValue = target.value.toLowerCase();
    setsearchContact(normalizedValue);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        id={nanoid()}
        name="filter"
        onChange={filterChange}
        value={searchContact}
      ></input>
    </div>
  );
};
