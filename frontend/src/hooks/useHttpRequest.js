import axios from "axios";
import { useNotificationContext } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useHttpRequest = () => {
    const { setNotifications } = useNotificationContext();
    const token = localStorage.getItem('auth_token')
    const navigate = useNavigate()

    axios.defaults.headers.common["Authentication"] = `Bearer ${token}`

    const post = async (url, data = null, actions = null, redirectToLogin) => {
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

        handleError(e, navigate, redirectToLogin)
        throw e
      }
    }

    const get = async (url, redirectToLogin) => {
      try {
        return await axios.get(`${API_BASE_URL}${url}`)
      } catch (e) {
        handleError(e, navigate, redirectToLogin)
        throw e
      }
    }

    return { post, get }
}

const handleError = (e, navigate, redirectToLogin = true) => {
  if(e.response.status === 403) {
    localStorage.removeItem('auth_token') 
    localStorage.removeItem('user') 
    if(redirectToLogin) navigate('/login')
  } 
  return e
}

export default useHttpRequest