import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "./config/themeConfig"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Page from "./pages/Page"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ScrollToTop />
        <Header />
        <Page />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
