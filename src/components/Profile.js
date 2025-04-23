import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // API call simulation
        console.log("useEffect called once");

        // we can clean up here if needed
    }, []); // This ensures it runs only once on mount

    return (
        <div>
            <h1>Profile Component</h1>
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
        </div>
    );
};

export default Profile;
