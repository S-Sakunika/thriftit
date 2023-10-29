import { Button } from "@mui/material";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function IconLink(props) {
  return (
    <IconContext.Provider value={{ size: "15" }}>
      <Button
        component={Link}
        to={props.to}
        color="secondary"
        startIcon={props.icon}
        sx={[
          { p: 0 },
          (theme) => ({
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.primary.main,
            },
          }),
        ]}
      >
        {props.text}
      </Button>
    </IconContext.Provider>
  );
}

export default IconLink;
