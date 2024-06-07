// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card, onClick, isFlipped, isMatched }) => {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick(card);
    }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.content}</div>
      </div>
    </div>
  );
};

export default Card;
