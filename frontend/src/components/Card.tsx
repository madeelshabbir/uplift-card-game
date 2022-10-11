import React from 'react';
import { colorCode, suitIcon } from '../helpers/card';
import { CardColor } from '../types/card/card-color';
import { CardProps } from '../types/card/card-props';

const Card: React.FC<CardProps> = ({ value, suit, color, className }) => {
  const SuitIcon = suitIcon(suit);
  const suitColorCode = colorCode(color);

  return (
    <div className={`h-66 w-48 p-3 rounded-3xl bg-white mx-4 sm:mb-5 ease-in ${className}`}>
      <div className="inline-block">
        <p
          className={`font-bold text-8xl ${
            color === CardColor.Red ? 'text-red-500' : 'text-black-500'
          }`}
        >{value}</p>
        <SuitIcon fill={suitColorCode} className="h-7.5 w-7.5 m-auto" />
      </div>

      <div className="flex justify-end">
        <SuitIcon fill={suitColorCode} className="h-22 w-22 mr-3" />
      </div>
    </div>
  );
};

export default Card;
