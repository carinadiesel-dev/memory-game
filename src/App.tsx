import { Box } from "@mui/material";
import "./App.css";
import backgroundImage from "./assets/Background.png";
import { CardGrid } from "./components/CardGrid";
import { ScoreCard } from "./components/ScoreCard";
import UserNamesModal from "./components/UserNamesModal";
import { PlayerNamesProvider } from "./context/PlayerContext";

function App() {
  return (
    <>
      <PlayerNamesProvider>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            width: "100vw",
          }}
        >
          <UserNamesModal />
          <ScoreCard playerNumber={1} />
          <CardGrid />
          {/* <CardFrame cardImg={CardBackImg} /> */}
        </Box>
      </PlayerNamesProvider>
    </>
  );
}

export default App;
