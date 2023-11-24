import dynamic from 'next/dynamic';

import styles from './page.module.scss';
import { getFiles } from 'src/scripts/genTemplate';

const EditorLayout = dynamic(() => import('~components/EditorLayout/EditorLayout'), { ssr: false });

export default async function Home() {
  const { tree, files } = await getFiles();

  return (
    <main className={styles.main}>
      <header>Learn.react</header>

      <div>
        <EditorLayout tree={tree} files={files} />
      </div>
    </main>
  );
}
