import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreationModal from "./CreationModal.tsx";

function CreationCard() {
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
          <CreationModal></CreationModal>
        </CardActions>
      </Box>
    </Card>
  );
}

export default CreationCard;
