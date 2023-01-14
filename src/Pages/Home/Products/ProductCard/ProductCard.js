import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { img, name,_id } = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <Link to={`/category/products/${_id}`}>
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
            </Link>
        </div>
    )
};

export default ProductCard;