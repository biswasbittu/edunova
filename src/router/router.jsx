import { createBrowserRouter } from "react-router";
import Mainlyaouts from "../Layouts/Mainlyaouts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlyaouts />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
]);