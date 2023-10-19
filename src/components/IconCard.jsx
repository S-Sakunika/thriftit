import { Box, Card, CardContent, Typography } from "@mui/material";
import { IconContext } from "react-icons";

function IconCard(props) {
  return (
    <Card sx={{ borderRadius: "1rem", height: "100%" }} elevation={6}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <IconContext.Provider value={{ color: "#05CCD9", size: 30 }}>
            {props.icon}
          </IconContext.Provider>
        </Box>
        <Typography
          component="h3"
          variant="h6"
          textAlign="center"
          sx={{ mb: 2 }}
        >
          {props.title}
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
