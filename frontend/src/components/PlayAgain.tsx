import React from 'react';

import Button from './Button';
import { PlayAgainProps } from '../types/play-again-props';

const PlayAgain: React.FC<PlayAgainProps> = ({ onClick }) => {
  return (
    <div className='flex justify-center'>
      <Button onClick={onClick} inverse={true} className='h-13 px-7 text-2xl'>
        Play Again
      </Button>
    </div>
  );
};

export default PlayAgain;
