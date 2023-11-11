import { Snackbar, Alert } from "@mui/material";
import { useNotificationContext } from "../context/NotificationContext";

function Notification({ notifications }) {
  const { setNotifications } = useNotificationContext();
  const { open, status, messages } = notifications;

  const messageList = Array.isArray(messages) ? messages : [messages];
  const severity = () => (status === "success" ? "success" : "error");

  return messageList.map((msg, i) => {
    return (
      <Snackbar
        key={i}
        open={open}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{ bottom: `${56 * i + 24}px !important` }}
        onClose={() => setNotifications({ open: false, messages: [] })}
      >
        <Alert variant="filled" severity={severity()}>
          {msg}
        </Alert>
      </Snackbar>
    );
  });
}

export default Notification;
