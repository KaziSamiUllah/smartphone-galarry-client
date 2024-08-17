import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import AuthProviders, { AuthContext } from "./Providers/AuthProvider";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoute from "./Providers/ProtectedRoute";

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = React.useContext(AuthContext)

//   if (loading) {
//     return <div>Loading...</div>; // or any loading spinner
//   }

//   if (!user) {
//     // Redirect to login if user is not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <HomePage></HomePage>
      // </ProtectedRoute>
    ),
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProviders> */}
      <RouterProvider router={router} />
    {/* </AuthProviders> */}
  </React.StrictMode>
);
