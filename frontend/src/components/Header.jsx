import { Container, Grid, Box, Stack, Badge, AppBar } from "@mui/material";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import IconLink from "./IconLink";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

function Header() {
  const { isLoggedIn } = useAuthContext();
  const { cartItems } = useCartContext();

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
                    alt="Logo"
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
                spacing={2}
                sx={{ height: "100%" }}
              >
                <IconLink
                  text={isLoggedIn ? "My Account" : "Login"}
                  icon={<FiUser />}
                  to={isLoggedIn ? "/my-account/profile" : "/login"}
                />
                <Badge
                  badgeContent={cartItems.length}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      left: "24px",
                      color: (theme) => theme.palette.common.white,
                      fontSize: "0.7em",
                    },
                  }}
                >
                  <IconLink text="Cart" icon={<FiShoppingCart />} to="/cart" />
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
