import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard/CategoryCard';

const CategoryProducts = () => {
    const data = useLoaderData()
    const CategoryProducts = data[0].category
    console.log(CategoryProducts)
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>Category</h1>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    CategoryProducts.map(pro=><CategoryCard  product={pro}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;