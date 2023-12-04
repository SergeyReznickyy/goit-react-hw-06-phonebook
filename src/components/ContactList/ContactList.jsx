import { useSelector, useDispatch } from 'react-redux';

import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './contact.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contact_list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </ul>
  );
};
