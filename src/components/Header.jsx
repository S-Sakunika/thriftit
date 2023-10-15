import { Container, Grid, Box, Stack, Badge, AppBar } from "@mui/material";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import IconLink from "./IconLink";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed" color="white" sx={{ py: 1, boxShadow: "none" }}>
      <Container>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconLink text="Browse" icon={<FiSearch />} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: "center" }}>
                <Link to="/">
                  <Box
                    component="img"
                    sx={{
                      maxWidth: 180,
                      width: "100%",
                    }}
                    alt="logo"
                    src={Logo}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                sx={{ height: "100%" }}
              >
                <IconLink text="Login" icon={<FiUser />} />
                <Badge
                  badgeContent={3}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      left: "24px",
                      top: "6px",
                      color: (theme) => theme.palette.common.white,
                      fontSize: "0.7em",
                    },
                  }}
                >
                  <IconLink text="Cart" icon={<FiShoppingCart />} />
                </Badge>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
