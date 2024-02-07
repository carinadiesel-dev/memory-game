import React, { ReactNode, createContext, useContext, useState } from "react";

// Define the shape of the card data
interface CardData {
  id: string;
  value: string;
  suit: string;
  image: ReactNode;
}

// Define the shape of the context data
interface CardClickContextData {
  clickedCards: CardData[];
  handleCardClick: (card: CardData) => void;
}

const CardClickContext = createContext<CardClickContextData[]>([]);

// A component that provides the card click context
const CardClickProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clickedCards, setClickedCards] = useState<CardData[]>([]);
  console.log(clickedCards);

  const handleCardClick = (card: CardData) => {
    if (clickedCards.length < 2) {
      // Limit of 2 clicked cards at a time
      setClickedCards([...clickedCards, card]);
    } else {
      alert("You can only click 2 cards at a time");
    }
  };

  const value = [{ clickedCards, handleCardClick }];

  return (
    <CardClickContext.Provider value={value}>
      {children}
    </CardClickContext.Provider>
  );
};

export const useCardClickContext = () => {
  const context = useContext(CardClickContext);
  if (context === null) {
    throw new Error(
      "usePlayersDataContext must be used within the usePlayersDataContextProvider"
    );
  }
  return context;
};

export { CardClickContext, CardClickProvider };
