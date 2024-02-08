import { Grid } from "@mui/material";
import { SHUFFLEDCARDS } from "../common/constants";
import { useClickedCardsContext } from "../context/ClickedCardContext";
import { CardFrame } from "./CardFrame";

export const CardGrid = () => {
  const { handleChoice, setActivePlayer, flippedCards, choice1, choice2 } =
    useClickedCardsContext();

  // const [flippedCards, setFlippedCards] = useState<any[]>([]);

  //   setFlippedCards((prev: any[]) => [...prev, card]);

  //   if (flippedCards.length === 2) {
  //     // Check if the two cards match
  //     // If they don't, flip them back over after a delay
  //     setTimeout(() => {
  //       setFlippedCards([]);
  //     }, 1000);
  //   }
  // };
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
      {SHUFFLEDCARDS.map((shuffledCard: any) => (
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CardFrame
            cardImg={shuffledCard.image}
            key={shuffledCard.id}
            handleClick={() => handleChoice(shuffledCard)}
            isFlipped={
              flippedCards[0] === shuffledCard ||
              flippedCards[1] === shuffledCard
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
