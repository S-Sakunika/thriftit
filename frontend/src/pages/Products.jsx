import { useState, useEffect } from "react";
import { Grid, Typography, Box, Button, alpha } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import useHttpRequest from "../hooks/useHttpRequest";
import { useCartContext } from "../context/CartContext";
const UPLOAD_BASE_URL = process.env.REACT_APP_UPLOAD_BASE_URL;

function Products() {
  const { childCategory } = useParams();
  const { get } = useHttpRequest();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const { addToCart, inCart } = useCartContext();

  const getProducts = async () => {
    await get(`product/category/${childCategory}`)
      .then((res) => {
        setProducts(res.data.result.products);
        setCategory(res.data.result.category);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childCategory]);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h1">{category.name}</Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {products.map((item, i) => {
          return (
            <Grid item xs={12} md={3} key={i}>
              <Box
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
                      "&:not(.Mui-disabled)": {
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.white.main,
                      },
                      "&.Mui-disabled": {
                        backgroundColor: (theme) =>
                          alpha(theme.palette.secondary.main, 0.3),
                        color: (theme) => theme.palette.white.main,
                      },
                      "& span": {
                        transform: "translateX(0)",
                      },
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={`${UPLOAD_BASE_URL}${item.image.filename}`}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    objectFit: "contain",
                    borderRadius: "1rem",
                  }}
                />
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
                          "&.Mui-disabled": {
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: (theme) => theme.palette.white.main,
                          },
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(item);
                        }}
                        disabled={inCart(item._id)}
                      >
                        Add to cart
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      {!products.length && (
        <Typography sx={{ mt: 3 }}>No products available...</Typography>
      )}
    </Box>
  );
}

export default Products;
