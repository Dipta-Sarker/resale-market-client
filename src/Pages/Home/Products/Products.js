import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
    const {data,isLoading} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await fetch('https://resale-market-server-azure.vercel.app/laptops')
            const data = await res.json()
            return data
        }
})

if(isLoading){
    return <progress className="progress progress-success w-56" value="100" max="100"></progress>
}
console.log(data)
    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>Products</h1>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
            {
                data.map(product =><ProductCard key={product._id} product={product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Products;