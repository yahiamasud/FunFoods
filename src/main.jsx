import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Compounent/Home/Home';
import Footer from './Compounent/Footer/Footer';
import About from './Compounent/About/About';
import Header from './Compounent/Header/Header';
import Login from './Compounent/Login/Login';
import Layout from './Compounent/Layout/Layout';
import Blog from './Compounent/Blog/Blog';
import Regestation from './Compounent/Regestation/Regestation';
import Items from './Compounent/items/items';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders';
import Chefitem from './Compounent/ChefItem/Chefitem';
import PrivateRoute from './Compounent/PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "Footer",
        element: <Footer></Footer>
      },
      {
        path: "About",
        element:<PrivateRoute> <About> </About> </PrivateRoute> 
      },
      {
        path: "Header",
        element: <Header></Header>
      },
      {
        path: "Login",
        element:<Login></Login>
      },
      {
        path: "Blog",
        element: <Blog></Blog>
      },
      {
        path: "Regestation",
        element: <Regestation></Regestation>
      },

      {
        path: "Chefitem",
        element: <Chefitem></Chefitem>,
      },
      {
        path: "Items",
        element: <Items></Items>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
