import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";


const Main = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Open Brewery App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 10, mb: 2 }} maxWidth="xl">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Main;
