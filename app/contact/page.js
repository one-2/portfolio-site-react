// The design of this page was heavily inspired by (https://codepen.io/jangajdosik/pen/BOmYRm),
// and some code was borrowed. The program was modified to fit the framework.

import styles from './page.module.css'

// TODO: add user input, validation/screening, live text rendering, email sending
//       or db upload, and this sick matrix background: (https://codepen.io/yaclive/pen/EayLYO)

// NOTE: rendering workaround for document. bug in the above: (https://stackoverflow.com/questions/24647839/referenceerror-document-is-not-defined-in-plain-javascript)
export default function Contact() {
  let messageStartString = '> '
  return (
    <main className={styles.main}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <p>contact.</p>
        </div>
        <div className={styles.content}>
        <p className={styles.user}>{messageStartString}run(retrieveContactInformation);</p>
        <p className={styles.system}>Please input your email address.</p>
        <p className={styles.user}>{messageStartString}...</p>
        <p className={styles.system}>Please input your message.</p>
        <p className={styles.user}>{messageStartString}...</p>
        </div>
      </div>
    </main>
  )
}
