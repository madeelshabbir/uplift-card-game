import { CardColor } from './card-color';
import { CardSuit } from './card-suit';
import { CardValue } from './card-value';

export interface CardProps {
  value: CardValue;
  suit: CardSuit;
  color: CardColor;
  className?: string;
};
