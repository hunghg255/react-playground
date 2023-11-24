import React from 'react';

import styles from './index.module.scss';
import { Icon } from '~components/Icon/Icon';

const Guide = () => {
  return (
    <>
      <p className='title_panel'>
        <Icon icon='icon-guide' />
        Guide
      </p>
      <div className={styles.containerGuide}>Guide</div>
    </>
  );
};

export default Guide;
