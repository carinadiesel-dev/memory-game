import { ReactNode, createContext, useContext, useState } from "react";

type CardData = {
  id: string;
  value: string;
  suit: string;
  image: ReactNode;
};

type ClickedCardsContextData = {
  choice1: CardData | null;
  setChoice1: (card: CardData | null) => void;
  choice2: CardData | null;
  setChoice2: (card: CardData | null) => void;
  handleChoice: (card: CardData) => void;
};

const ClickedCardsContext = createContext<ClickedCardsContextData>({
  choice1: null,
  setChoice1: () => {},
  choice2: null,
  setChoice2: () => {},
  handleChoice: (card: CardData) => {},
});

interface ClickedCardsDataProviderProps {
  children: ReactNode;
}

// A component that provides the card click context
export function ClickedCardsDataProvider({
  children,
}: ClickedCardsDataProviderProps) {
  const [choice1, setChoice1] = useState<CardData | null>(null);
  const [choice2, setChoice2] = useState<CardData | null>(null);

  const handleChoice = (card: CardData) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };

  const value: ClickedCardsContextData = {
    choice1,
    setChoice1,
    choice2,
    setChoice2,
    handleChoice,
  };

  console.log(value);

  return (
    <ClickedCardsContext.Provider value={value}>
      {children}
    </ClickedCardsContext.Provider>
  );
}

export const useClickedCardsContext = () => {
  const context = useContext(ClickedCardsContext);
  if (context === null) {
    throw new Error(
      "usePlayersDataContext must be used within the usePlayersDataContextProvider"
    );
  }
  return context;
};
