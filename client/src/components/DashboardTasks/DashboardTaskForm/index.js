import styled from "styled-components";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL_TASK } from "../../../data/Constans";
import { Button } from "../../Form";

const Input = styled.input`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin: 0 20px 0 0;
    padding: 0 10px;
    border: 1px solid red;
    height: 50px;
    width: 520px;
    background: #ffffff;
    border: 1px solid #e6e7e9;
    border-radius: 8px;
`;

const DashboardTaskForm = ({ setTasks, tasks }) => {
    const emptyTask = {
        task: "",
    };
    const toastId = useRef(null);
    const [isValid, setIsValid] = useState(false);
    const button = useRef(null);
    const [newTask, setNewTask] = useState({
        task: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            fetch(`${BASE_URL_TASK}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            })
                .then((res) => res.json())
                .then((data) => {
                    setTasks([...tasks, data]);
                });

            setNewTask(emptyTask);
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Form submitted successfully.");
            }
            button.current.disabled = true;
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Please fill out the form correctly."
                );
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (value.length > 3) {
            setIsValid(true);
            button.current.disabled = false;
        } else {
            setIsValid(false);
            button.current.disabled = true;
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.warn(
                    "You must fill at least 3 letters"
                );
            }
        }
        setNewTask({ ...newTask, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                onChange={handleChange}
                name="task"
                type="text"
                placeholder="Type here..."
                value={newTask.task}
            />
            <Button ref={button} isDisabled={true} classes={"task-button"}>
                SUBMIT
            </Button>
            <ToastContainer />
        </form>
    );
};

export default DashboardTaskForm;
