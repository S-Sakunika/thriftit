import axios from "axios";
import { useNotificationContext } from "../context/NotificationContext";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useHttpRequest = () => {
    const { setNotifications } = useNotificationContext();
    const token = localStorage.getItem('jwtToken')

    axios.defaults.headers.common["Authentication"] = `Bearer ${token}`

    const post = async (url, data = null, actions = null) => {
      try {
        const res = await axios.post(`${API_BASE_URL}${url}`, data)
          
          setTimeout(() => {
            setNotifications({
              open: true,
              status: res.data.status,
              messages: res.data.message,
            });
          }, 500)

          actions.setSubmitting(false);
          actions.resetForm();
          return res
      } catch (e) {
        setNotifications({
          open: true,
          status: e.response.data.status,
          messages: e.response.data.message,
        });
        actions.setSubmitting(false);
        return e
      }
    }

    const get = async (url) => {
      try {
        return await axios.get(`${API_BASE_URL}${url}`)
      } catch (e) {
        return e
      }
    }

    return { post, get }
}

export default useHttpRequest