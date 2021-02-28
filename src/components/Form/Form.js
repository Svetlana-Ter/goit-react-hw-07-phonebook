import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class Form extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func,
    messageSubmit: PropTypes.func,
  };
  state = {
    name: '',
    number: '',
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { onSubmit, contacts, messageSubmit } = this.props;
    event.preventDefault();
    const namesArray = contacts.map(contact => contact.name);
    let message = '';
    if (namesArray.includes(this.state.name)) {
      message = `${this.state.name} is already in Phonebook.
      Add another contact.`;
    } else if (this.state.name === '' || this.state.number === '') {
      message = 'Add contact, please';
    }
    if (message) {
      messageSubmit(message);
      setTimeout(() => {
        messageSubmit('');
      }, 3000);
    } else {
      onSubmit(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor='nameId'>Name</label>
        <input
          className={styles.inputField}
          name='name'
          type='text'
          value={name}
          onChange={this.handleInputChange}
          id='nameId'
        />
        <label htmlFor='numberId'>Number</label>
        <input
          className={styles.inputField}
          name='number'
          type='text'
          value={number}
          onChange={this.handleInputChange}
          id='numberId'
        />
        <button type='submit' className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
