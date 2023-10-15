import { Button } from "@mui/material";
import { IconContext } from "react-icons";

function IconLink(props) {
  return (
    <IconContext.Provider value={{ size: "15" }}>
      <Button
        color="secondary"
        startIcon={props.icon}
        sx={[
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
