import { Typography } from "@mui/material";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return <Typography>Hello {user.firstName},</Typography>;
}

export default Profile;
