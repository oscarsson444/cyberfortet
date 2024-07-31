import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PythonKeylogger from "./articles/python-keylogger.jsx";
import ErrorPage from "./error-page.jsx";
import "./i18n/i18n";
import "./index.css";
import About from "./routes/about.jsx";
import Articles from "./routes/articles.jsx";
import Home from "./routes/home.jsx";
import Portfolio from "./routes/portfolio.jsx";
import Root from "./routes/root.jsx";

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
            path: "python-keylogger",
            element: <PythonKeylogger />,
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
