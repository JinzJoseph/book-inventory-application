import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App"
import Home from '../home/home.jsx'

import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import BookShop from "../stall/BookShop.jsx";
import SingleBook from "../stall/SingleBook.jsx";

import SimpleDashboard from "../components/Dashboard/SimpleDashboard.jsx";
import UploadBook from "../components/Dashboard/UploadBook.jsx";
import ManageBook from "../components/Dashboard/ManageBook.jsx";
import Dashboard from "../components/Dashboard/Dashboard.jsx"
import EditBook from "../components/Dashboard/EditBook.jsx";
import Signup from "../components/Dashboard/Signup.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Login from "../home/Login.jsx";
import Logout from "../components/Logout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
     
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/shop",
        element:<BookShop/>
      },
      {
        path:"/book/:id",
        element:<SingleBook/>
      }
     
    ]
  } ,
  {
    path:"/admin/dashboard",
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
    {
      path:"/admin/dashboard",
      element:<SimpleDashboard/>
    },
    {
      path:"/admin/dashboard/upload",
      element:<UploadBook/>
    },
    {
      path:"/admin/dashboard/manage",
      element:<ManageBook/>
    },
    {
      path:"/admin/dashboard/edit-book/:id",
      element:<EditBook/>
    },
    ]
  },{
    path:"/sign-up",
    element:<Signup/>
  },
  {
    path:"/login",
  element:<Login/>
  },
  {
    path:"/logout",
  element:<Logout/>
  }
]);


export default router;
