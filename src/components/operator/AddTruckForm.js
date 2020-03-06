import React, { useState } from 'react';

import TruckReviewForm from '../diner/TruckReviewForm';
import TruckList from '../trucks/TruckList';


const AddTruckForm = () => {
    const [truck, setTruck] = useState([
        {
            id: 3,
            cuisine: 'asian',
            customer_rating_avg: 4.0,
            img_url: 'https://www.rd.com/wp-content/uploads/2018/11/food-truck-2.jpg'
        },
    ]);

    const addNewTruck = truck => {
        const newTruck = {
            id: Date.now(),
            cuisine: truck.cuisine,
            customer_rating_avg: truck.customer_rating_avg,
            img_url: truck.img_url
        };
        setTruck([...truck, newTruck]);
    };

    return(
        <div>
           <div>
           <h2>Trucks Owned</h2>
            {/* truck card with upload truck image */}
           </div>

            <div className="addtruck-form">
                <TruckReviewForm addNewTruck={addNewTruck} />
                {/* <button type="submit">Add a truck</button> */}
                </div>
                <TruckList truck={truck} />

        </div>
    );
};

export default AddTruckForm;