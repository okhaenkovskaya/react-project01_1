import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { accountData } from "../../data/AccountData";
import { BASE_URL_USER } from "../../data/Constans";
import { Button, Input, Form } from "../../components/Form";
import PageTitle from "../../components/PageTitle";
import ContainerWithBG from "../../components/ContainerWithBG/ContainerWithBG";

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

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await fetch(`${BASE_URL_USER}/registration`, {
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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setIsError(null);
    };

    return (
        <ContainerWithBG imgSrc={bgTitle} imgAlt={registerTitle}>
            <Form submitFunction={handleSubmit}>
                <PageTitle>{registerTitle}</PageTitle>

                {isError && <mark>{isError}</mark>}

                <Input
                    placeholder="First Name"
                    name="firstName"
                    isRequired
                    value={userData.firstName}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={userData.lastName}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    isRequired
                    value={userData.email}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    type="tel"
                    placeholder="Phone"
                    name="tel"
                    value={userData.tel}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    isRequired
                    value={userData.password}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    isRequired
                    value={userData.confirmPassword}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Button type="submit">Send</Button>
            </Form>
        </ContainerWithBG>
    );
};

export default RegisterPage;
