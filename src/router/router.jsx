import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import HowItWork from "../HowItWork/HowItWork";

export const router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
        {path:"" , element:<Home/>},
        {path:"/HowItWork" , element:<HowItWork/>},
        {path:"*",element:<h1 className="p-5 min-h-screen text-red-600 font-[700]">PAGE NOT FOUND</h1>}
    ]},
])