'use client'
import styles from './intro.module.css';
import React, { useState, useEffect } from 'react';

// Hex code: 57 65 20 6C 69 76 65 20 69 6E 20 61 20 66 75 74 75 72 65 20 66 65 77 20 69 6D 61 67 69 6E 65 64 20 70 6F 73 73 69 62 6C 65 2E

export default function Intro() {
  const [content, setContent] = useState('movingHex');
  const [fadeOut, setFadeOut] = useState(false);

  const handleFirstClick = () => {
    setContent('stillHex');
  };

  const handleSecondClick = () => {
    // Start the fade-out transition
    setFadeOut(true);
    // After the transition duration, change the content
    setTimeout(() => {
      setContent('decodedHex');
      setFadeOut(false); // Reset fadeOut state
    }, 500); // Match this duration to your CSS transition
  };

  const handleThirdClick = () => {
    setContent('none');
  };

  // Render the initial content or the new content based on the state
  if (content === 'movingHex') {
    return (
      <div className={styles.scrambleGrid} onClick={handleFirstClick}>
        {scramblingGrid()}
      </div>
    );
  }

  // Update render based on state
  // TODO: improve animation between states
  let componentToRender;
  if (content === 'stillHex') {
    componentToRender = (
      <div className={fadeOut ? styles.decodedGridFadeOut : styles.decodedGridNormal} onClick={handleSecondClick}>
        {decodedGrid()}
      </div>
    );
  } else if (content === 'decodedHex') {
    // TODO add animation
    componentToRender = (
      <div className={styles.decodedGridSquished} onClick={handleThirdClick}>
        {decodedParagraph()}
      </div>
    );
  } else if (content === 'none') {
    componentToRender = null;
  }

  return (
    <div className={styles.main}>{componentToRender}</div>
  );
}


function scramblingGrid() {
  // Get the hex and route data
  return buildGridElements('scrambling');
}

function buildGridElements(mode) {
  // 'We live in a future few imagined possible.'
  // const hexEncoded = ['57', '65', '20', '6C', '69', '76', '65', '20', '69', '6E', '20', '61', '20', '66', '75', '74', '75', '72', '65', '20', '66', '65', '77', '20', '69', '6D', '61', '67', '69', '6E', '65', '64', '20', '70', '6F', '73', '73', '69', '62', '6C', '65', '2E'];
  const hexEncoded = ['5765', '206C', '6976', '6520', '696E', '2061', '2066', '7574', '7572', '6520', '6665', '7720', '696D', '6167', '696E', '6564', '2070', '6F73', '7369', '626C', '652E'];
  // const decoded = ['We live in a future few imagined possible.']
  const decoded = ['We', ' l', 'iv', 'e ', 'in', ' a', ' f', 'ut', 'ur', 'e ', 'fe', 'w ', 'im', 'ag', 'in', 'ed', ' p', 'os', 'si', 'bl', 'e.']


  let gridElements;
  if (mode === 'scrambling') {
    gridElements = hexEncoded.map((val) => (
      <ScrambleText initialValue='0000' finalValue={val} />
    ));
  } else if (mode === 'decoding') {
    gridElements = decoded.map((val) => (
      <p>{val}</p>
    ));
  }
  return gridElements;
}

const ScrambleText = ({ initialValue, finalValue }) => {
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

function decodedGrid() {
  // Get the hex and route data
  return buildGridElements('decoding');
}

function decodedParagraph() {
  // We live in a future few imagined possible.
  const squished = [<p>We live in a</p>, <p>future few </p>, <p>imagined possible.</p>]

  return squished
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
