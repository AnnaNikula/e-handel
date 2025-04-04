import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"; // Kontaktkomponent
import Chatt from "./components/Chatt"; // Chattkomponent

const router = createHashRouter([
  {
    children: [
      { element: <Home />, path: '/' },
      { element: <About />, path: '/about' },
      { element: <Contact />, path: '/contact' }, // Kontaktens routing
      { element: <Chatt />, path: '/chatt' } // Chattens routing
    ],
    element: (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om oss</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/chatt">Chatt</Link>
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