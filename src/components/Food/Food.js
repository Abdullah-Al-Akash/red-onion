import React from 'react';

const Food = (props) => {
        const { name, description, price, img } = props.food;
        return (
                <div className="col px-5">
                        <div className="text-center food">
                                <img src={img} className="img-fluid p-3 w-50 mx-auto" alt="..." />
                                <div className="card-body">
                                        <h5 className="card-title brand-color">{name}</h5>
                                        <p className="card-text">{description}</p>
                                        <h2>${price}</h2>
                                </div>
                        </div>
                </div>
        );
};

export default Food;