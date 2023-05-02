import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
