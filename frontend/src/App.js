import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Pages
import Register from "./pages/Register";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import CarModels from "./carServices/CarModels";
import Services from "./carServices/Services"; // ✅ New import

// Layout
import Sidebar from "./components/Sidebar";

const AppContent = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Show Sidebar only for authenticated routes except auth pages */}
      {!isAuthPage && isAuthenticated && <Sidebar />}

      <div
        className="content"
        style={{
          marginLeft: !isAuthPage && isAuthenticated ? "250px" : "0",
          backgroundColor: "#121212", // Unified dark gray background
          minHeight: "100vh",
        }}
      >
        <Routes>
          {/* Redirect root to register */}
          <Route path="/" element={<Navigate to="/register" />} />

          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          {isAuthenticated && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/car-models" element={<CarModels />} />
              <Route path="/services" element={<Services />} /> {/* ✅ New route */}
            </>
          )}

          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
          />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
