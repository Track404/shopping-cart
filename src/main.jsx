import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from './Container/Container';
import Homepage from './Homepage/Homepage';
import Shoppage from './Shoppage/Shoppage';
import Cartpage from './Cart/Cart';
import ErrorPage from './Errorpage/Errorpage';
import ShowCard from './ShowCard/ShowCard';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/shop',
        element: <Shoppage />,
        children: [
          { index: true, element: <ShowCard /> },
          { path: '/shop/:category', element: <ShowCard /> },
        ],
      },
      {
        path: 'cart',
        element: <Cartpage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
