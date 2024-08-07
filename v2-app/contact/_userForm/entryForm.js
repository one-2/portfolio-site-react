'use client';

import styles from '../page.module.css'

import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/isEmail';

import React, { useState } from 'react';

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
    else if (inputType === 'message' && userMessageInput.length > 0) {
      console.log('DEV: message input box filled.', userMessageInput, ' Submitting form...');
      const email = normalizeEmail(userEmailInput);
      const message = userMessageInput; // We don't need to validate the message: (https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected)
      // TODO: implement backend form submission.
      setIsFormSubmitted(true);
    }
  };


  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      {/* Render email prompt first. */}
      <p className={styles.system}>Please enter your email address:</p>
      <p className={styles.user}>
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

      {// Render message prompt after a valid email's entered.
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
                readOnly={isFormSubmitted} // Message input becomes read-only when
              // the form has been submitted.
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
