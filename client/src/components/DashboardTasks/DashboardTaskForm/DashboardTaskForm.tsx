import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL_TASK } from "../../../data/Constans";
import { Button, Input } from "../../Form";

const DashboardTaskForm = ({ setTasks, tasks }) => {
    const emptyTask = {
        task: "",
    };
    const toastId = useRef(null);
    const [isValid, setIsValid] = useState(false);
    const buttonRef = useRef(null);
    const [newTask, setNewTask] = useState({
        task: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            fetch(`${BASE_URL_TASK}`, {
                method: "POST",
                headers: {"Content-Type": "application/json",},
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
            buttonRef.current.disabled = true;
        } else if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Please fill out the form correctly.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (value.length > 3) {
            setIsValid(true);
            buttonRef.current.disabled = false;
        } else {
            setIsValid(false);
            buttonRef.current.disabled = true;
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.warn("You must fill at least 3 letters");
            }
        }
        setNewTask({ ...newTask, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                changeFunction={handleChange}
                name="task"
                placeholder="Type here..."
                value={newTask.task}
                classes="task-create-input"
            />
            <Button
                innerRef={buttonRef}
                isDisabled
                classes="task-button"
            >
                SUBMIT
            </Button>
            <ToastContainer />
        </form>
    );
};

export default DashboardTaskForm;
