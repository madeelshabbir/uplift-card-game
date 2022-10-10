import { TEXT_BLACK, TEXT_RED } from '../constants/color-style-classes';
import { HEX_BLACK, HEX_RED } from '../constants/color-codes';
import { CardColor } from '../types/card/card-color';
import { CardSuit } from '../types/card/card-suit';
import { ReactComponent as Club } from '../assets/Clover.svg';
import { ReactComponent as Diamond } from '../assets/Diamond.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';
import { ReactComponent as Spade } from '../assets/Spade.svg';
import { CardProps } from '../types/card/card-props';
import { CardValue } from '../types/card/card-value';

export const suitIcon = (suit: CardSuit) => {
  switch(suit) {
    case CardSuit.Club: return Club;
    case CardSuit.Diamond: return Diamond;
    case CardSuit.Heart: return Heart;
    case CardSuit.Spade: return Spade;
    default: return Spade;
  };
};

export const colorCode = (color: CardColor) => {
  switch(color) {
    case CardColor.Black: return HEX_BLACK;
    case CardColor.Red: return HEX_RED;
    default: return HEX_BLACK;
  };
};

export const colorStyleClass = (color: CardColor) => {
  switch(color) {
    case CardColor.Black: return TEXT_BLACK;
    case CardColor.Red: return TEXT_RED;
    default: return TEXT_BLACK;
  };
};

export const popRandom = (deck: CardProps[]) => {
  return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
};

export const isAce = (value: CardValue) => {
  return value === 'A';
};

export const cardPositionStyle = (index: number) => {
  switch(index) {
    case 0: return 'xl:rotate-15';
    case 1: return 'xl:mt-10 xl:rotate-7.5';
    case 2: return 'xl:mt-12';
    case 3: return 'xl:mt-10 xl:rotate-7.5-anti';
    case 4: return 'xl:rotate-15-anti';
    default: return 'xl:mt-12';
  };
};

const sameCard = (cardA: CardProps, cardB: CardProps) => {
  return cardA.value === cardB.value &&
         cardA.suit === cardB.suit &&
         cardA.color === cardB.color
};

export const filterDeck = (deck: CardProps[], pickedCard: CardProps) => {
  return deck.filter((card) => !sameCard(card, pickedCard));
};
