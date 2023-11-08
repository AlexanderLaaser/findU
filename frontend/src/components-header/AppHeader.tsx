import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Searchbar2 from "./Searchbar2.tsx";
import CompanyBranding from "../components-header/Logo.tsx";
import UserDropdown from "./UserDropdown.tsx";

export default function PrimarySearchAppBar() {
  return (
    <AppBar position="relative" style={{ backgroundColor: "White" }}>
      <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}
        >
          <CompanyBranding></CompanyBranding>
        </Box>
        <Searchbar2></Searchbar2>

        <Box
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            width: "13%",
          }}
        >
          <UserDropdown></UserDropdown>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
//<Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
