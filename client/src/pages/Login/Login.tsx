import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { accountData } from "../../data/AccountData";
import { BASE_URL_USER } from "../../data/Constans";
import { Button, Form, Input } from "../../components/Form";
import PageTitle from "../../components/PageTitle";
import ContainerWithBG from "../../components/ContainerWithBG/ContainerWithBG";

interface IUserData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [isError, setIsError] = useState<null>(null);
    const { loginTitle, bgTitle }: { loginTitle: string; bgTitle: string } = accountData;
    const context = useContext(AuthContext);
    const { login }: {login: any} = context;
    const navigate = useNavigate();

    const [userData, setUserData] = useState<IUserData>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await fetch(`${BASE_URL_USER}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userData.email ,
                password: userData.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if ("result" in data) {
                    login(data);
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
        <ContainerWithBG imgSrc={bgTitle} imgAlt={loginTitle}>
            <Form submitFunction={handleSubmit}>
                <PageTitle>{loginTitle}</PageTitle>
                {isError && <mark>{isError}</mark>}
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    changeFunction={handleChange}
                    classes="input--long"
                />
                <Button type="submit">
                    <span>Login</span>
                </Button>
            </Form>
        </ContainerWithBG>
    );
};

export default LoginPage;
