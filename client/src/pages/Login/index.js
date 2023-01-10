import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { accountData } from "../../data/AccountData";
import {
    Container,
    Button,
    Input,
    Title,
    Form,
} from "../../components/Form/form";

const LoginPage = () => {
    const [isError, setIsError] = useState(null);
    const { loginTitle, bgTitle } = accountData;
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5010/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "data");
                if ("result" in data) {
                    context.login(data.result);
                    navigate("/dashboard");
                } else {
                    setIsError(data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setIsError(null);
    };

    return (
        <Container>
            <img src={bgTitle} alt={loginTitle} />

            <Form onSubmit={handleSubmit}>
                <Title>{loginTitle}</Title>
                {isError && <mark>{isError}</mark>}
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <Button type="submit">Send</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
