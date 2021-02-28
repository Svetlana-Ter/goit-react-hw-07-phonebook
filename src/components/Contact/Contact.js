import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

function Contact({ contact = {}, onDeleteContact }) {
  const { id, name, number } = contact;
  return (
    <li key={id} className={styles.listItem}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.number}>{number}</p>
      <button className={styles.btn} onClick={() => onDeleteContact(id)}>
        <ImCross />
      </button>
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func,
};
