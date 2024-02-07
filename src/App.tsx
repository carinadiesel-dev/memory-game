import { Box } from "@mui/material";
import "./App.css";
import backgroundImage from "./assets/Background.png";
import { CardClickProvider } from "./context/ClickedCardContext";
import { PlayersDataProvider } from "./context/PlayerContext";

function App() {
  return (
    <>
      <PlayersDataProvider>
        <CardClickProvider>
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
            {/* Rest of the code */}
          </Box>
        </CardClickProvider>
      </PlayersDataProvider>
    </>
  );
}

export default App;
