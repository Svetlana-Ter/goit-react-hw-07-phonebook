import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from '../Contact/Contact';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

function ContactsList({ contacts = [], onDeleteContact }) {
  return (
    <TransitionGroup className={styles.contactsList} component='ul'>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={250} classNames={styles}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
