import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5595-125-21-249-98.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
  },
});

// Request interceptor to include token in the headers if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to token expiration
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh");
      if (!refreshToken) {
        // No refresh token, redirect to login
        return Promise.reject(error);
      }

      try {
        const response = await axiosInstance.post("/main/api/token/refresh/", {
          refresh: refreshToken,
        });

        const { access } = response.data;
        localStorage.setItem("token", access);

        // Update the original request with the new token
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access}`;
        originalRequest.headers["Authorization"] = `Bearer ${access}`;

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh token has expired, redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        window.location.href = "/login"; // Or use your navigate method
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
