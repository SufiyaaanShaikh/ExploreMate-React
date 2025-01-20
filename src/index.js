import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import "./css/App.css";
import "./css/utility.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Review from "./pages/Review";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import SingleReview from "./components/Review/SingleReview";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/UserProfile";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import usersData from "./Data/usersData";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define your routes with createBrowserRouter
const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/feed/:username",
    element: <UserProfile />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/single-review",
    element: <SingleReview />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
]);

root.render(
  <>
    <Toaster />
    <React.StrictMode>
      <AuthProvider  usersData={usersData}>
        {/* Wrap RouterProvider with AuthProvider */}
        <RouterProvider router={allRoutes}>
          {/* Ensure ScrollToTop is rendered inside RouterProvider */}
          <ScrollToTop />
        </RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </>
);

// For performance measurement
reportWebVitals();
