import React from "react";
import useRefreshToken from "../Hooks/useRefreshToken";

// class Dashboard extends React.Component {

//     const refresh = useRefreshToken();

//     render() {
//         return (
//             <h1>Dashboard</h1>
//             <button onClick={}></button>
//         );
//     }
// }

// export default Dashboard;

const Dashboard = () => {
    const refresh = useRefreshToken();

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => refresh()}>Refresh</button>
        </div>
    )
}

export default Dashboard;