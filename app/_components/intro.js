'use client'
import styles from './intro.module.css';
import React, { useState, useEffect } from 'react';
import UnScrambler from './unscrambler.js';

// Hex code: 57 65 20 6C 69 76 65 20 69 6E 20 61 20 66 75 74 75 72 65 20 66 65 77 20 69 6D 61 67 69 6E 65 64 20 70 6F 73 73 69 62 6C 65 2E

export default function Intro() {
  const [content, setContent] = useState('encodedHex');

  const timeout = 0; // TODO prod 2000
  const handleClick = () => {
    if (content === 'encodedHex') {
      setTimeout(() => {
        // Prevents too-rapid clicking
        // Would transitions to run if any were tied to the state
        setContent('decodedHex');
      }, timeout);
    } else if (content === 'decodedHex') {
      setTimeout(() => {
        setContent('menu');
      }, timeout);
    }
  };

  // let decodedParagraphStyle = decodedTextFadeIn ? styles.decodedTextBox : styles.decodedTextBoxInvisible;
  // let menuStyle = menuFadeIn ? styles.menu : styles.menuInvisible;

  // Update render based on state
  // TODO: improve animation between states
  let allComponents = (
    <div className={styles.main} onClick={handleClick}>
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
  );

  if (content === 'menu') {
    return null;
  } else {
    return <div> {allComponents} </div>;
  }
}


function scramblingGrid() {
  const hexEncoded = ['5765', '206C', '6976', '6520', '696E', '2061', '2066', '7574', '7572', '6520', '6665', '7720', '696D', '6167', '696E', '6564', '2070', '6F73', '7369', '626C', '652E'];
  return hexEncoded.map((val) => (
    scrambleText('0000', val)
  ))
}

function scrambleText(initialValue, finalValue) {
  const [text, setText] = useState(initialValue);

  const stepDuration = 500;
  const totalDuration = 5000;
  const elementLength = 4;

  useEffect(() => {
    let intervalId;
    let counter = 0;

    const scramble = () => {
      const randomValue = Math.random().toString(36).substring(2, 2 + elementLength).toUpperCase();
      setText(randomValue);
      counter += stepDuration;

      if (counter >= totalDuration) {
        clearInterval(intervalId);
        setText(finalValue);
      }
    };

    intervalId = setInterval(scramble, stepDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [initialValue, finalValue]);

  return <p>{text}</p>;
};

// function decodedGrid() {
//   // 'We live in a future few imagined possible.'
//   const decoded = ['We', ' l', 'iv', 'e ', 'in', ' a', ' f', 'ut', 'ur', 'e ', 'fe', 'w ', 'im', 'ag', 'in', 'ed', ' p', 'os', 'si', 'bl', 'e.']
//   return decoded.map((val) => (
//     <p>{val}</p>
//   ));
// }

function decodedParagraph() {
  // We live in a future few imagined possible.
  return <UnScrambler text='We live in a future few imagined possible.' />;
}







// function buildRoutes() {
//     // Returns (<Route/>, index)
//     const routeData = [
//         ['Learning Machines', 'learningMachines', 3],
//         ['•', '/', 13],         // ['Blog', 'blog', 13],
//         ['•', '/', 20],         // ['Modeling', 'modeling', 20],
//         ['•', '/', 27],         // ['Software', 'software', 27],
//         ['•', '/', 37],         // ['???', '???', 37],
//         ['Contact', 'contact', 47]
//     ];
//     const routeElements = routeData.map(
//         ([title, route, index]) => ({
//             'route': buildLink(title, route),
//             'index': index
//         })
//     );
//     return routeElements;
// }

// function buildLink(title, route) {
//     return <Link href={route} className={styles.pop}>{title}</Link>;
// }
