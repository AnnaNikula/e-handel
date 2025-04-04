import Register from './components/Register';
import Contact from './components/Contact';
import Home from './components/Home';
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom';

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <Register />, path: '/register' },
        { element: <Contact />, path: '/contact' }
      ],
      element: (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
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

  return <RouterProvider router={router} />;
}

export default App;