import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "/home/alex/findU/frontend/src/styles/components-header.css";
import Logo from "./Logo.tsx";
import Searchbar from "./Searchbar.tsx";
import Icons from "./Icons.tsx";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo></Logo>
          <Searchbar></Searchbar>
          <Icons></Icons>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
