import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

function Page() {
  return (
    <Box component="main" sx={{ mt: 9, py: 3 }}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default Page;
