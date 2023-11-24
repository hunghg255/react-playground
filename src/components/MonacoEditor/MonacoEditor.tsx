import React, { useState } from 'react';

import styles from './index.module.scss';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Icon } from '~components/Icon/Icon';
import { useThrottleFn } from 'ahooks';
import { wcProxy } from '~components/Preview/store';
import classNames from 'classnames';

const MonacoEditor = ({ files }: any) => {
  const [fileSelected, setFileSelected] = useState<any>(null);
  const [content, setContent] = useState('');

  const onChangeValue = (e: any) => {
    setContent(e.target.value);

    if (wcProxy.value) wcProxy.value?.fs?.writeFile(fileSelected.filePath, e.target.value);
  };

  const onSelect = (file: any) => () => {
    setFileSelected(file);
    setContent(file.contents);
  };

  return (
    <div className={styles.wrap}>
      <p className='title_panel'>
        <Icon icon='icon-editor' />
        Editor
      </p>

      <PanelGroup direction='horizontal'>
        <Panel defaultSizePercentage={20}>
          <div className={styles.fileList}>
            {files.map((file: any, idx: number) => {
              return (
                <p
                  onClick={onSelect(file)}
                  key={`file-${idx}`}
                  className={classNames({
                    [styles.fileActive]: fileSelected?.filePath === file.filePath,
                  })}
                >
                  {file.filePath}
                </p>
              );
            })}
          </div>
        </Panel>
        <PanelResizeHandle className='resize-col' />
        <Panel defaultSizePercentage={80}>
          <textarea className={styles.textarea} value={content || ''} onChange={onChangeValue} />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default MonacoEditor;
