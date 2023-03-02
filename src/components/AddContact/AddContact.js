import { nanoid } from "nanoid";
import s from "./AddContact.module.css";

const AddContact = ({ onAddContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(e.target.id.value, e.target.name.value, e.target.number.value);
  };

  return (
    <form className={s.addContactForm} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={nanoid()} />
      <p className={s.title}>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p className={s.title}>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContact;
