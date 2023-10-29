import "bootstrap/dist/css/bootstrap.min.css";
import CreationModal from "./components/CreationModal.tsx";
import Headernew from "./components/Header.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

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
          <CreationModal></CreationModal>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
