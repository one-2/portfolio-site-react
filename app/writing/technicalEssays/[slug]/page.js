
import WritingPage from '../../writingPage.js';
import styles from '../page.module.css';

export default function Page({params: {slug}}) {
  return <WritingPage siteSection='essays' slug={slug} styles={styles} />
}
