'use client';

import Files from '@components/Files/Files';
import files from '../../.templates.json';
import React from 'react';
import Playground from '@components/Playground/Playground';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

interface IPropsEditorLayout {}

const EditorLayout = (props: IPropsEditorLayout) => {
  return (
    <>
      <PanelGroup direction='horizontal'>
        <Panel>
          <Files />
        </Panel>

        <PanelResizeHandle
          style={{
            width: '5px',
            cursor: 'col-resize',
            background: 'gray',
          }}
        />

        <Panel>
          <PanelGroup direction='vertical'>
            <Playground files={files} />
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default EditorLayout;
