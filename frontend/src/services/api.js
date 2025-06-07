// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api/auth",
// });

// export const registerUser = (data) => API.post("/register", data);
// export const loginUser = (data) => API.post("/login", data);
// export const getDashboard = (token) =>
//   API.get("/dashboard", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

import axios from "axios";



const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// Register user API call
export const registerUser = (data) => API.post("/register", data);

// Login user API call
export const loginUser = (data) => API.post("/login", data);

// Get dashboard with token and handle token expiry
export const getDashboard = async (token) => {
  try {
    const response = await API.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    if (
      err.response?.status === 401 &&
      err.response.data.message?.toLowerCase().includes("expired")
    ) {
      alert("Session expired. Please login again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else {
      // For other errors, rethrow or handle accordingly
      throw err;
    }
  }
};
