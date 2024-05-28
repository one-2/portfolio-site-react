import React, { useState, useEffect } from 'react';
import styles from '../intro.module.css';

export default function UnScrambler({ text }) {
  const scramble = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const [scrambleText, setScrambleText] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let newScrambleText = '';
    for (let i = 0; i < text.length; i++) {
      if (i <= counter) {
        newScrambleText += text[i];
      } else {
        newScrambleText += scramble[Math.floor(Math.random() * scramble.length)];
      }
    }
    setScrambleText(newScrambleText);
    if (counter < text.length) {
      setTimeout(() => setCounter(counter + 1), 100); // delay time
    }
  }, [text, counter]); // dependency array

  return <p className={styles.decodedTextBox}>{scrambleText}</p>;
};
