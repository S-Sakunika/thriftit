import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        height: (theme) => theme.page.minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontSize: "5rem" }} color="primary">
          404
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.7rem", fontWeight: 600 }}
        >
          Oops! You took a wrong turn
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 6 }}
          component={Link}
          to="/"
        >
          Take me back to home
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
