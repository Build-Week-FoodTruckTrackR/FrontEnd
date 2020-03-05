import React from 'react';

import { Link } from 'react-router-dom';

const OperatorDashboard = () => {
    return(
        <div>
           <div>
           <h2>Trucks Owned</h2>
            {/* truck card with upload truck image */}
           </div>

            <Link>
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