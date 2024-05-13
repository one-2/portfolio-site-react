import styles from './page.module.css';

import Grid from './_components/grid';

// TODO: add live decoding/rendering on hover.

export default function Home() {
  // Hex code: 57 65 20 6C 69 76 65 20 69 6E 20 61 20 66 75 74 75 72 65 20 66 65 77 20 69 6D 61 67 69 6E 65 64 20 70 6F 73 73 69 62 6C 65 2E
  return (
    <main className={styles.main}>
      <div className={styles.description}
        style={{ paddingLeft: '3%', paddingTop: '1%', paddingBottom: '1%' }}>
        <h1>Hello.</h1>
      </div>
      <Grid />

    </main>
  );
}
