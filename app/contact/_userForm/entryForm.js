'use client';

import styles from '../page.module.css'
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/isEmail';
import React, { useEffect, useState } from 'react';
import postUserMessage from './postUserMessage';

export default function EntryForm() {
  // State variables.
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userMessageInput, setUserMessageInput] = useState('');
  const [isSecondInputVisible, setIsSecondInputVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
    // Check whether to render the 2nd box.
    if (event.key != 'Enter') {
      return;
    }
    if (inputType === 'email') {
      if (isEmail(userEmailInput)) {
        console.log('DEV: email input box filled.', userEmailInput, ' Rendering second box...');
        setIsSecondInputVisible(true); // Also locks the first input box.
      } else {
        console.log('DEV: email input box filled, but not a valid email.', userEmailInput);
      }
    }

    // Check whether to submit the form.
    if (inputType === 'message' && userMessageInput.length > 0) {
      console.log('DEV: message input box filled.', userMessageInput, 'Submitting form...');

      postUserMessage(userEmailInput, userMessageInput) // validation done in Express
        .then((response) => {
          console.log('DEV: Form submitted.');
          console.log('response: ', response);
          setIsFormSubmitted(true);
        })
        .catch((error) => {
          console.error('DEV: Form submission failed.', error);
        });
    }
    
  };

  // Handles resizing of message textarea with user input. From (https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize) ( thank you )
  // const tx = document.getElementsByTagName("textarea");
  // for (let i = 0; i < tx.length; i++) {
  //   tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  //   tx[i].addEventListener("input", OnInput, false);
  // }
  
  // function OnInput() {
  //   this.style.height = 'auto';
  //   this.style.height = (this.scrollHeight) + "px";
  // }


  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      {/* Render email prompt first. */}
      <p className={styles.system}>Please enter your email address:</p>
      <p className={styles.user}>
      <input
        className={styles.input}
        value={userEmailInput}
        onChange={(e) => handleInputChange(e, 'email')}
        onKeyDown={(e) => handleKeyDown(e, 'email')}
        autoFocus={true}
        readOnly={isSecondInputVisible}
      />

      </p>

      {// Render message prompt after a valid email's entered.
        // TODO change second input to textarea to allow auto-=expand wiht user inpu
        isSecondInputVisible && (
          <div>
            <p className={styles.system}>Validating...</p>
            <p className={styles.system}>Address valid.</p>
            <p className={styles.system}>Please enter your message:</p>
            <p className={styles.user}>
            <input
              input className={styles.input}
              type='text'
              value={userMessageInput}
              onChange={(e) => handleInputChange(e, 'message')}
              onKeyDown={(e) => handleKeyDown(e, 'message')}
              autoFocus={true}
              readOnly={isFormSubmitted}
              />
            </p>
          </div>
        )

      }{
        // Render a thank-you message on form submission.
        isFormSubmitted && (
          <div>
            <p className={styles.system}>Contacting server...</p>
            <p className={styles.system}>Message submitted.</p>
            <p className={styles.system}>Thank you for your message. Enjoy the rain.</p>
          </div>
        )
      }
    </form >
  )
}
