// The design of this page + children was heavily inspired by (https://codepen.io/jangajdosik/pen/BOmYRm),
// and some code was borrowed. The program was modified to fit the framework.
'use client';

import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'

// TODO:
//  - Features:
//    - add email and message string validation (no naughty words, no attacks).
//    - add database submission with email notification to me.
//  - UI:
//    - add a countdown and reroute to main page after the user submits.
//    - add a launch/deboot animation to fade thescreen to white on transition,
//      and then fade in the content.

//  - Extension - IE leave til after other sections are in a reasonable state:
//    - turn the terminal into a modal over the landing page. (https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)
//    - homepage background fades to black and terminal is surrounded by digital
//      rain as user types: (https://codepen.io/yaclive/pen/EayLYO)

let messageStartString = 'PS C:\\> '

export default function Contact() {
  return (
    <main className={styles.terminalContainer}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <Link href='/' className={styles.btn} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.user}>{messageStartString}run(promptForContactInformation)</p>
          <p className={styles.system}>Please enter your email address.</p>
          {form()}
        </div>
      </div>
    </main>
  )
}

function form() {
  // TODO:
  //  - add validation of email and message (validity, no naughty words, no attacks.

  const [userEmailInput, setUserEmailInput] = useState('');
  const [userMessageInput, setUserMessageInput] = useState('');
  const [isSecondInputVisible, setIsSecondInputVisible] = useState(false);
  // ^ Also controls the read-only state of the first input box.
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // TODO: implement form submission.

  // Update stored values on input change.
  const handleInputChange = (event, inputType) => {
    const inputValue = event.target.value;
    if (inputType === 'email') {
      setUserEmailInput(inputValue);
    } else if (inputType === 'message') {
      setUserMessageInput(inputValue);
    }
  };

  // Handle key presses.
  const handleKeyDown = (event, inputType) => {
    // Check to render 2nd box.
    if (event.key === 'Enter' && inputType === 'email' && userEmailInput.length >= 5) {
      console.log('DEV: email input box filled.', userEmailInput, ' Rendering second box...');
      setIsSecondInputVisible(true); // Also locks the first input box.
    }

    // Check to submit form.
    else if (event.key === 'Enter' && inputType === 'message' && userMessageInput.length > 0) {
      console.log('DEV: message input box filled.', userMessageInput, ' Submitting form...');
      // TODO: implement backend form submission.
      setIsFormSubmitted(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <p className={styles.user}>
        <label>{messageStartString}</label>
        <input
          input className={styles.input}
          type='text'
          value={userEmailInput}
          onChange={(e) => handleInputChange(e, 'email')}
          onKeyDown={(e) => handleKeyDown(e, 'email')}
          autoFocus={true}
          readOnly={isSecondInputVisible} // Email input becomes read-only when
        // the message input is visible.
        />
      </p>

      {
        isSecondInputVisible && (
          <p className={styles.user}>
            <label>{messageStartString}</label>
            <input
              input className={styles.input}
              type='text'
              value={userMessageInput}
              onChange={(e) => handleInputChange(e, 'message')}
              onKeyDown={(e) => handleKeyDown(e, 'message')}
              autoFocus={true}
              readOnly={isFormSubmitted} // Email input becomes read-only when
            // the form has been submitted.
            />
          </p>

        )
      }{
        isFormSubmitted && (
        <div>
          <p className={styles.system}>
            Your message has been submitted.
          </p>
          <p className={styles.system}>
            Thank you!
          </p>
        </div>
        )
      }
    </form >
  )
}
