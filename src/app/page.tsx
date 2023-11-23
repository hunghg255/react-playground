import dynamic from 'next/dynamic';

import styles from './page.module.scss';

const EditorLayout = dynamic(() => import('@components/EditorLayout/EditorLayout'), { ssr: false });

export default async function Home() {
  return (
    <main className={styles.main}>
      <header>Learn.react</header>

      <div>
        <EditorLayout />
      </div>
    </main>
  );
}
