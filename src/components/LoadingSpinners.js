import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LoadingSpinners = () => {
  return (
    <Box sx={{ display: "flex", mx: "auto", width: 200, mb:5 }}>
      <CircularProgress />{" "}
      <Typography sx={{ mt: 1, pl: 1 }}> Loading... </Typography>
    </Box>
  );
};

export default LoadingSpinners;
