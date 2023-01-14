import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Products = () => {
    const {data} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await fetch('products.json')
            const data = await res.json()
            return data
        }
})
console.log(data)
    return (
        <div>
            <h1 className='text-4xl'>Products</h1>
        </div>
    );
};

export default Products;