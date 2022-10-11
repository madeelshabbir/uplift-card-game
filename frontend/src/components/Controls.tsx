import React from 'react';
import { ControlsProps } from '../types/controls-props';
import Button from './Button';

const Controls: React.FC<ControlsProps> = ({ onClick, reset }) => {
  return (
    <>
      <div className="flex justify-center">
        <Button onClick={onClick} className="h-25 px-10 text-6xl">
          DEAL
        </Button>
      </div>

      <div className="flex justify-center xl:justify-end mt-4">
        <Button onClick={reset} inverse className="h-13 px-7 text-2xl">
          Reset
        </Button>
      </div>
    </>
  );
};

export default Controls;
