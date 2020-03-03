import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return(
        <div>
            <p>Access as :</p>
            <Link to='diner dashboard'>Diner UserDashboard</Link>
            <button>Diner</button>
            <br></br>
            <button>Operator</button>
        </div>
    );
}

export default UserDashboard;