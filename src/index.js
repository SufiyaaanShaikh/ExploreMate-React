import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import App from "./App";
import "./css/App.css";
import "./css/utility.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Review from "./pages/Review";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

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
    path: "/users",
    element: <Feed />,
  },
  {
    path: "/review",
    element: <Review />,
  },
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
