import { Box, Container } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Home from "./Home";
import ShopPage from "./ShopPage";
import Auth from "./Auth";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Checkout from "./Checkout";
import MyAccount from "./MyAccount";
import ProtectedRoute from "../components/ProtectedRoute";

function Page() {
  const { pathname } = useLocation();
  return (
    <Box component="main" sx={{ mt: 9, py: 3 }}>
      <Container sx={{ minHeight: (theme) => theme.page.minHeight }}>
        {pathname !== "/" && <Breadcrumbs />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/my-account/*" element={<MyAccount />} />
            {/* <Route path="/my-account/my-items" element={<MyAccount />} /> */}
            {/* <Route path="/my-account/:path1/:path2" element={<MyAccount />} /> */}
          </Route>
          <Route
            path="category/:parentCategory/:childCategory"
            element={<ShopPage />}
          />
          <Route
            path="category/:parentCategory/:childCategory/:product"
            element={<ShopPage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default Page;
