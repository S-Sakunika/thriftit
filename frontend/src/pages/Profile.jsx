import { Stack, Typography, Chip, alpha } from "@mui/material";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.03),
        p: 2,
        borderRadius: "1em",
        minHeight: "200px",
      }}
    >
      <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
      <Typography>{user.email}</Typography>
      {user.role === "vendor" && (
        <Chip
          label={user.role}
          color="primary"
          size="small"
          sx={{
            color: (theme) => theme.palette.common.white,
            minWidth: "80px",
            mt: 1,
          }}
        />
      )}
    </Stack>
  );
}

export default Profile;
