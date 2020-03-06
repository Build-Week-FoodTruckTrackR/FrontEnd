import React, { useState } from 'react';

const TruckReviewForm = props => {
    const [rateTruck, setRateTruck] = useState({
        id: "", 
        cuisine: "", 
        customer_rating_avg: ""});

    const handleChanges = e => {
        setRateTruck({...rateTruck, [e.target.name]: e.target.value});
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewRating(rateTruck);
        setRateTruck({id: "", cuisine: "", customer_rating_avg: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Truck ID</label>
            <input id="id" type="text" name="id" onChange={handleChanges} value={rateTruck.id} />
            <label htmlFor="cuisine">Cuisine</label>
            <input id="cuisine" type="text" name="cuisine" onChange={handleChanges} value={rateTruck.cuisine} />
            <label htmlFor="role">Rating Average</label>
            <input id="rating" type="text" name="role" onChange={handleChanges} value={rateTruck.customer_rating_avg} />
            <button type="submit">Add Rating</button>
        </form>
    );
};

export default TruckReviewForm;