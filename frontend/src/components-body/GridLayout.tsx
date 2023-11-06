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
      height="15vh"
    >
      <Grid container spacing={2} width="70%" maxWidth="1200px">
        <Grid item xs={3}>
          <LeftCard></LeftCard>
        </Grid>
        <Grid item xs={6}>
          <CreationCard></CreationCard>
        </Grid>
        <Grid item xs={3}>
          <RightCard></RightCard>
        </Grid>
      </Grid>
    </Box>
  );
}
