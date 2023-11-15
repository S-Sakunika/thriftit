import { useEffect } from "react"
import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "./config/themeConfig"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Page from "./pages/Page"
import Notification from "./components/Notification"
import { useNotificationContext } from './context/NotificationContext'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { notifications } = useNotificationContext()
  const { getUser } = useAuthContext()

  useEffect(() => {
    getUser(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ScrollToTop />
        <Header />
        <Page />
        <Footer />
        <Notification notifications={notifications}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
