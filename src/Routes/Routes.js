import Error from "../Error/Error";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");

const router = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/category/products/:id',
        loader: async({params})=>{return fetch(`http://localhost:5000/laptops/${params.id}`);}
        ,element:<CategoryProducts></CategoryProducts>}
    ]},

    {path:'*', element:<Error></Error>}
])

export default router;