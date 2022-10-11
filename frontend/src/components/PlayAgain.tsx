import React from 'react';
import { PlayAgainProps } from '../types/play-again-props';
import Button from './Button';

const PlayAgain: React.FC<PlayAgainProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <Button onClick={onClick} inverse className="h-13 px-7 text-2xl">
        Play Again
      </Button>
    </div>
  );
};

export default PlayAgain;
