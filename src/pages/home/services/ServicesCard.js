import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, price, title } = service
    return (
        <div className="card card-compact  w-80  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-bold text-lg'>price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;