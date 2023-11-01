import { Box, Grid } from "@mui/material";
import CreationCard from "./CreationCard.tsx";
import RightCard from "./RightCard.tsx";
import LeftCard from "./LeftCard.tsx";
import "../styles/components-header.css";

export default function GridLayout() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="20vh"
    >
      <Grid container spacing={4} maxWidth="70%">
        <Grid item xs={3.5}>
          <LeftCard></LeftCard>
        </Grid>
        <Grid item xs={5}>
          <CreationCard></CreationCard>
        </Grid>
        <Grid item xs={3.5}>
          <RightCard></RightCard>
        </Grid>
      </Grid>
    </Box>
  );
}
