import { ReactNode, createContext, useContext, useState } from "react";
import { usePlayersDataContext } from "./PlayerContext";

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
  activePlayer: string;
  setActivePlayer: any;
  cardCompare: any;
};

const ClickedCardsContext = createContext<ClickedCardsContextData>({
  choice1: null,
  setChoice1: () => {},
  choice2: null,
  setChoice2: () => {},
  handleChoice: (card: CardData) => {},
  activePlayer: "Player1",
  setActivePlayer: () => {},
  cardCompare: () => {},
});

interface ClickedCardsDataProviderProps {
  children: ReactNode;
}

// A component that provides the card click context
export function ClickedCardsDataProvider({
  children,
}: ClickedCardsDataProviderProps) {
  const { playersData } = usePlayersDataContext();

  const player1Score = playersData.player1.score;
  const player2Score = playersData.player2.score;

  const [choice1, setChoice1] = useState<CardData | null>(null);
  const [choice2, setChoice2] = useState<CardData | null>(null);

  const [activePlayer, setActivePlayer] = useState("Player1");

  const cardCompare = () => {
    if (choice1?.value === choice2?.value) {
      console.log("Match");
      if (activePlayer === "Player1") {
        playersData.player1.score = player1Score + 2;
      } else if (activePlayer === "Player2") {
        playersData.player2.score = player2Score + 2;
      }
    } else {
      console.log("No Match");
    }
    setChoice1(null);
    setChoice2(null);
    setActivePlayer(activePlayer === "Player1" ? "Player2" : "Player1");
  };

  const handleChoice = (card: CardData) => {
    choice1 ? setChoice2(card) : setChoice1(card);
    if (!choice1) {
      setChoice1(card);
    } else if (choice1 && !choice2) {
      setChoice2(card);
      cardCompare();
    }
  };

  const value: ClickedCardsContextData = {
    choice1,
    setChoice1,
    choice2,
    setChoice2,
    handleChoice,
    activePlayer,
    setActivePlayer,
    cardCompare,
  };

  console.log(value);
  console.log(activePlayer);

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
