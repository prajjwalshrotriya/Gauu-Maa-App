import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cowpage from './ourcowspage';
import Productspage from './productspage';
import Blogpage from './blogpage';
import Visitpage from './visitpage';
import Contactpage from './contactpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "cow",
    element: <Cowpage/>,
  },
  {
    path: "products",
    element: <Productspage/>,
  },
  {
    path: "blog",
    element: <Blogpage/>,
  },
  {
    path: "visit",
    element: <Visitpage/>,
  },
  {
    path: "contact",
    element: <Contactpage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
);


