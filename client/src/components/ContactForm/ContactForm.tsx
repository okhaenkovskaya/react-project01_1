import { useState, useRef } from "react";
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

type PropsData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
};

const ContactForm = () => {
    const [isValid, setIsValid] = useState<boolean>(false);

    const formRef = useRef<HTMLFormElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const toastId = useRef<any>(null);
    const [data, setData] = useState<PropsData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isValid) {
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = "pink";
            }
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Form submitted successfully.");
            }
        } else if(!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Please fill out the form correctly.");
        }
    };

    const checkErrors = () => {
        const children = Array.from(formRef.current.children).filter(
            (item: any) => item.required
        );
        const errorItems = children.filter((item: any) =>
            item.classList.contains("error")
        );
        if (buttonRef.current) {
            buttonRef.current.style.backgroundColor = "black";

            errorItems.length === 0
                ? (buttonRef.current.disabled = false)
                : (buttonRef.current.disabled = true);
        }
        errorItems.length === 0 ? setIsValid(true) : setIsValid(false);
    };

    const isValidPhoneNumber = (input_str: string) => {
        if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(input_str)) {
            return true;
        }
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Write 10 numbers");
        }
        return false;
    };

    const isValidField = (value: string) => {
        if (value.length >= 3) {
            return true;
        }
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.warn("You must fill at least 3 letters")
        }

        return false;
    };

    const isValidEmail = (email: string) => {
        if (
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
                email
            )
        ) {
            return true;
        }
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Not valid Email");
        }
        return false;
    };

    const handleChange = (e: any) => {
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
                    isRequired
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={data.firstName}
                    classes="input--long"
                />

                <Input
                    changeFunction={handleChange}
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    classes="input--long"
                />

                <Input
                    changeFunction={handleChange}
                    isRequired
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    classes="input--long"
                />

                <Input
                    changeFunction={handleChange}
                    isRequired
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={data.phone}
                    classes="input--long"
                />

                <Textarea
                    changeFunction={handleChange}
                    name="message"
                    placeholder="Message"
                    value={data.message}
                />

                <Button innerRef={buttonRef} isDisabled>
                    Send
                </Button>
                <ToastContainer />
            </Form>
        </ContactFormContainer>
    );
};

export default ContactForm;
