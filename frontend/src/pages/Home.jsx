import { Box, Grid, Typography, Button } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import AnimatedText from "../components/AnimatedText";
import ItemCarousel from "../components/ItemCarousel";
import IconCard from "../components/IconCard";
import { FiTruck, FiLock, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/sass/splide-carousel.scss";

function Home() {
  const bannerImages = [
    {
      filename: "banner-1.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-2.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-3.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-4.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-5.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-6.jpg",
      alt: "Banner",
    },
    {
      filename: "banner-7.jpg",
      alt: "Banner",
    },
  ];

  const womensCategories = [
    {
      id: "1",
      name: "Dresses",
      to: "womens/dresses",
      filename: "dresses.jpg",
    },
    {
      id: "2",
      name: "Tops",
      to: "womens/tops",
      filename: "tops.jpg",
    },
    {
      id: "3",
      name: "Pants",
      to: "womens/pants",
      filename: "pants.jpg",
    },
    {
      id: "4",
      name: "Skirts",
      to: "womens/skirts",
      filename: "skirts.jpg",
    },
    {
      id: "5",
      name: "Accessories",
      to: "womens/accessories",
      filename: "accessories.jpg",
    },
    {
      id: "6",
      name: "Bags",
      to: "womens/bags",
      filename: "bags.jpg",
    },
    {
      id: "7",
      name: "Shoes",
      to: "womens/shoes",
      filename: "shoes.jpg",
    },
  ];

  const mensCategories = [
    {
      id: "1",
      name: "Shirts",
      to: "mens/shirts",
      filename: "shirts.jpg",
    },
    {
      id: "2",
      name: "T-shirts",
      to: "mens/tshirts",
      filename: "tshirts.jpg",
    },
    {
      id: "3",
      name: "Trousers",
      to: "mens/trousers",
      filename: "trousers.jpg",
    },
    {
      id: "4",
      name: "Jackets",
      to: "mens/jackets",
      filename: "jackets.jpg",
    },
    {
      id: "5",
      name: "Shorts",
      to: "mens/shorts",
      filename: "shorts.jpg",
    },
    {
      id: "6",
      name: "Accessories",
      to: "mens/accessories",
      filename: "mens-accessories.jpg",
    },
    {
      id: "7",
      name: "Shoes",
      to: "mens/shoes",
      filename: "mens-shoes.jpg",
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              maxWidth: "75%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h1" sx={{ mb: 2 }}>
                <Box component="span">Every Piece Tells a Story: Shop </Box>
                <AnimatedText
                  text="Thrifted"
                  color="primary"
                  styles={{ display: "inline-block" }}
                />
                <Box component="span"> Fashion.</Box>
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Explore our thrifted fashion collection, where each piece has a
                unique story to tell. Shop now and be a part of the fashion
                narrative, one piece at a time.
              </Typography>
              <Button
                color="primary"
                variant="contained"
                sx={{ mt: 2 }}
                component={Link}
                to="/"
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Splide
            options={{
              autoplay: true,
              rewind: true,
              interval: 3000,
              perPage: 2,
              gap: "1rem",
              height: "500px",
              cover: true,
            }}
          >
            {bannerImages.map((item, index) => {
              return (
                <SplideSlide key={index}>
                  <Box
                    component="img"
                    src={require(`../assets/images/${item.filename}`)}
                    alt={item.alt}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
          <AnimatedText
            text="Women's"
            styles={{ display: "inline-block" }}
            color="primary"
          />
          <Box component="span"> Categories</Box>
        </Typography>
        <ItemCarousel items={womensCategories} />
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
          <AnimatedText
            text="Men's"
            styles={{ display: "inline-block" }}
            color="primary"
          />
          <Box component="span"> Categories</Box>
        </Typography>
        <ItemCarousel items={mensCategories} />
      </Box>

      <Box sx={{ mt: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: `url(${require("../assets/images/girl-with-bags.png")}) bottom center/contain no-repeat`,
                height: "400px",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                ml: 9,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography component="h2" variant="h4" sx={{ mb: 3 }}>
                <Box component="span">Join with </Box>
                <AnimatedText
                  text="Thrift-it"
                  styles={{ display: "inline-block" }}
                  color="primary"
                />
                <Box component="br" />
                <Box component="span">Get your items a fresh start</Box>
              </Typography>
              <Typography variant="body1">
                Join Thrift-it, where you can sell your clothes and help give
                them a fresh start while earning cash.
              </Typography>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ mt: 4 }}
                  component={Link}
                  to="/"
                >
                  Register Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 14, mb: 6 }}>
        <Typography
          component="h2"
          variant="h4"
          sx={{ mb: 3 }}
          textAlign="center"
        >
          <Box component="span">Why Choose </Box>
          <AnimatedText
            text="Thrift-it"
            styles={{ display: "inline-block" }}
            color="primary"
          />
          <Box component="span"> ?</Box>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <IconCard
              icon={<FiUsers />}
              title="Community Connection"
              description="Join our thriving community of thrift enthusiasts, sellers, and
                buyers who share a passion for secondhand treasures. Interact
                with like-minded individuals, share your finds, and connect with
                a network that celebrates sustainability."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <IconCard
              icon={<FiLock />}
              title="Secure Transactions"
              description="We prioritize your security. Our platform offers secure payment
              options, reliable delivery services, and a trusted reputation
              for ensuring smooth and safe transactions."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <IconCard
              icon={<FiTruck />}
              title="Convenient Delivery"
              description="Enjoy the convenience of having the items collected from your
              location while buyers enjoy the peace of mind knowing their
              thrifted treasures will be delivered right to their doorstep in
              the best possible condition."
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
