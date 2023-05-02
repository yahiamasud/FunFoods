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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders';



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
        element: <About></About>
      },
      {
        path: "Header",
        element: <Header></Header>
      },
      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Blog",
        element: <Blog></Blog>
      },
      {
        path: "Regestation",
        element: <Regestation></Regestation>
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
