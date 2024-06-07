// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import './Game.css';

const generateCards = () => {
  const contents = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = contents.concat(contents).map((content, index) => ({
    id: index,
    content,
    isFlipped: false,
    isMatched: false,
  }));
  return cards.sort(() => 0.5 - Math.random());
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleCardClick = (clickedCard) => {
    if (disabled) return;
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else if (firstCard && !secondCard) {
      setSecondCard(clickedCard);
      setMoves(moves + 1);
      setDisabled(true);

      if (firstCard.content === clickedCard.content) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.content === clickedCard.content ? { ...card, isMatched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === clickedCard.id ? { ...card, isFlipped: false } : card
            )
          );
          resetTurn();
        }, 500);
      }
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setCards(generateCards());
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setDisabled(false);
  };

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
      {cards.every(card => card.isMatched) && (
        <div className="game-over">
          <p>Game Over! Moves: {moves}</p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default Game;
