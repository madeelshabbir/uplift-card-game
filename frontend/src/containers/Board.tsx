import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import winSoundFile from '../assets/sounds/win.flac';
import Controls from '../components/Controls';
import Deck from '../components/Deck';
import DeckStats from '../components/DeckStats';
import LostNotification from '../components/LostMessage';
import PlayAgain from '../components/PlayAgain';
import WinnerBanner from '../components/WinnerBanner';
import { DECK } from '../fixtures/deck';
import { filterDeck, isAce, popRandom } from '../helpers/card';
import { CardProps } from '../types/card/card-props';

const Board: React.FC = () => {
  const [deck, setDeck] = useState([...DECK]);
  const [cards, setCards] = useState([] as CardProps[]);
  const [cardCount, setCardCount] = useState(52);
  const [aceCount, setAceCount] = useState(4);
  const [won, setWon] = useState(false);
  const [reset, setReset] = useState(false);
  const [winSound] = useSound(winSoundFile);

  const deal = () => {
    if (cardCount === 2 && aceCount > 0) return win();

    const randomCards = [];
    for (let i = 0; i < 5; i++) {
      randomCards.push(pickCard());
    }

    setCards(randomCards);
    setCardCount((state) => state - 5);
  };

  useEffect(() => deal(), [reset]);

  const resetStates = () => {
    setCardCount(52);
    setDeck([...DECK]);
    setAceCount(4);
    setWon(false);
    setCards([]);
    setReset((state) => !state);
  };

  const win = () => {
    setDeck([]);
    setWon(true);
    setAceCount(0);
    setCardCount(0);
    setCards([...deck]);
    winSound();
  };

  const pickCard = () => {
    const pickedCard = popRandom(deck);
    if (isAce(pickedCard.value)) setAceCount((state) => state - 1);
    setDeck((state) => filterDeck(state, pickedCard));
    return pickedCard;
  };

  return (
    <div className="block">
      <DeckStats cardCount={cardCount} aceCount={aceCount} />

      {won && <WinnerBanner />}

      <Deck cards={cards} normalArrangement={cardCount === 0} />

      {aceCount <= 0 && !won && <LostNotification />}
      {aceCount <= 0 || cardCount === 0 ? (
        <PlayAgain onClick={resetStates} />
      ) : (
        <Controls onClick={deal} reset={resetStates} />
      )}
    </div>
  );
};

export default Board;
