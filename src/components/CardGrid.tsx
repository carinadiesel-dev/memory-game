import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import CardBackImg from "../assets/cards/card-back.png";
import { SHUFFLEDCARDS } from "../common/constants";
import { CardFrame } from "./CardFrame";

type CardProps = {
  cardImg: any;
  handleClick: () => void;
};

const Card: FunctionComponent<CardProps> = ({
  cardImg,
  handleClick,
}: CardProps) => {
  return (
    <Box
      sx={{
        height: "7rem",
        width: "4.5rem",
        backgroundImage: `url(${cardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={handleClick}
    ></Box>
  );
};

export const CardGrid = () => {
  return (
    <Grid
      container
      columns={{ md: 9 }}
      padding={{ md: 1 }}
      sx={{
        height: "53rem",
        maxWidth: "55rem",
        backgroundImage:
          "linear-gradient(132.61deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%);",
        borderWidth: "1px",
        borderRadius: 2,
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {SHUFFLEDCARDS.map((shuffledCard) => (
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CardFrame
            cardImg={CardBackImg}
            key={shuffledCard.id}
            handleClick={() => handleCardClick(shuffledCard)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
