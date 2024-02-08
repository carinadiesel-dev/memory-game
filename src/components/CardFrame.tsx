import { Box } from "@mui/material";
import CardBackImg from "../assets/cards/card-back.png";

type SingleCardProps = {
  cardImg: any;
  handleClick?: any;
  isFlipped?: boolean;
};

export const CardFrame = ({
  cardImg,
  handleClick,
  isFlipped,
}: SingleCardProps) => {
  return (
    <Box
      sx={{
        height: "7rem",
        width: "4.5rem",
      }}
      onClick={handleClick}
    >
      {isFlipped ? (
        <img src={cardImg} />
      ) : (
        <img src={CardBackImg} alt="Back of Card" />
      )}
    </Box>
  );
};
