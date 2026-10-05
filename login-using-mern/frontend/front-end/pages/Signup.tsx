import { useState } from "react";
import api from "../src/services/api";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post("/signup", {
                username,
                email,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;