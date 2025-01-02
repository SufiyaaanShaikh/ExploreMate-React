import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
// import App from "./App";
import "./css/App.css";
import "./css/utility.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Review from "./pages/Review";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import SingleReview from "./components/Review/SingleReview";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
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
    path: "edit-profile",
    element: <EditProfile />,
  },
  // {
  //   path: "/user-profile",
  //   element: <UserProfile />,
  // },
]);

root.render(
  <>
    <Toaster />
    <React.StrictMode>
      <AuthProvider>
        {" "}
        {/* Wrap the app with AuthProvider */}
        <RouterProvider router={allRoutes} />
      </AuthProvider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
