import "./styles/index.css";
import AppHeader from "./components-header/AppHeader.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import GridLayout from "./components-body/Layout.tsx";
import { ModalProvider } from "./context/Context.tsx";

export let theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
  palette: {
    background: {
      main: "White",
      light: "#...",
      dark: "#...",
    },
    companycolor: {
      //
      main: "#EC4F46",
      light: "#...",
      dark: "#...",
    },
  },
});

function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,182,193,0.3),rgba(255,255,255,0))]">
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
