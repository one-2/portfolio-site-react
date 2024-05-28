import { useState, useEffect } from "react";

const TextScrambler = ({initialValue, finalValue}) => {
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

export default TextScrambler;
