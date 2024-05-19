'use client'
import styles from './page.module.css';
import Intro from './_components/intro';
import MainNavGrid from './_components/mainNavGrid';

// TODO:
// - add resume link to linkedin
// - fix centering of the main content 
// - unify logic for rendering the card menus
// - add the contact page as an overlay in the bottom right
// - finish neural net map
// - add 3411 project
// - go live

export default function landingPage() {
  return (
    <div className={styles.main}>
      {/* <div className={styles.description}
        style={{ paddingLeft: '3%', paddingTop: '1%', paddingBottom: '1%' }}>
        <h1>Hello.</h1>
      </div> */}
      <Intro />
      {/* <MainNavGrid /> */}
    </div>
  );
}
