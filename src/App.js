import { createTheme, ThemeProvider, alpha } from "@mui/material"
import Header from "./components/Header";
import Page from "./pages/Page"

const theme = createTheme({
  palette: {
    primary: {
      main: '#05ccd9',
    },
    secondary: {
      main: '#333333',
    },
    white: {
      main: '#ffffff',
    },
  },
  transitions: {
    main: "all 200ms ease-in",
  },
  typography: {
    fontSize: 13.5,
    fontFamily: `"Poppins", sans-serif`,
    h1: {
      fontSize: "1.7rem",
      fontWeight: 600,
      lineHeight: 1.25
    },
    h2: {
      fontSize: "1.675rem",
      fontWeight: 600,
      lineHeight: 1.1
    },    
    h3: {
      fontSize: "1.575rem",
      fontWeight: 600,
      lineHeight: 1.1
    },    
    h4: {
      fontSize: "1.475rem",
      fontWeight: 600,
      lineHeight: 1.2
    },    
    h5: {
      fontSize: "1.275rem",
      fontWeight: 600,
      lineHeight: 1.2
    },    
    h6: {
      fontSize: "1.0625rem",
      fontWeight: 600,
      lineHeight: 1.2
    },
    body1: {
      fontSize: 13.5,
    },
    button: {
      textTransform: "none"
    }
  },
  shadows: {
    6: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: '#fff',
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
                boxShadow: "none"
              },
            }),
            borderRadius: '0.375rem',
            boxShadow: "none"
        }),
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Header />
      <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
