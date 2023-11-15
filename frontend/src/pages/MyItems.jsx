import {
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  alpha,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useHttpRequest from "../hooks/useHttpRequest";

function MyItems() {
  const { user } = useAuthContext();
  const { get } = useHttpRequest();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      await get(`product/vendor/${user._id}`)
        .then((res) => {
          setMyItems(res.data.result);
        })
        .catch((e) => {
          // console.log(e);
        });
    };
    getMyItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack alignItems="end" sx={{ mb: 1 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 2 }}
          component={Link}
          to="add-new"
        >
          Add new
        </Button>
      </Stack>
      <Stack spacing={2}>
        {myItems.map((item, i) => {
          return (
            <Box
              component={Link}
              to={item.qty > 0 ? `update/${item._id}` : ""}
              key={i}
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.secondary.main, 0.03),
                py: 1,
                px: 2,
                borderRadius: "1em",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                  <Box
                    component="img"
                    src={require("../assets/images/placeholder.jpg")}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3} sx={{ alignSelf: "center" }}>
                  <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                  <Typography>{`$${item.price}`}</Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ alignSelf: "center" }}>
                  <Typography align="right">{item.createdAt}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  sx={{ alignSelf: "center" }}
                  align="right"
                >
                  <Chip
                    label={item.qty > 0 ? "Published" : "Sold"}
                    color={item.qty > 0 ? "primary" : "error"}
                    sx={{
                      color: (theme) => theme.palette.common.white,
                      minWidth: "80px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  sx={{ alignSelf: "center" }}
                  align="right"
                >
                  <Button
                    startIcon={<FiTrash2 size="15" />}
                    sx={{
                      color: (theme) =>
                        alpha(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        })}
        {!myItems.length && (
          <Typography>You haven't posted any items...</Typography>
        )}
      </Stack>
    </>
  );
}

export default MyItems;
