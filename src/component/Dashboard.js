import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const data = useLocation()
    // Set the data of user's and user in useState variable to print  
    const [user, setUser] = useState(data.state.user);

    return(
        <div>
            {/* If admin then we get the array of objects and if user than we get only object, So checking what type of data we get and displaying based on that */}
            {Array.isArray(user.data)? 
            // If we get array of object of all the user's data
            user.data.map((user) => (
                <div className="user">{user.name}</div>
            )):
            // If we get only object of user data
             <div className="user">{user.data.name}</div>}
        </div>
    );
}

export default Dashboard;