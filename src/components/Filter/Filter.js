import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.search}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter Name to Search"
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
