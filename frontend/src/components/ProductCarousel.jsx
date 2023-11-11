import { Splide } from "@splidejs/react-splide";
import { Box, Button, Typography, Grid } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductCarousel(props) {
  const items = props.items;
  return (
    <Splide
      options={{
        perPage: 5,
        perMove: 1,
        gap: "1rem",
        height: "200px",
        cover: true,
        omitEnd: true,
      }}
    >
      {items.map((item, index) => {
        return (
          <Box
            key={index}
            className="splide__slide"
            component={Link}
            to={item.slug}
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
              "&:hover": {
                "& button": {
                  width: "100%",
                  minWidth: "inherit",
                  textIndent: "0",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.white.main,
                  "& span": {
                    transform: "translateX(0)",
                  },
                },
              },
            }}
          >
            <Box className="splide__slide__container">
              <Box
                component="img"
                src={require(`../assets/images/uploads/${item.imageFileName}`)}
                alt={item.name}
              />
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ mb: 1 }}>{item.name}</Typography>
              <Grid
                container
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 600 }}
                  >{`$${item.price}`}</Typography>
                </Grid>
                <Grid item sx={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    startIcon={<FiShoppingCart size={14} />}
                    sx={{
                      width: "33px",
                      minWidth: "33px",
                      height: "32px",
                      overflow: "hidden",
                      textWrap: "nowrap",
                      textIndent: "100%",
                      backgroundColor: "transparent",
                      color: (theme) => theme.palette.secondary.main,
                      transition: (theme) => theme.transitions.main,
                      "& span": {
                        transform: "translateX(calc(100% + 30px))",
                      },
                    }}
                  >
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Splide>
  );
}

export default ProductCarousel;
