import React from 'react';

const TruckList = props => {
    return (
        <div>
                    {props.rateTruck.map(rateTruck => {
            return (
                <div key={rateTruck.id}>
                    <h3>{rateTruck.id}</h3>
                    <h3>{rateTruck.cuisine}</h3>
                    <h3>{rateTruck.customer_rating_avg}</h3>
                </div>
            );  
            })
        }
        </div>
    )
};

export default TruckList;