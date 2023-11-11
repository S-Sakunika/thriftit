import { Grid, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import AnimatedText from "../components/AnimatedText";
import ProductCarousel from "../components/ProductCarousel";

const product = {
  name: "Vintage lace wedding dress",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  attributes: [
    {
      label: "Condition",
      value: "Used",
    },
    {
      label: "Color",
      value: "Black",
    },
    {
      label: "Size",
      value: "M",
    },
  ],
  images: ["dresses.jpg", "jackets.jpg", "tops.jpg"],
};

const relatedProducts = [
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
];

function ProductSingle() {
  const [mainImg, setMainImage] = useState(product.images[0]);
  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              {product.images.map((img, i) => {
                return (
                  <Box
                    key={i}
                    component="img"
                    src={require(`../assets/images/uploads/${img}`)}
                    sx={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                      mb: 1,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setMainImage(img);
                    }}
                  />
                );
              })}
            </Grid>
            <Grid item xs={12} md={9}>
              <Box
                component="img"
                src={require(`../assets/images/uploads/${mainImg}`)}
                sx={{
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: 4 }}>
            <Typography component="h1" variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
              {product.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                {product.attributes.map((attr, i) => {
                  return (
                    <Grid item xs={12} md={4} key={i}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600 }}
                        color="primary"
                      >
                        {attr.label}
                      </Typography>
                      <Typography variant="body1">{attr.value}</Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box sx={{ mt: 6, display: "flex", alignItems: "center" }}>
              <Typography component="p" variant="h5">
                $19.99
              </Typography>
              <Button
                variant="contained"
                startIcon={<FiShoppingCart size={14} />}
                sx={{ ml: 2 }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
          <AnimatedText
            text="Related"
            styles={{ display: "inline-block" }}
            color="primary"
          />
          <Box component="span"> Products</Box>
        </Typography>
        <ProductCarousel items={relatedProducts} />
      </Box>
    </Box>
  );
}

export default ProductSingle;
