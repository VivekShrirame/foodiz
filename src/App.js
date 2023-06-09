import { useState } from "react";
import { GlobalStyles } from "./components/Globals.styles";
import styled from "styled-components";
import NavBar from "./components/layout/navbar/NavBar";
import HeroSection from "./components/sections/hero-section/HeroSection";
import { ThemeProvider } from "styled-components";

const Container = styled.div`
  height: 100vh;
  padding: 0px 100px;
  position: relative;
`;

const LightTheme = {
  backgroundColor: "white",
  fontColor: "black",
};

const DarkTheme = {
  backgroundColor: "black",
  fontColor: "white",
};

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
