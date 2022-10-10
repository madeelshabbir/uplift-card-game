import React from 'react';
import useSound from 'use-sound';

import { ButtonProps } from '../types/button-props';

const Button: React.FC<ButtonProps> = ({ inverse, className, children, onClick }) => {
  const [clickSound] = useSound(require('../sounds/button-click.wav'));

  const primaryStyles = `bg-gold hover:bg-gold-700 text-black`;
  const inverseStyles = `text-gold border-gold hover:text-gold-700 hover:border-gold-700 border-2`;
  const styles = inverse ? inverseStyles : primaryStyles;

  const handleClick = (callback?: () => void) => {
    callback && callback();
    clickSound();
  }

  return (
    <button onClick={() => handleClick(onClick)} className={`font-extrabold font-alfa-slab-one rounded ${styles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
