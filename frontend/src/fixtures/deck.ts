import { VALUES } from '../constants/card-values';
import { CardColor } from '../types/card/card-color';
import { CardProps } from '../types/card/card-props';
import { CardSuit } from '../types/card/card-suit';
import { CardValue } from '../types/card/card-value';

const createDeck: () => CardProps[] = () => {
  return Object.values(CardSuit)
    .map((suit: CardSuit) => {
      return VALUES.map((value: CardValue) => {
        return {
          value,
          suit,
        };
      });
    })
    .flat()
    .map((card, ind) => {
      return { ...card, color: ind < 26 ? CardColor.Black : CardColor.Red };
    });
};

export const DECK = createDeck();
