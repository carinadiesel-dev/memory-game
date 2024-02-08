import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useClickedCardsContext } from "../context/ClickedCardContext";

type ActivePlayerIndicatorProps = {
  player: number;
};

export const ActivePlayerIndicator = ({
  player,
}: ActivePlayerIndicatorProps) => {
  const { activePlayer } = useClickedCardsContext();
  return (
    <Box>
      {player === 1 && activePlayer === "Player1" ? (
        <Box sx={{ backgroundColor: "#0AB169", borderRadius: 2 }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
              paddingY: 1,
              textAlign: "center",
            }}
          >
            It's your turn
          </Typography>
        </Box>
      ) : player === 2 && activePlayer === "Player2" ? (
        <Box sx={{ backgroundColor: "white", borderRadius: 2 }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#489DDA",
              paddingY: 1,
              textAlign: "center",
            }}
          >
            It's your turn
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
