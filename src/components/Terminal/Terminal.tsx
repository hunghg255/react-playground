import React, { useEffect } from 'react';

import { Terminal as XTerminal } from 'xterm';

import styles from './index.module.scss';

const log_stream = (terminal: any) =>
  new WritableStream({
    write(chunk) {
      terminal.current.write(chunk);
    },
  });

const Terminal = ({ stream }: any) => {
  const refTerminal = React.useRef<HTMLDivElement>(null);
  const terminal = React.useRef<XTerminal>(new XTerminal());

  useEffect(() => {
    if (refTerminal.current) {
      terminal.current.open(refTerminal.current);
    }
  }, []);

  useEffect(() => {
    if (stream?.output?.pipeTo && terminal.current) {
      stream.output.pipeTo(log_stream(terminal));
    }
  }, [stream, terminal]);

  return (
    <>
      <p className='title_panel'>Terminal</p>
      <div className={styles.containerTerminal}>
        <div ref={refTerminal}></div>
      </div>
    </>
  );
};

export default Terminal;
