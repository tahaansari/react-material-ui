import logo from "./logo.svg";
import "./App.css";
import { Typography, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>Hello World!!</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">I am heading</Typography>
    </div>
  );
}

export default App;
