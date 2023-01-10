import { useState, useRef } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input, Textarea, Button } from "../Form";

const ContactFormContainer = styled.div`
    max-width: 1168px;
    margin: 0 auto 30px;
    padding: 30px;
    background: #191a1d;
    border-radius: 20px;

    input.error {
        background: red;
    }
`;

const Form = styled.form`
    max-width: 790px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h2`
    margin: 0 0 30px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 53px;
    color: #fff;
    text-align: center;
`;

const ContactForm = () => {
    const [isValid, setIsValid] = useState(false);
    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            buttonRef.current.style.backgroundColor = "pink";
            toast.success("🦄🦄🦄 Form submitted successfully.", {
                theme: "dark",
            });
        } else {
            toast.error("Please fill out the form correctly.");
        }
    };

    const checkErrors = () => {
        const children = Array.from(formRef.current.children).filter(
            (item) => item.required
        );
        const errorItems = children.filter((item) =>
            item.classList.contains("error")
        );
        buttonRef.current.style.backgroundColor = "black";
        errorItems.length === 0
            ? (buttonRef.current.disabled = false)
            : (buttonRef.current.disabled = true);
        errorItems.length === 0 ? setIsValid(true) : setIsValid(false);
    };

    const isValidPhoneNumber = (input_str) => {
        if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(input_str)) {
            return true;
        } else {
            toast.error("Write 10 numbers");
            return false;
        }
    };

    const isValidField = (value) => {
        if (value.length >= 3) {
            return true;
        } else {
            toast.warn("You must fill at least 3 letters");
            return false;
        }
    };

    const isValidEmail = (email) => {
        if (
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
                email
            )
        ) {
            return true;
        } else {
            toast.error("Not valid Email");
            return false;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            isValidEmail(value)
                ? e.target.classList.remove("error")
                : e.target.classList.add("error");
        } else if (name === "phone") {
            isValidPhoneNumber(value)
                ? e.target.classList.remove("error")
                : e.target.classList.add("error");
        } else {
            isValidField(value)
                ? e.target.classList.remove("error")
                : e.target.classList.add("error");
        }
        checkErrors();

        setData({ ...data, [name]: value });
    };

    return (
        <ContactFormContainer>
            <Title>Contact Form</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    isRequired={true}
                    name={"firstName"}
                    type={"text"}
                    placeholder={"First Name"}
                    value={data.firstName}
                />

                <Input
                    onChange={handleChange}
                    name={"lastName"}
                    placeholder={"Last Name"}
                    value={data.lastName}
                />

                <Input
                    onChange={handleChange}
                    isRequired={true}
                    name={"email"}
                    type={"email"}
                    placeholder={"Email"}
                    value={data.email}
                />

                <Input
                    onChange={handleChange}
                    isRequired={true}
                    name={"phone"}
                    type={"tel"}
                    placeholder={"Phone"}
                    value={data.phone}
                />

                <Textarea
                    onChange={handleChange}
                    name={"message"}
                    placeholder={"Message"}
                    value={data.message}
                />

                <Button ref={buttonRef} isDisabled={true}>
                    Send
                </Button>
                <ToastContainer />
            </Form>
        </ContactFormContainer>
    );
};

export default ContactForm;
