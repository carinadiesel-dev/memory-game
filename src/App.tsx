import { Box, Button, Stack, Typography } from "@mui/material";
import "./App.css";
import backgroundImage from "./assets/Background.png";
// import { CardClickProvider } from "./context/ClickedCardContext";
import { ActivePlayerIndicator } from "./components/ActivePlayerIndicator";
import { CardGrid } from "./components/CardGrid";
import { ScoreCard } from "./components/ScoreCard";
import UserNamesModal from "./components/UserNamesModal";
import { ClickedCardsDataProvider } from "./context/ClickedCardContext";
import { PlayersDataProvider } from "./context/PlayerContext";

function App() {
  return (
    <>
      <PlayersDataProvider>
        <ClickedCardsDataProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              maxWidth: "100vw",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                m: 0,
                p: 2,
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "40px",
                color: "white",
                textAlign: "center",
              }}
              id="customized-dialog-title"
            >
              Memory
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                position: "absolute",
                top: 20,
                right: 50,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#F4A236",
                  fontFamily: "Poppins",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "28px",
                  paddingX: 2,
                  "&:hover": {
                    backgroundColor: "#9c6823",
                  },
                }}
                variant="contained"
              >
                Restart Game
              </Button>
              <Button
                sx={{
                  backgroundColor: "#D4190C",
                  fontFamily: "Poppins",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "28px",
                  paddingX: 2,
                  "&:hover": {
                    backgroundColor: "#7c1008",
                  },
                }}
                variant="contained"
              >
                Exit Game
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <UserNamesModal />
              <Stack gap={2}>
                <ScoreCard playerNumber={1} />
                <ActivePlayerIndicator player={1} />
              </Stack>

              <CardGrid />
              <Stack gap={2}>
                <ScoreCard playerNumber={2} />
                <ActivePlayerIndicator player={2} />
              </Stack>
            </Box>
          </Box>
        </ClickedCardsDataProvider>
      </PlayersDataProvider>
    </>
  );
}

export default App;
