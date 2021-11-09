import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Header = () => {
  return (
    <Grid item md={12} xs={12}>
      <Typography variant="h5" component="h2">
        List Breweries
      </Typography>
      <Typography sx={{ pb: 0 }} variant="p">
        Returns a list of breweries.
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </Grid>
  );
};

export default Header;