import React from 'react';

import styles from './index.module.scss';

const MonacoEditor = () => {
  return (
    <>
      <p className='title_panel'>Editor</p>
      <div className={styles.containerMonacoEditor}>MonacoEditor</div>
    </>
  );
};

export default MonacoEditor;
