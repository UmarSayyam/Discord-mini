import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Removed `Navigation` and added `Navigate`
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" replace />; // Added `replace` to avoid adding to browser history
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      {/* Wrapped all routes inside <Routes> for correct usage */}
      <Routes>
        {/* Protected route for the home page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the registration page that clears local storage */}
        <Route path="/register" element={<RegisterAndLogout />} />

        {/* Route for the logout functionality */}
        <Route path="/logout" element={<Logout />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
