import styles from './Error.module.css';
import PropTypes from 'prop-types';
export default function Error({ message = '' }) {
  return (
    <div className={styles.errorWrap}>
      <h2 className={styles.errorText}>{message}</h2>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
