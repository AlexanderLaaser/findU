import "bootstrap/dist/css/bootstrap.min.css";
import Headernew from "./components-header/AppHeader.tsx";
import { Box, Button, createTheme, Modal, ThemeProvider } from "@mui/material";
import GridLayout from "./components-body/GridLayout.tsx";
import { useReducer } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header id="header">
          <Headernew></Headernew>
        </header>
        <main id="body">
          <GridLayout></GridLayout>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
