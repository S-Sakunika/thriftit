import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, Typography, Breadcrumbs as Crumbs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FiHome } from "react-icons/fi";

function Breadcrumbs() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter((el) => el !== "");

  const crumbs = [
    <Link key="1" component={RouterLink} to="/">
      <FiHome size={10} color={theme.palette.secondary.main} />
    </Link>,
  ];
  crumbs.push(
    pathArr.map((item, i) => {
      if (i !== pathArr.length - 1) {
        return (
          <Link
            key={i}
            component={RouterLink}
            to={`/${pathArr.slice(0, i + 1).join("/")}`}
            color="secondary"
            underline="none"
          >
            {item}
          </Link>
        );
      } else {
        return <Typography key={i}>{item}</Typography>;
      }
    })
  );

  return (
    <Crumbs separator="›" aria-label="breadcrumb" sx={{ mb: 2 }}>
      {crumbs}
    </Crumbs>
  );
}

export default Breadcrumbs;
