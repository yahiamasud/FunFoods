import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Compounent/Home/Home';
import Footer from './Compounent/Footer/Footer';
import Header from './Compounent/Header/Header';
import Login from './Compounent/Login/Login';
import Layout from './Compounent/Layout/Layout';
import Blog from './Compounent/Blog/Blog';
import Regestation from './Compounent/Regestation/Regestation';
import Items from './Compounent/items/items';
import AuthProviders from './providers/AuthProviders';
import ChefItem from './Compounent/ChefItem/ChefItem';
import PrivateRoute from './Compounent/PrivateRoute/PrivateRoute';
import Datials from './Compounent/datials/Datials';
import Error from './Compounent/Error/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CopiRigt from './Compounent/CopiRignt/CopiRigt';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
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
        path: "ChefItem",
        element: <ChefItem></ChefItem>
       
      },
      {
        path: "Items",
        element: <Items></Items>
      },
      {
        path:"details/:id",
        element:<PrivateRoute><Datials></Datials></PrivateRoute>
      },
      {
        path:"CopiRigt",
        element:<CopiRigt></CopiRigt>
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

