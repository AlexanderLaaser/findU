import "bootstrap/dist/css/bootstrap.min.css";
import Headernew from "./components-header/AppHeader.tsx";
import { Box, Button, createTheme, Modal, ThemeProvider } from "@mui/material";
import GridLayout from "./components-body/GridLayout.tsx";
import { ModalProvider } from "./context/Context.tsx";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
});

function App() {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
}

export default App;
