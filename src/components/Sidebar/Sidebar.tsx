import React from 'react';

import styles from './index.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.containerSidebar}>
      <div
        style={{
          height: '100%',
          background: 'black',
          borderRight: '1px solid gray',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        <svg
          className='cBt-Va_ToolbarIconActive OG5fOa_Icon'
          viewBox='0 0 24 24'
          style={{
            width: '20px',
            height: '20px',
          }}
        >
          <path
            fill='currentColor'
            d='M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
