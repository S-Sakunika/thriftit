import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, Typography, Breadcrumbs as Crumbs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FiHome } from "react-icons/fi";

function Breadcrumbs() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter((el) => el !== "");

  const formatted = (string) => {
    const sanitized = string.replace("-", " ");
    return sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
  };

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
            {formatted(item)}
          </Link>
        );
      } else {
        return <Typography key={i}>{formatted(item)}</Typography>;
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
