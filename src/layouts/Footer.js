import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="fixed" color="grey" sx={{ top: "auto", bottom: 0 }}>
      <Typography sx={{ p: 2 }} variant="p">
        © 2021 Open Brewery App. Initial dataset from Brewers Association.
      </Typography>
    </AppBar>
  );
};

export default Footer;
