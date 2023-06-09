import React from 'react';
import useSound from 'use-sound';
import clickSoundFile from '../assets/sounds/button-click.wav';
import { ButtonProps } from '../types/button-props';

const Button: React.FC<ButtonProps> = ({ inverse, className, children, onClick }) => {
  const [clickSound] = useSound(clickSoundFile);

  const primaryStyles = `bg-gold hover:bg-gold-700 text-black`;
  const inverseStyles = `text-gold border-gold hover:text-gold-700 hover:border-gold-700 border-2`;
  const styles = inverse ? inverseStyles : primaryStyles;

  const handleClick = (callback?: () => void) => {
    if (callback) callback();
    clickSound();
  };

  return (
    <button
      type="button"
      onClick={() => handleClick(onClick)}
      className={`font-extrabold font-alfa-slab-one rounded ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
