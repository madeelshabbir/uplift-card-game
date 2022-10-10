import React from 'react';

import { DeckStatsProps } from '../types/deck-stats-props';

const DeckStats: React.FC<DeckStatsProps> = ({ cardCount, aceCount }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-around text-center bg-black text-white p-5 border border-solid border-gold'>
        <div className='mr-2'>
          <p className='text-5xl'>{cardCount}</p>
          <p>Cards Left</p>
        </div>

        <div className='ml-2'>
          <p className='text-5xl'>{aceCount}</p>
          <p>Ace Left</p>
        </div>
      </div>
    </div>
  );
};

export default DeckStats;
