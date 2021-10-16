import React, { useEffect, useState } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router';
import fakeData from '../fakedata/fakedata';

const FoodDetails = () => {
        const { foodId } = useParams();
        const [quantity, setQuantity] = useState(1);

        const selectedFood = fakeData.find(foods => foods.id === +foodId);
        return (
                <div className="mt-5 pt-5 container">
                        <div className="row">
                                <div className="col-lg-6">
                                        <div>
                                                <h1 className="brand-color pt-5">{selectedFood.name}</h1>
                                                <p className="pt-5">So what are these mesmerizing meals that keep us hooked despite our best efforts? We've compiled a list of the 100 most popular fast-food items that keep fans coming back for more. We began with QSR Magazine's 2018 report of the top 50 most successful fast-food chains in America as a measure for popularity, then identified the standout menu items from each, using a range of articles, reports, and published rankings to guide us.</p>
                                        </div>
                                        <div className="pt-5">
                                                <div className="d-flex">
                                                        <h2>${selectedFood.price}</h2>
                                                        <div className="count-section ms-3">
                                                                <button onClick={() => {
                                                                        setQuantity(
                                                                                quantity <= 1 ? 1 : (quantity - 1)
                                                                        )
                                                                }} className="btn btn-lg fw-bolder">- </button>{quantity}
                                                                <button onClick={() => {
                                                                        setQuantity(quantity + 1)
                                                                }} className="btn btn-lg fw-bolder"> +</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <img src={selectedFood.img} className="img-fluid w-75" alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default FoodDetails;