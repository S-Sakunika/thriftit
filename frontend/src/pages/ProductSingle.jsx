import { useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Stack, Chip } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useHttpRequest from "../hooks/useHttpRequest";
import { useCartContext } from "../context/CartContext";
const UPLOAD_BASE_URL = process.env.REACT_APP_UPLOAD_BASE_URL;

// import AnimatedText from "../components/AnimatedText";
// import ProductCarousel from "../components/ProductCarousel";

// const relatedProducts = [
//   {
//     id: 1,
//     name: "Elegant Black Evening Dress",
//     slug: "elegant-black-evening-dress",
//     price: 129.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 2,
//     name: "Summer Floral Maxi Dress",
//     slug: "summer-floral-maxi-dress",
//     price: 79.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 3,
//     name: "Vintage Lace Wedding Dress",
//     slug: "vintage-lace-wedding-dress",
//     price: 199.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 4,
//     name: "Casual Striped Shirt Dress",
//     slug: "casual-striped-shirt-dress",
//     price: 59.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 5,
//     name: "Boho Chic Sundress",
//     slug: "boho-chic-sundress",
//     price: 49.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 6,
//     name: "Formal Red Cocktail Dress",
//     slug: "formal-red-cocktail-dress",
//     price: 149.99,
//     imageFileName: "dresses.jpg",
//   },
//   {
//     id: 7,
//     name: "Classic Little Black Dress",
//     slug: "classic-little-black-dress",
//     price: 89.99,
//     imageFileName: "dresses.jpg",
//   },
// ];

function ProductSingle() {
  const { product } = useParams();
  const { get } = useHttpRequest();
  const [productData, setProductData] = useState({});
  const [mainImg, setMainImage] = useState("");
  const { addToCart, inCart } = useCartContext();

  const getProductData = async () => {
    await get(`product/slug/${product}`)
      .then((res) => {
        setProductData(res.data.result);
        setMainImage(res.data.result.image.filename);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box
                component="img"
                src={`${UPLOAD_BASE_URL}${mainImg}`}
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
                  setMainImage(mainImg);
                }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box
                component="img"
                src={`${UPLOAD_BASE_URL}${mainImg}`}
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
            <Stack direction="row" justifyContent="space-between">
              <Typography component="h1" variant="h4">
                {productData.name && productData.name}
              </Typography>
              {productData.vendor && (
                <Chip
                  label={`Vendor: ${productData.vendor.firstName}`}
                  size="small"
                />
              )}
            </Stack>
            <Typography variant="body1" sx={{ mt: 3 }}>
              {productData.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                {productData.attributes &&
                  Object.entries(productData.attributes)
                    .filter(([label, value]) => value !== "")
                    .map(([label, value], i) => {
                      return (
                        <Grid item xs={12} md={4} key={i}>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 600 }}
                            color="primary"
                          >
                            {`${label.charAt(0).toUpperCase()}${label.slice(
                              1
                            )}`}
                          </Typography>
                          <Typography variant="body1">{value}</Typography>
                        </Grid>
                      );
                    })}
              </Grid>
            </Box>
            <Box sx={{ mt: 6, display: "flex", alignItems: "center" }}>
              <Typography component="p" variant="h5">
                {productData.price && `$${productData.price}`}
              </Typography>
              <Button
                variant="contained"
                startIcon={<FiShoppingCart size={14} />}
                sx={{ ml: 2 }}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(productData);
                }}
                disabled={inCart(productData._id)}
              >
                {inCart(productData._id) ? "Added to cart" : "Add to cart"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Box sx={{ mt: 6 }}>
        <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
          <AnimatedText
            text="Related"
            styles={{ display: "inline-block" }}
            color="primary"
          />
          <Box component="span"> Products</Box>
        </Typography>
        <ProductCarousel items={relatedProducts} />
      </Box> */}
    </Box>
  );
}

export default ProductSingle;
