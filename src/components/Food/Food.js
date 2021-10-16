import React from 'react';
import { useHistory } from 'react-router';

const Food = (props) => {
        const { id, name, description, price, img } = props.food;
        const history = useHistory();

        const url = `/food/${id}`
        const foodDetails = () => {
                history.push(url);
        }
        return (
                <div className="col px-3">
                        <div className="text-center food">
                                <img src={img} className="img-fluid p-3 w-75 mx-auto" alt="..." />
                                <div className="card-body">
                                        <h5 onClick={foodDetails} style={{
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                        }} className="card-title brand-color">{name}</h5>
                                        <p className="card-text">{description}</p>
                                        <h2>${price}</h2>
                                </div>
                        </div>
                </div>
        );
};

export default Food;