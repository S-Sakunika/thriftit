import { Grid, Stack, Box, Typography, Button, alpha } from "@mui/material";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
const UPLOAD_BASE_URL = process.env.REACT_APP_UPLOAD_BASE_URL;

function Cart() {
  const { cartItems, deleteFromCart, cartTotal } = useCartContext();

  return (
    <Box sx={{ width: "50vw", mx: "auto" }}>
      <Stack spacing={2}>
        {cartItems.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.secondary.main, 0.03),
                py: 1,
                px: 2,
                borderRadius: "1em",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                  <Box
                    component="img"
                    src={`${UPLOAD_BASE_URL}${item.image}`}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
                  <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    {/* {item.vendor} */}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ alignSelf: "center" }}>
                  <Typography sx={{ fontWeight: 600 }} align="right">
                    {`$${item.price}`}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ alignSelf: "center" }}
                  align="right"
                >
                  <Button
                    startIcon={<FiTrash2 size="15" />}
                    sx={{
                      color: (theme) =>
                        alpha(theme.palette.secondary.main, 0.5),
                    }}
                    onClick={() => deleteFromCart(item.id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 6,
        }}
      >
        <Box>
          <Typography>Total</Typography>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {`$${cartTotal()}`}
          </Typography>
        </Box>
        <Stack direction="row">
          <Button color="primary" variant="text" component={Link} to="/">
            Continue shopping
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{ ml: 1, minWidth: "180px" }}
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Cart;
