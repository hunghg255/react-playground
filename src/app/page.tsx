import dynamic from 'next/dynamic';

import Files from '@components/Files/Files';

import files from '../.templates.json';

import styles from './page.module.scss';

const Playground = dynamic(() => import('@components/Playground/Playground'), { ssr: false });

export default async function Home() {
  return (
    <main className={styles.main}>
      <header>Learn.react</header>

      <div>
        <Files />
        <Playground files={files} />
      </div>
    </main>
  );
}
