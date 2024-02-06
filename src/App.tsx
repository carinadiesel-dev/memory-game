import { Box } from "@mui/material";
import "./App.css";
import backgroundImage from "./assets/Background.png";
import UserNamesModal from "./components/UserNamesModal";
import { PlayerNamesProvider } from "./context/PlayerContext";

function App() {
  return (
    <>
      <PlayerNamesProvider>
        <Box sx={{ backgroundImage: `url(${backgroundImage})` }}>
          <UserNamesModal />
        </Box>
      </PlayerNamesProvider>
    </>
  );
}

export default App;
