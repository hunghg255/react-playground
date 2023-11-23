'use client';

import Files from '@components/Files/Files';
import files from '../../.templates.json';
import React from 'react';
import Playground from '@components/Playground/Playground';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Sidebar from '@components/Sidebar/Sidebar';
import ListFile from '@components/ListFile/ListFile';
import MonacoEditor from '@components/MonacoEditor/MonacoEditor';

interface IPropsEditorLayout {}

const EditorLayout = (props: IPropsEditorLayout) => {
  return (
    <>
      <PanelGroup direction='horizontal'>
        <Panel defaultSizePercentage={60} minSizePercentage={40}>
          <PanelGroup direction='horizontal'>
            <Sidebar />

            <Panel defaultSizePercentage={25} minSizePercentage={15}>
              <ListFile />
            </Panel>

            <PanelResizeHandle
              style={{
                width: '1px',
                cursor: 'col-resize',
                background: 'gray',
              }}
            />
            <Panel defaultSizePercentage={75}>
              <MonacoEditor />
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle
          style={{
            width: '5px',
            cursor: 'col-resize',
            background: 'gray',
          }}
        />

        <Panel defaultSizePercentage={40}>
          <PanelGroup direction='vertical'>
            <Playground files={files} />
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default EditorLayout;
