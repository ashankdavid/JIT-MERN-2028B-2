import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin(event) {
        event.preventDefault();

        fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if (data.token) {
                localStorage.setItem("token", data.token);
                setMessage("Login successful!");
            } else {
                setMessage(data.message);
            }
        });
    }

    return (
        <section>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />

                <button type="submit">
                    Login
                </button>
            </form>

            {message && <p>{message}</p>}
        </section>
    );
}

export default LoginPage;