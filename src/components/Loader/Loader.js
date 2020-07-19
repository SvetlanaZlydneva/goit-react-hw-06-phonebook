import React from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <Spinner
      type="Hearts"
      color="#3f51b5"
      height={150}
      width={150}
      timeout={5000} // 3 secs
    />
  </div>
);

export default Loader;
