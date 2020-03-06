import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DinerDashboard = (props) => {
    const [faveTruck, setFaveTruck] = useState();

    useEffect(() => {
        const id = props.match.params.id;

        axios
        .get(`http://68.183.138.134/diners/favoriteTrucks/${id}`)
        .then(response => {
            console.log("response", response);
            setFaveTruck(response.data);
        })
        .catch(error => {
            console.log("error getting trucks", error);
        });

    },[props.match.params.id])

    if (!faveTruck) {
        return <div>Loading favorite trucks...</div>;
    }

    const { address, cuisine, customer_rating_avg, faveTrucks } = faveTruck;

    return(
        <div>

           <div>
               Cuisine: {cuisine}
           </div>

           <div>
               Location: {address}
           </div>

           <div>
               Rating: {customer_rating_avg}
           </div>

           <div>
           <h2>Favorite Trucks</h2>
           </div>

           {faveTrucks.map(faveTruck => (
               <div key={faveTruck} 
               />
           ))}

        </div>
    );
};

export default DinerDashboard;