import { createTheme, ThemeProvider } from "@mui/material"
import Header from "./components/Header";

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
  typography: {
    fontSize: 13.5,
    fontFamily: `"Poppins", sans-serif`,
    button: {
      textTransform: "none"
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Header />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet purus risus, in dictum turpis tincidunt id. Sed cursus erat id nisl hendrerit, ut lobortis arcu rhoncus. Nullam convallis posuere nunc, ac sollicitudin arcu facilisis eu. Suspendisse sagittis dignissim ornare. Pellentesque et leo dictum, tincidunt nulla in, lobortis purus. Proin in sapien eget nibh venenatis efficitur. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae iaculis orci, ac bibendum nisi. Curabitur faucibus dignissim lectus, facilisis ultrices purus ullamcorper quis. Proin vitae cursus magna, ac posuere ex.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
