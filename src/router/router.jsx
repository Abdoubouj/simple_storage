import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
        {path:"" , element:<Home/>},
        {path:"*",element:<h1 className="p-5 text-red-600 font-[700]">PAGE NOT FOUND</h1>}
    ]},
])