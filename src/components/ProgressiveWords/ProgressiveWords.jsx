import React, { useState, useEffect } from 'react';

export const ProgressiveWord = ({ word, speed = 200 }) => {
  const [displayedWord, setDisplayedWord] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedWord(prev => prev + word[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
     
      const restartTimeout = setTimeout(() => {
        setDisplayedWord('');
        setIndex(0);
      }, speed); 
      return () => clearTimeout(restartTimeout);
    }
  }, [index, word, speed]);

  return <div>{displayedWord}</div>;
};
