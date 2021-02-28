import styles from './Filter.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

function Filter({ value = '', onChange }) {
  const filterId = shortid.generate();
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input className={styles.inputField} value={value} onChange={onChange} id={filterId} />
    </div>
  );
}

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
