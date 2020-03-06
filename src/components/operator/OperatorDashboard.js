import React from 'react';

import { Link } from 'react-router-dom';
// import AddTruckForm from './AddTruckForm';
import EditTruck from '../../forms/EditTruck';

const OperatorDashboard = () => {
    return(
        <div>
           <div>
           <h2>Trucks Owned</h2>
            {/* truck card with upload truck image */}
           </div>

            <Link to="/add a truck" component={EditTruck} >
            <button type="submit">Add a truck</button>
            </Link>

            <Link>
            <button type="submit">Edit a truck</button>
            </Link>

            <Link>
            <button type="submit">Delete a truck</button>
            {/* may need a delete comfirmed alert */}
            </Link>

        </div>
    );
};

export default OperatorDashboard;