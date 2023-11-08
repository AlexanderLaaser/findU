import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Searchbar2 from "./Searchbar2.tsx";
import CompanyBranding from "../components-header/Logo.tsx";
import UserDropdown from "./UserDropdown.tsx";

export default function PrimarySearchAppBar() {
  return (
    <AppBar position="relative" style={{ backgroundColor: "White" }}>
      <Toolbar style={{}}>
        <Box style={{ flexGrow: 1 }}>
          <CompanyBranding></CompanyBranding>
        </Box>
        <div className="absolute left-0 right-0">
          <Searchbar2></Searchbar2>
        </div>

        <Box
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <UserDropdown></UserDropdown>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
//<Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
