import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "/home/alex/findU/frontend/src/styles/components-header.css";
import logo from "../styles/logo-meeture.svg";

export default function CompanyBranding() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component="img"
        sx={{ height: "40px", padding: "3px" }}
        alt="Logo"
        src={logo}
      />
      <Typography variant="h4" className="text-black" sx={{ padding: "1rem" }}>
        meeture
      </Typography>
    </Box>
  );
}
