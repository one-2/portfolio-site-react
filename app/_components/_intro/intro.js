'use client'
import styles from './intro.module.css';
import React, { useState } from 'react';
import UnScrambler from './_components/unscrambler';
import TextScrambler from './_components/textScrambler';

// Hex code: 57 65 20 6C 69 76 65 20 69 6E 20 61 20 66 75 74 75 72 65 20 66 65 77 20 69 6D 61 67 69 6E 65 64 20 70 6F 73 73 69 62 6C 65 2E

const Intro = () => {
  const [content, setContent] = useState('encodedHex');

  const overclickPrevention = 300;
  const transitionDelay = 2000; // TODO prod 2000
  const handleClick = () => {
    if (content === 'encodedHex') {
      setTimeout(() => {
        setContent('decodedHex');
      }, overclickPrevention);
    } else if (content === 'decodedHex') {
      setTimeout(() => {
        // Start the derender transition
        setContent('menu');
        setTimeout(() => {
          // Derender the page
          setContent('none');
        }, transitionDelay);
      }, overclickPrevention);
    }
  };

  // let decodedParagraphStyle = decodedTextFadeIn ? styles.decodedTextBox : styles.decodedTextBoxInvisible;
  let mainStyle = ((content === 'menu') ? styles.mainInvisible : styles.main);

  let allContent = (
    <div className={mainStyle} onClick={handleClick}>
      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <div className={styles.grid}>
            {scramblingGrid()}
          </div>
        </div>
        <div className={styles.subContainer}>
          {content != 'encodedHex' ? decodedParagraph() : null}
        </div>
      </div>
    </div>
  )
  // Update render by state
  if (content === 'none') {
    // Derender so the menu behind becomes clickable
    return null;
  } else {
    // Render content in front of the nav menu
    return (
      <div>
        {allContent}
      </div>
    );
  }
}

function scramblingGrid() {
  const hexEncoded = ['5765', '206C', '6976', '6520', '696E', '2061', '2066', '7574', '7572', '6520', '6665', '7720', '696D', '6167', '696E', '6564', '2070', '6F73', '7369', '626C', '652E'];
  
  return hexEncoded.map((val, index) => (
    <TextScrambler key={index} initialValue='0000' finalValue={val} />
  ))
}

function decodedParagraph() {
  // We live in a future few imagined possible.
  return <UnScrambler text='We live in a future few imagined possible.' />;
}

export default Intro;
