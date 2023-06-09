import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Accommodation from './routes/Accommodation';
import NotFound from './routes/404';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/logement/:id',
    element: <Accommodation />,
  },
  {
    path: '*',
    element: <Navigate to="/404"></Navigate>,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
