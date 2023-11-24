'use client';

import React from 'react';
import Preview from '~components/Preview/Preview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import MonacoEditor from '~components/MonacoEditor/MonacoEditor';
import Guide from '~components/Guide/Guide';

const EditorLayout = ({ tree, files }: any) => {
  return (
    <>
      <PanelGroup direction='horizontal'>
        <Panel defaultSizePercentage={40} minSizePercentage={20}>
          <Guide />
        </Panel>

        <PanelResizeHandle className='resize-col' />

        <Panel defaultSizePercentage={60}>
          <PanelGroup direction='vertical'>
            <Panel>
              <MonacoEditor files={files} />
            </Panel>
            <PanelResizeHandle className='resize-row' />
            <Preview tree={tree} />
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default EditorLayout;
