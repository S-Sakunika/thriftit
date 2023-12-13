import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FiUser,
  FiTag,
  FiPackage,
  FiDollarSign,
  FiLogOut,
} from "react-icons/fi";
import UserAccountPage from "./UserAccountPage";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

function MyAccount() {
  const { pathname } = useLocation();
  const { user, logout } = useAuthContext();
  const { setCartItems } = useCartContext();

  const IconListItemButton = (props) => (
    <ListItemButton
      component={Link}
      {...props}
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.05),
        mb: 1,
        borderRadius: "0.5rem",
        "&.Mui-selected": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.white.main,
          "& .MuiListItemIcon-root": {
            color: (theme) => theme.palette.white.main,
          },
          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.white.main,
            "& .MuiListItemIcon-root": {
              color: (theme) => theme.palette.white.main,
            },
          },
        },
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.white.main,
          "& .MuiListItemIcon-root": {
            color: (theme) => theme.palette.white.main,
          },
        },
      }}
    >
      {props.children}
    </ListItemButton>
  );

  const Icon = (props) => (
    <ListItemIcon sx={{ minWidth: "38px" }}>{props.children}</ListItemIcon>
  );

  const menuItems = [
    {
      name: "Profile",
      icon: <FiUser />,
      to: "/my-account/profile",
    },
    {
      name: "My items",
      icon: <FiTag />,
      to: "/my-account/my-items",
      allowAccess: "vendor",
    },
    {
      name: "My orders",
      icon: <FiDollarSign />,
      to: "/my-account/my-orders",
      allowAccess: "vendor",
    },
    {
      name: "Order history",
      icon: <FiPackage />,
      to: "/my-account/order-history",
    },
  ];

  const getmenuItems = () => {
    if (user.role !== "vendor")
      return menuItems.filter((item) => item.allowAccess !== "vendor");
    return menuItems;
  };

  const isSelected = (to) =>
    to.split("/").pop() === pathname.split("/").splice(2, 1)[0];

  return (
    <Grid container spacing={3} sx={{ my: 2 }}>
      <Grid item xs={12} md={3}>
        <List component="nav" sx={{ p: 0 }}>
          <IconContext.Provider value={{ size: 16 }}>
            {getmenuItems().map((item, i) => {
              return (
                <IconListItemButton
                  key={i}
                  to={item.to}
                  selected={isSelected(item.to)}
                >
                  <Icon>{item.icon}</Icon>
                  <ListItemText>{item.name}</ListItemText>
                </IconListItemButton>
              );
            })}
            <IconListItemButton
              onClick={() => {
                logout();
                setCartItems([]);
              }}
            >
              <Icon>
                <FiLogOut />
              </Icon>
              <ListItemText>Logout</ListItemText>
            </IconListItemButton>
          </IconContext.Provider>
        </List>
      </Grid>
      <Grid item xs={12} md={9}>
        <Routes>
          <Route path=":slug/*" element={<UserAccountPage />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default MyAccount;
