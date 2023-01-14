import Home from "../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");

const router = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
        {path:'/',element:<Home></Home>}
    ]}
])

export default router;