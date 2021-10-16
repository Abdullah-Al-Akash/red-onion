import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakedata/fakedata';

const FoodDetails = () => {
        const { foodId } = useParams();
        const [food, setFood] = useState({});
        const selectedFood = fakeData.find(foods => foods.id == foodId);
        return (
                <div className="mt-5 pt-5">

                </div>
        );
};

export default FoodDetails;