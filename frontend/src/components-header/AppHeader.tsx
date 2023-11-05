import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "/home/alex/findU/frontend/src/styles/components-header.css";
import Logo from "../../../frontend/Logo.svg";
import Searchbar from "./Searchbar.tsx";
import Icons from "./Icons.tsx";
import { Link, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    companycolor: Palette["primary"];
  }

  interface PaletteOptions {
    companycolor?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarColorOverrides {
    companycolor: true;
  }
}

let theme = createTheme({
  palette: {
    companycolor: {
      // Definieren Sie Ihre benutzerdefinierte Farbe hier
      main: "#FFFFFF",
      light: "#...", // Optional: definieren Sie weitere Farbtöne
      dark: "#...", // Optional: definieren Sie weitere Farbtöne
    },
  },
});

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: theme.palette.companycolor.main }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
          </Link>
          <Searchbar></Searchbar>
          <Icons></Icons>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
