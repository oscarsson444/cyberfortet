import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import "./i18n/i18n";
import About from "./routes/about.jsx";
import Articles from "./routes/articles.jsx";
import Home from "./routes/home.jsx";
import Root from "./routes/root.jsx";
import SubnetMask from "./articles/subnet-mask.jsx";
import Portfolio from "./routes/portfolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "articles",
        element: <Articles />,
        children: [
          {
            path: "subnet-mask",
            element: <SubnetMask />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
