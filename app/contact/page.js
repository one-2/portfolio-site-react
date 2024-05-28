// The design of this page + children was heavily inspired by (https://codepen.io/jangajdosik/pen/BOmYRm),
// and some code was borrowed. The program was modified to fit the framework.

// TODO: add as a box in the bottom right, over all pages.
//  - Features:
//    - add backend database submission with email notification to me.
//    - homepage background fades to black on the way in and white on the way out
//    - tune terminal appearance time

'use client'
import styles from './page.module.css'
import Link from 'next/link'
import EntryForm from './_userForm/entryForm';
import { MatrixRainingLetters } from './_userForm/_rain/rain';
import React from 'react';


let messageStartString = 'PS C:\\> ' // Duplicate code

export default function Contact() {
  return (
    <div className={styles.terminalContainer}>
      <div>
        <React.Fragment>
          <MatrixRainingLetters />
        </React.Fragment>
      </div>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <Link href='/' className={styles.btn} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.user}>{messageStartString}run(promptForContactInformation)</p>
          <EntryForm />
        </div>
      </div>
    </div>
  )
}
