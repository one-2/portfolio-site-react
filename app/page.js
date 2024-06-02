import styles from './page.module.css';
import Intro from './_components/_intro/intro';
import MainNavGrid from './_components/_mainNavGrid/mainNavGrid';

// TODO:
// - add the contact page as an overlay in the bottom right
// - finish neural net map
// - add 3411 project

export const metadata = {
  title: 'Stephen Elliott',
  description: '...',
}

export default function Landing() {
  return (
    <div className={styles.main}>
      <Intro />
      <MainNavGrid />
    </div>
  );
}
