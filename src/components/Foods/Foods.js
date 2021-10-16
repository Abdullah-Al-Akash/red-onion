import React, { useState } from 'react';
import fakeData from '../fakedata/fakedata';
import Food from '../Food/Food';

const Foods = () => {
        const [foods, setFoods] = useState([]);

        if (foods.length === 0) {
                const newFoods = fakeData.filter(food => food.category === 'lunch');
                setFoods(newFoods);
        }

        const handleFood = category => {
                const newFoods = fakeData.filter(food => food.category === category);
                setFoods(newFoods);
        }
        return (
                <div className="container mt-5 pb-5">
                        <div className="text-center mb-5">
                                <button onClick={() => handleFood('breakfast')} className="btn btn-outline-danger food-btn fw-bolder btn-lg">Breakfast</button>
                                <button onClick={() => handleFood('lunch')} className="btn btn-outline-danger food-btn fw-bolder btn-lg ms-3">Lunch</button>
                                <button onClick={() => handleFood('dinner')} className="btn btn-outline-danger food-btn fw-bolder btn-lg ms-3">Dinner</button>
                        </div>
                        {
                                foods.length ?
                                        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
                                                {
                                                        foods.map(food => <Food
                                                                key={food.id}
                                                                food={food}
                                                        >
                                                        </Food>)
                                                }
                                        </div>
                                        :
                                        <div className="text-center">
                                                <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" className="img-fluid" alt="" />
                                        </div>
                        }


                </div>
        );
};

export default Foods;