import React from "react";
import Card from "./Card";

function GameBoard({ cards, flippedCards, matchedCards, onCardClick,difficulty}) {
  const gridColumns = difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8;
  console.log(gridColumns);
  return (
    <div className={`grid ${gridColumns===4?'grid-cols-4':gridColumns===6?'grid-cols-6':'grid-cols-8'} gap-4 p-4`}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          value={card.value}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
