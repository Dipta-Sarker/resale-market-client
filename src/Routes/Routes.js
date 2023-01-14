import Error from "../Error/Error";
import Blog from "../Pages/Blog/Blog";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");

const router = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/category/products/:id',
        loader: async({params})=>{return fetch(`http://localhost:5000/laptops/${params.id}`);}
        ,element:<PrivateRouter><CategoryProducts></CategoryProducts></PrivateRouter>}
    ]},

    {path:'*', element:<Error></Error>}
])

export default router;