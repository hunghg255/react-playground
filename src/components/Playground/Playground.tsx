'use client';

import React, { useEffect, useState } from 'react';

import { proxy, useSnapshot } from 'valtio';

import { statusProxy } from '@components/Playground/store';
import Terminal from '@components/Terminal/Terminal';
import { getWebContainer } from 'src/composables/webContainer';

import styles from './index.module.scss';
import { Panel, PanelResizeHandle } from 'react-resizable-panels';

const wcUrlProxy = proxy<{ value: string }>({ value: '' });

const Playground = ({ files }: any) => {
  const { value: status } = useSnapshot(statusProxy);
  const { value: iframeUrl } = useSnapshot(wcUrlProxy);
  const [stream, setStream] = useState<any>();

  useEffect(() => {
    async function startDevServer() {
      const wc = await getWebContainer();

      statusProxy.value = 'mount';

      await wc.mount(files);

      statusProxy.value = 'install';

      const installProcess = await wc.spawn('npm', ['install']);

      setStream(installProcess);

      const installExitCode = await installProcess.exit;
      if (installExitCode !== 0) {
        statusProxy.value = 'error';
        throw new Error('Unable to run npm install');
      }

      statusProxy.value = 'start';

      const devProcess = await wc.spawn('npm', ['run', 'dev']);

      wc.on('server-ready', (port, url) => {
        statusProxy.value = 'ready';

        wcUrlProxy.value = url;
      });

      wc.on('error', () => {
        statusProxy.value = 'error';
      });

      setStream(devProcess);
    }

    startDevServer();
  }, []);

  return (
    <>
      <Panel>
        <p className='title_panel'>Preview</p>

        <div className={styles.containerPlayground}>
          {iframeUrl && <iframe src={iframeUrl} width={'100%'} height={'100%'} />}
          {status !== 'ready' && <div>{status}ing...</div>}
        </div>
      </Panel>

      <PanelResizeHandle className='resize-row' />

      <Panel>
        <Terminal stream={stream} />
      </Panel>
    </>
  );
};

export default Playground;
