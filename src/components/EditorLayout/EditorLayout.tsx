'use client';

import Files from '@components/Files/Files';
import files from '../../templates.json';
import React from 'react';
import Playground from '@components/Playground/Playground';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import MonacoEditor from '@components/MonacoEditor/MonacoEditor';
import Documentation from '@components/Documentation/Documentation';

interface IPropsEditorLayout {}

const EditorLayout = (props: IPropsEditorLayout) => {
  return (
    <>
      <PanelGroup direction='horizontal'>
        <Panel defaultSizePercentage={40} minSizePercentage={20}>
          <Documentation />
        </Panel>

        <PanelResizeHandle className='resize-col' />

        <Panel defaultSizePercentage={60}>
          <PanelGroup direction='vertical'>
            <Panel>
              <MonacoEditor />
            </Panel>
            <PanelResizeHandle className='resize-row' />
            <Playground files={files} />
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default EditorLayout;
