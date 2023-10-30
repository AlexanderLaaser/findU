import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CreationCard() {
  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Set up your acts ...
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <CardActions>
          <Button variant="contained" size="small">
            Create
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
