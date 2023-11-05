import { Box, Container } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Home from "./Home";
import ShopPage from "./ShopPage";
import Login from "./Login";
import NotFound from "./NotFound";

function Page() {
  const { pathname } = useLocation();
  return (
    <Box component="main" sx={{ mt: 9, py: 3 }}>
      <Container sx={{ minHeight: (theme) => theme.page.minHeight }}>
        {pathname !== "/" && <Breadcrumbs />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:parentCategory/:childCategory"
            element={<ShopPage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default Page;
