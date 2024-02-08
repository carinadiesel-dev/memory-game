import { ReactNode, createContext, useContext, useState } from "react";

type PlayerDataType = {
  name: string;
  score: number;
};

type PlayersDataContext = {
  playersData: {
    player1: PlayerDataType;
    player2: PlayerDataType;
  };
  setPlayersData: React.Dispatch<
    React.SetStateAction<{
      player1: PlayerDataType;
      player2: PlayerDataType;
    }>
  >;
};

// ContextProps = {
//   playersData: {player1:PLayerDataType, player2: PlayerDataType},
//   setPlayersData: (data:PlayerDataType) => void;
//

export const PlayersDataContext = createContext<PlayersDataContext | null>(
  null
);

interface PlayersDataProviderProps {
  children: ReactNode;
}

export function PlayersDataProvider({ children }: PlayersDataProviderProps) {
  const [playersData, setPlayersData] = useState({
    player1: { name: "", score: 0 },
    player2: { name: "", score: 0 },
  });

  const value = { playersData, setPlayersData };

  return (
    <PlayersDataContext.Provider value={value}>
      {children}
    </PlayersDataContext.Provider>
  );
}

export const usePlayersDataContext = () => {
  const context = useContext(PlayersDataContext);
  if (context === null) {
    throw new Error(
      "usePlayersDataContext must be used within the usePlayersDataContextProvider"
    );
  }
  return context;
};
