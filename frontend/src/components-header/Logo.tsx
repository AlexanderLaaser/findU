import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "/home/alex/findU/frontend/src/styles/components-header.css";

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        meeture
      </Typography>
    </Box>
  );
}
