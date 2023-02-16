import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input, Textarea, Button, Form } from "../Form";
import PageTitle from "../PageTitle";

const ContactFormContainer = styled.div`
    max-width: 1168px;
    margin: 0 auto 30px;
    padding: 30px;
    background: #191a1d;
    border-radius: 20px;
    text-align: center;

    input.error {
        background: red;
    }
`;

const ContactForm = () => {
    const [isValid, setIsValid] = useState(false);
    const formRef = useRef(null);
    const buttonRef = useRef(null);
    const toastId = useRef(null);
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
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "🦄🦄🦄 Form submitted successfully."
                );
            }
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Please fill out the form correctly."
                );
            }
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
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Write 10 numbers");
            }
            return false;
        }
    };

    const isValidField = (value) => {
        if (value.length >= 3) {
            return true;
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.warn(
                    "You must fill at least 3 letters"
                );
            }

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
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Not valid Email");
            }
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
            <PageTitle>Contact Form</PageTitle>
            <Form innerRef={formRef} submitFunction={handleSubmit}>
                <Input
                    changeFunction={handleChange}
                    isRequired={true}
                    name={"firstName"}
                    type={"text"}
                    placeholder={"First Name"}
                    value={data.firstName}
                    classes={"input--long"}
                />

                <Input
                    changeFunction={handleChange}
                    name={"lastName"}
                    placeholder={"Last Name"}
                    value={data.lastName}
                    classes={"input--long"}
                />

                <Input
                    changeFunction={handleChange}
                    isRequired={true}
                    name={"email"}
                    type={"email"}
                    placeholder={"Email"}
                    value={data.email}
                    classes={"input--long"}
                />

                <Input
                    changeFunction={handleChange}
                    isRequired={true}
                    name={"phone"}
                    type={"tel"}
                    placeholder={"Phone"}
                    value={data.phone}
                    classes={"input--long"}
                />

                <Textarea
                    changeFunction={handleChange}
                    name={"message"}
                    placeholder={"Message"}
                    value={data.message}
                />

                <Button innerRef={buttonRef} isDisabled={true}>
                    Send
                </Button>
                <ToastContainer />
            </Form>
        </ContactFormContainer>
    );
};

export default ContactForm;
