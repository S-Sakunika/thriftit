// import { useParams } from "react-router-dom";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Products() {
  // const { category } = useParams();

  const products = [
    {
      id: 1,
      name: "Elegant Black Evening Dress",
      slug: "elegant-black-evening-dress",
      price: 129.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 2,
      name: "Summer Floral Maxi Dress",
      slug: "summer-floral-maxi-dress",
      price: 79.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 3,
      name: "Vintage Lace Wedding Dress",
      slug: "vintage-lace-wedding-dress",
      price: 199.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 4,
      name: "Casual Striped Shirt Dress",
      slug: "casual-striped-shirt-dress",
      price: 59.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 5,
      name: "Boho Chic Sundress",
      slug: "boho-chic-sundress",
      price: 49.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 6,
      name: "Formal Red Cocktail Dress",
      slug: "formal-red-cocktail-dress",
      price: 149.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 7,
      name: "Classic Little Black Dress",
      slug: "classic-little-black-dress",
      price: 89.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 8,
      name: "Retro Polka Dot Swing Dress",
      slug: "retro-polka-dot-swing-dress",
      price: 69.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 9,
      name: "Chiffon Beach Cover-Up Dress",
      slug: "chiffon-beach-cover-up-dress",
      price: 39.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 10,
      name: "Glamorous Sequin Evening Gown",
      slug: "glamorous-sequin-evening-gown",
      price: 179.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 11,
      name: "Bohemian Embroidered Maxi Dress",
      slug: "bohemian-embroidered-maxi-dress",
      price: 99.99,
      imageFileName: "dresses.jpg",
    },
    {
      id: 12,
      name: "Floral Print Wrap Dress",
      slug: "floral-print-wrap-dress",
      price: 69.99,
      imageFileName: "dresses.jpg",
    },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h1">Dresses</Typography>
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
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.white.main,
                      "& span": {
                        transform: "translateX(0)",
                      },
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={require(`../assets/images/uploads/${item.imageFileName}`)}
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
                        }}
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
    </Box>
  );
}

export default Products;
