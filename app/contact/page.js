// The design of this page + children was heavily inspired by (https://codepen.io/jangajdosik/pen/BOmYRm),
// and some code was borrowed. The program was modified to fit the framework.
'use client';

import styles from './page.module.css'
import React, { useEffect, useRef } from 'react';

// TODO:
//  - add red exit circle to go back to the home page.
//  - add email string validation.
//  - add a prompt for the user's message.
//  - add database upload/email sending with naughty word and attack string validation.
//  - add a success message / terminal 'deboot'.
//  - turn the terminal into a modal over the landing page. (https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)
//  - add this sick matrix background: (https://codepen.io/yaclive/pen/EayLYO)

let messageStartString = 'PS C:\\> '

export default function Contact() {
  return (
    <main className={styles.terminalContainer}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <p>contact.</p>
        </div>
        <div className={styles.content}>
          <p className={styles.user}>{messageStartString}run(promptForContactInformation)</p>
          <p className={styles.system}>Please enter your email address.</p>
          {inputBox()}
          {/* TODO: Continue user interaction here. */}
        </div>
      </div>
    </main>
  )
}

function inputBox() {
  // TODO: add validation of email and message (validity, no naughty words, no
  //       attacks.

  // This code focuses the input box when the box is initially rendered.
  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current.focus();
  }, []);

  return (
      <form className={styles.form}>
          <p className={styles.user}>
              <label htmlFor='userInput'>{messageStartString}</label>
              <input className={styles.input} id='userInput' type='text'
                  ref={inputRef} />
          </p>
      </form>
  )
}
