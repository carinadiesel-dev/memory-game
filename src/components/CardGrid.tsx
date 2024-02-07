import { Grid } from "@mui/material";
import CardBackImg from "../assets/cards/card-back.png";
import { CARDS } from "../common/constants";
import { CardFrame } from "./CardFrame";

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
      {CARDS.map((card) => (
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CardFrame cardImg={CardBackImg} key={card.id} />
        </Grid>
      ))}
    </Grid>
  );
};
