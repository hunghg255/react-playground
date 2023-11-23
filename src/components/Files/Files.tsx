import React from 'react';

import styles from './index.module.scss';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const Files = () => {
  return (
    <PanelGroup direction='horizontal'>
      {/* <Panel minSizePixels={50} maxSizePixels={50}>
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
              width: '24px',
              height: '24px',
            }}
          >
            <path
              fill='currentColor'
              d='M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z'
            />
          </svg>
        </div>
      </Panel> */}

      <Panel minSizePixels={400} maxSizePixels={600}>
        List File
      </Panel>

      <PanelResizeHandle
        style={{
          width: '2px',
          cursor: 'col-resize',
          background: 'gray',
        }}
      />

      <Panel key={'edit'}>Edit File</Panel>
    </PanelGroup>
  );
};

export default Files;
