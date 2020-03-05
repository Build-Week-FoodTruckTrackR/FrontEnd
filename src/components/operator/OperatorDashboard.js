import React from 'react';

import { Link } from 'react-router-dom';

const OperatorDashboard = () => {
    return(
        <div>
            <h2>Trucks Owned</h2>
            truck object rendered here:
            <button>Add a truck</button>
            <Link to='/trucks'>Edit/Delete a truck</Link>
        </div>
    );
};

export default OperatorDashboard;