import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/services/api";

interface User {
    _id: string;
    username: string;
    email: string;
}

function Home() {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/me");

                console.log("User from backend:", response.data);

                setUser(response.data);
            } catch (err) {
                console.log(err);
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await api.post("/logout");
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Home</h1>

            <h2>
                Welcome {user?.username}
            </h2>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Home;