import { useState, useEffect } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
    const [data, setData] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('users/');
                console.log(response.data)
                isMounted && setData(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            {data?.length
                ? (
                    <ul>
                        {Object.keys(data[0]).map(key => 
                            <li key={key}>
                                
                                {`${key}: ${JSON.stringify(data[0][key])}`}

                            </li>)}
                    </ul>
                ) : <p>No users to display</p>
            }

        </div>
    )
}

export default Dashboard;