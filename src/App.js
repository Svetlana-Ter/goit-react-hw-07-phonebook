import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import { CSSTransition } from 'react-transition-group';
import Logo from './components/Logo/Logo';
import Error from './components/Error/Error';
import { connect } from 'react-redux';
import contactsOperations from './redux/contacts/contacts-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';

class App extends React.Component {
  static propTypes = {
    message: PropTypes.string,
  };

  state = {
    message: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleSubmit = message => {
    this.setState({ message });
  };

  render() {
    const { message } = this.state;
    const { contacts, loading } = this.props;
    return (
      <>
        <CSSTransition
          in={message}
          timeout={250}
          classNames={{
            enter: styles.errorEnter,
            enterActive: styles.errorEnterActive,
            exit: styles.errorExit,
            exitActive: styles.errorExitActive,
          }}
          unmountOnExit
        >
          <Error message={message} />
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames={styles} unmountOnExit>
          <Logo />
        </CSSTransition>
        <Form messageSubmit={this.handleSubmit} />
        <CSSTransition in={contacts.length > 0} timeout={250} classNames={styles} unmountOnExit>
          <h2 className={styles.subtitle}>Contacts</h2>
        </CSSTransition>
        <CSSTransition in={contacts.length > 1} timeout={250} classNames={styles} unmountOnExit>
          <Filter />
        </CSSTransition>
        {loading ? <h1>Загружаем...</h1> : <ContactsList />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
