import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "/home/alex/findU/frontend/src/styles/components-header.css";
import Searchbar from "./Searchbar.tsx";
import Icons from "./Icons.tsx";
import { Link } from "@mui/material";
import { theme } from "../../src/App.tsx";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: theme.palette.background.main }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/"></Link>
          <Searchbar></Searchbar>
          <Icons></Icons>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
//<Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
