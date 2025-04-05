import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

import Chatt from "./components/Chatt"; // Chattkomponent

const router = createHashRouter([
  {
    children: [
      { element: <Home />, path: '/' },
      { element: <Register />, path: '/register' },
    
      { element: <Chatt />, path: '/chatt' } // Chatt
    
    ],
    element: (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/Produkts">Produkts</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);