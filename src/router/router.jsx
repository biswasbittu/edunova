import { createBrowserRouter } from "react-router";
import Mainlyaouts from "../Layouts/Mainlyaouts";
import Home from "../pages/Home/Home";
import Articles from "../pages/Articles/Articles";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlyaouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/articles",
                element:<Articles/>
            },
            {
                path:"/categories",
                element:<Categories/>
            },
            {
                path:'/about',
                element:<About/>
            }
        ]
    },
]);