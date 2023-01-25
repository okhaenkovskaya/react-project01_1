import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { accountData } from "../../data/AccountData";
import {
    Container,
    Button,
    Input,
    Title,
    Form,
} from "../../components/Form/form";

const RegisterPage = () => {
    const { registerTitle, bgTitle } = accountData;
    const navigate = useNavigate();
    const [isError, setIsError] = useState(null);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        tel: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5010/user/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                tel: userData.tel,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if ("result" in data) {
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
            <img src={bgTitle} alt={registerTitle} />

            <Form onSubmit={handleSubmit}>
                <Title>{registerTitle}</Title>
                {isError && <mark>{isError}</mark>}

                <Input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    required
                    value={userData.firstName}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                <Input
                    type="tel"
                    placeholder="Phone"
                    name="tel"
                    value={userData.tel}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={userData.password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    required
                    value={userData.confirmPassword}
                    onChange={handleChange}
                />
                <br />
                <Button type="submit">Send</Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;
