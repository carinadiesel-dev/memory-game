import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/Background.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ backgroundImage: `url(${backgroundImage})` }}>Hello World</Box>
    </>
  );
}

export default App;
