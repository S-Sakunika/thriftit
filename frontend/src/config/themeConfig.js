import { createTheme, alpha } from "@mui/material"

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
    page: {
      minHeight: "75vh",
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
        fontWeight: 500,
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
      0: "none",
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      6: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
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
      MuiFormHelperText: {
        styleOverrides: {
          root:{
            position: "absolute",
            right: 0,
            bottom: "-12px",
            zIndex: 1,
            padding: "0.15rem 0.5rem",
            borderRadius: "0.5rem",
            "&.Mui-error": {
              backgroundColor: "#faebd7",
            },
          },
        },
      },
    },
  });

export default theme
