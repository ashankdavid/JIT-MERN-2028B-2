import { useState } from "react";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleRegister(event) {
        event.preventDefault();

        fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMessage(data.message);
        });
    }

    return (
        <section>
            <h2>Register</h2>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />

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
                    Register
                </button>

            </form>

            {message && <p>{message}</p>}
        </section>
    );
}

export default RegisterPage;