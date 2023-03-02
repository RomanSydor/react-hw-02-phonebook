import s from "./ContactItem.module.css";

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.cintactItem}>
      {contact.name}: {contact.number}
      <button
        className={s.deleteBtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
