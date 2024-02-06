import { ReactNode, createContext, useContext, useState } from "react";

type PlayerName = {
  player1: string;
  player2: string;
};

type PlayerNamesContext = {
  playerNames: PlayerName;
  setPlayerNames: (playerNames: PlayerName) => void;
};

export const PlayerNamesContext = createContext<PlayerNamesContext | null>(
  null
);

interface PlayerNamesProviderProps {
  children: ReactNode;
}

export function PlayerNamesProvider({ children }: PlayerNamesProviderProps) {
  const [playerNames, setPlayerNames] = useState({ player1: "", player2: "" });

  return (
    <PlayerNamesContext.Provider value={{ playerNames, setPlayerNames }}>
      {children}
    </PlayerNamesContext.Provider>
  );
}

export const usePlayerNamesContext = () => {
  const context = useContext(PlayerNamesContext);
  if (context === null) {
    throw new Error(
      "usePlayerNamesContext must be used within the usePlayerNamesContextProvider"
    );
  }
  return context;
};
