import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components-header/AppHeader.tsx";
import { createTheme, CssBaseline, styled, ThemeProvider } from "@mui/material";
import GridLayout from "./components-body/GridLayout.tsx";
import { ModalProvider } from "./context/Context.tsx";

let theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
  palette: {
    background: {
      default: "#FFF8F2",
    },
  },
});

function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <header id="header">
            <AppHeader></AppHeader>
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
