import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/Background.png";
import UserNamesModal from "./components/UserNamesModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ backgroundImage: `url(${backgroundImage})` }}>
        <UserNamesModal />
      </Box>
    </>
  );
}

export default App;
