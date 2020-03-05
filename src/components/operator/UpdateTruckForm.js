import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FormInput from '../../form-input/FormInput';
import CustomButton from '../../custom-button/CustomButton';


const UpdateTruckForm = (props) => {

    const [truck, setTruck] = useState({
        id: 0,
        img_url: "",
        cuisine: "",
        customer_rating_avg: 3.5
    });

    useEffect(() => {
        fetchTruck(props.match.params.id);
    }, [])

    const fetchTruck = id => {
        axios
        .get(`http://68.183.138.134/operators/register/trucks_owned/${id}`)
        .then(response => {
            console.log("response", response);
            setTruck(response);
        })
        .catch(error => 
            console.log("error", error));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('this is editing a truck', truck);
        axios
        .put(`http://68.183.138.134/operators/register/trucks_owned/${truck.id}`, truck)
        .then(response => {
            console.log(response.data);
            setTruck(response.data);
            props.history.push('/');
        })
        .catch(error => 
            console.log(error.response));
    }

    const handleChange = event => {
        setTruck({
            ...truck,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="truck-list">
            <h2>Update Truck</h2>
            <div>
                <form onSubmit={onSubmit}>
                <FormInput 
                    type="text" 
                    name="cuisine" 
                    value={truck.cuisine}
                    label="cuisine"
                    handleChange={handleChange} 
                />
                <FormInput 
                    type="text" 
                    name="customer rating avg" 
                    value={truck.customer_rating_avg}
                    label="customer rating image"
                    handleChange={handleChange} 
                />
                <CustomButton>Apply Changes</CustomButton>         
                </form>
            </div>
            
        </div>
    )
}