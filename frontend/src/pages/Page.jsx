import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Login from "./Login";
import NotFound from "./NotFound";

function Page() {
  return (
    <Box component="main" sx={{ mt: 9, py: 3 }}>
      <Container sx={{ minHeight: (theme) => theme.page.minHeight }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default Page;
