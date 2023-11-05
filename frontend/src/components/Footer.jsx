import {
  Box,
  Container,
  alpha,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../assets/images/logo.png";
import { FiPhone, FiMail, FiFacebook, FiInstagram } from "react-icons/fi";
import FooterLinkList from "./FooterLinkList";

const IconListItemButton = (props) => (
  <ListItemButton
    component="a"
    disableGutters
    dense
    href={props.href}
    sx={{
      display: "inline-flex",
      transition: (theme) => theme.transitions.main,
      "&:hover": {
        backgroundColor: "transparent",
        color: (theme) => theme.palette.primary.main,
      },
    }}
  >
    {props.children}
  </ListItemButton>
);

const Icon = (props) => (
  <ListItemIcon sx={{ minWidth: "auto" }}>{props.children}</ListItemIcon>
);

const Text = (props) => (
  <ListItemText
    primary={props.text}
    primaryTypographyProps={{
      ml: 1,
    }}
  />
);

const FilledIconButton = (props) => (
  <IconButton
    href={props.href}
    size="large"
    sx={{
      ...props.styles,
      backgroundColor: (theme) => theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: (theme) => theme.palette.primary.main,
      },
    }}
  >
    {props.children}
  </IconButton>
);

const linkListHelpful = [
  {
    title: "FAQ",
    to: "/",
  },
  {
    title: "Contact us",
    to: "/",
  },
  {
    title: "Tracking order",
    to: "/",
  },
];

const linkListPolicies = [
  {
    title: "Privacy policy",
    to: "/",
  },
  {
    title: "Terms & conditions",
    to: "/",
  },
];

function Footer() {
  const theme = useTheme();
  const date = new Date();

  return (
    <Box component="footer">
      <Box
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.075),
          py: 6,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  maxWidth: 180,
                  width: "100%",
                }}
                src={Logo}
                alt="Logo"
              />
              <Box sx={{ mt: 3 }}>
                <Box>
                  <IconListItemButton href="tel:3345568994">
                    <Icon>
                      <FiPhone size="14" />
                    </Icon>
                    <Text text="334 556 8994" />
                  </IconListItemButton>
                </Box>
                <Box>
                  <IconListItemButton href="mailto:info@thriftit.com">
                    <Icon>
                      <FiMail size="14" />
                    </Icon>
                    <Text text="info@thriftit.com" />
                  </IconListItemButton>
                </Box>
              </Box>
              <Box sx={{ mt: 3 }}>
                <FilledIconButton href="/">
                  <FiFacebook color={theme.palette.white.main} size="18" />
                </FilledIconButton>
                <FilledIconButton size="large" styles={{ ml: 1 }} href="/">
                  <FiInstagram color={theme.palette.white.main} size="18" />
                </FilledIconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterLinkList heading="Helpful" links={linkListHelpful} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterLinkList heading="Policies" links={linkListPolicies} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container sx={{ py: 1 }}>
          <Typography variant="body1">
            Copyright &copy; {date.getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
