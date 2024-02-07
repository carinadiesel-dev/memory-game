import { Box, Typography } from "@mui/material";
import { usePlayersDataContext } from "../context/PlayerContext";
import { Player1Icon } from "./Player1Icon";
import { Player2Icon } from "./Player2Icon";

type ScoreCardProps = {
  playerNumber: number;
};

export const ScoreCard = ({ playerNumber }: ScoreCardProps) => {
  const playerIcon = playerNumber === 1 ? <Player1Icon /> : <Player2Icon />;
  const { playersData } = usePlayersDataContext();
  const player1Name = playersData.player1.name;
  const player2Name = playersData.player2.name;
  const player1Score = playersData.player1.score;
  const player2Score = playersData.player2.score;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundImage:
          "linear-gradient(159.57deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100.38%)",
        gap: 2,
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Box sx={{ paddingY: 2 }}>{playerIcon}</Box>
      <Box>
        <Typography sx={{ fontSize: "24px", fontWeight: 800, color: "white" }}>
          {playerNumber === 1 ? player1Name : player2Name}
        </Typography>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 600,
            color: "white",
          }}
        >
          Score : {playerNumber === 1 ? player1Score : player2Score}
        </Typography>
      </Box>
    </Box>
  );
};
