import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Contact from './components/Contact';
import Home from './components/Home';
import ProductList from './components/ProductList';
import {
  createHashRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <Register />, path: '/register' },
        { element: <Contact />, path: '/contact' },
        { element: <ProductList />, path: '/ProductList' }
      ],
      element: (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;