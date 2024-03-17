import logo from "./logo.svg";
import "./App.css";
import { Typography, Button } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" gutterBottom sx={{backgroundColor:"red", color:"white"}}>I am heading</Typography>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
