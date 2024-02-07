import { Box } from "@mui/material";
import CardBackImg from "../assets/cards/card-back.png";

export const CardBack = () => {
  return (
    <Box
      sx={{
        height: "7rem",
        width: "4.5rem",
        backgroundImage: `url(${CardBackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></Box>
  );
};
