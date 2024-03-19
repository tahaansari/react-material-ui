import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import { Container } from "@mui/material";
import CakeSection from "./components/CakeSection";
import ContactUs from "./components/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Container>
        <HeroSection></HeroSection>
        <CakeSection></CakeSection>
        <ContactUs></ContactUs>
      </Container>
    </ThemeProvider>
  );
}

export default App;
