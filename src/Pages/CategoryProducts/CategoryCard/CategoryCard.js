import React from 'react';

const CategoryCard = ({product}) => {
const {sellerName,name,img,location,resalePrice,use,time}= product
    
    return (
        <div className="card w-96  shadow-xl">
        <figure><img src= {img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Location: {location}</p>
          <p>Resale Price:$ {resalePrice}</p>
          <p>Use: {use} Year</p>
          <p>Post: {time}</p>
          <p>Seller Name: {sellerName}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;