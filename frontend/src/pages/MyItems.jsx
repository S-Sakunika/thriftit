import {
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  alpha,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useHttpRequest from "../hooks/useHttpRequest";
const UPLOAD_BASE_URL = process.env.REACT_APP_UPLOAD_BASE_URL;

function MyItems() {
  const { user } = useAuthContext();
  const { get, remove } = useHttpRequest();
  const [myItems, setMyItems] = useState([]);
  const [dialogOpen, setdialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState("");

  const deleteItem = async (id) => {
    await remove(`product/${id}`)
      .then((res) => {
        setdialogOpen(false);
        getMyItems();
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const getMyItems = async () => {
    await get(`product/vendor/${user._id}`)
      .then((res) => {
        setMyItems(res.data.result);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  useEffect(() => {
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
                    src={`${UPLOAD_BASE_URL}${item.image.filename}`}
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
                  <Typography align="center">
                    {item.createdAt.split("T")[0]}
                  </Typography>
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
                    onClick={(e) => {
                      e.preventDefault();
                      setdialogOpen(true);
                      setDeletingItem(item._id);
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

      <Dialog open={dialogOpen} onClose={() => setdialogOpen(false)} fullWidth>
        <DialogTitle variant="h3" align="center" sx={{ pt: 5 }}>
          Are you sure?
        </DialogTitle>
        <DialogContent align="center" sx={{ pb: 5 }}>
          <Typography sx={{ maxWidth: "80%" }}>
            Are you sure you want to delete this item? The item will be
            permanently deleted.
          </Typography>
          <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.secondary.main, 0.2),
              }}
              onClick={() => setdialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              color="error"
              variant="contained"
              sx={{ ml: 1 }}
              onClick={() => deleteItem(deletingItem)}
            >
              Delete
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MyItems;
