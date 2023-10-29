import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function FooterLinkList({ heading, links }) {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        {heading}
      </Typography>
      <List dense>
        {links.map((link, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                textAlign: "right",
                p: 0,
                justifyContent: "end",
                "& a": {
                  textDecoration: "none",
                  color: "inherit",
                  transition: (theme) => theme.transitions.main,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                },
              }}
            >
              <Link to={link.to}>
                <ListItemText primary={link.title} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default FooterLinkList;
