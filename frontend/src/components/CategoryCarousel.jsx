import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Button, alpha } from "@mui/material";
import { Link } from "react-router-dom";

function CategoryCarousel(props) {
  const items = props.items;
  const categoryImage = (image) => {
    try {
      return require(`../assets/images/categories/${image}`);
    } catch (e) {
      return require("../assets/images/placeholder.jpg");
    }
  };

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
          <SplideSlide key={index}>
            <Box
              component="img"
              src={categoryImage(item.imageFileName)}
              alt={item.name}
            />
            <Box
              component={Link}
              to={`/category/${item.slug}`}
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                "&:hover": {
                  "& button": {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    transform: "translateY(-50%)",
                  },
                },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: "1.5rem",
                  right: "2rem",
                  width: "calc(100% - (2rem*2))",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.secondary.main, 0.5),
                  transition: (theme) => theme.transitions.main,
                }}
              >
                {item.name}
              </Button>
            </Box>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default CategoryCarousel;
