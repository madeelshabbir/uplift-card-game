import React from 'react';
import { cardPositionStyle } from '../helpers/card';
import { CardProps } from '../types/card/card-props';
import { DeckProps } from '../types/deck-props';
import Card from './Card';

const Deck: React.FC<DeckProps> = ({ cards, normalArrangement }) => {
  return (
    <div className="flex justify-center flex-wrap my-10">
      {cards.map((card: CardProps, ind: number) => {
        return (
          <Card
            key={card.color + card.suit + card.value}
            value={card.value}
            suit={card.suit}
            color={card.color}
            className={normalArrangement ? 'mt-12' : cardPositionStyle(ind)}
          />
        );
      })}
      )
    </div>
  );
};

export default Deck;
