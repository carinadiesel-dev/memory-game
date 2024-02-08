import { Box } from "@mui/material";
import CardBackImg from "../assets/cards/card-back.png";

type SingleCardProps = {
  cardImg: any;
  handleClick?: any;
};

export const CardFrame = ({ cardImg, handleClick }: SingleCardProps) => {
  return (
    <Box
      sx={{
        height: "7rem",
        width: "4.5rem",
        // backgroundImage: `url(${cardImg})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
      onClick={handleClick}
    >
      <img src={cardImg} />
      <img src={CardBackImg} alt="Back of Card" />
    </Box>
  );
};
