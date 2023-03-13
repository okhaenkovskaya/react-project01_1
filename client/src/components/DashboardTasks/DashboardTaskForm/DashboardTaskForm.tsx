import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL_TASK } from "../../../data/Constans";
import { Button, Input } from "../../Form";

type Props = {
    tasks: any[];
    setTasks: ([]) => void;
};

type PropsEmptyTask = {
    task: string;
};

const DashboardTaskForm = ({ setTasks, tasks }: Props) => {
    const emptyTask: PropsEmptyTask = {
        task: "",
    };
    const toastId = useRef<any>(null);
    const [isValid, setIsValid] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [newTask, setNewTask] = useState<PropsEmptyTask>(emptyTask);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isValid) {
            fetch(`${BASE_URL_TASK}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            })
                .then((res) => res.json())
                .then((data) => {
                    setTasks([...tasks, data]);
                });

            setNewTask(emptyTask);
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Form success");
            }
            if (buttonRef.current) {
                buttonRef.current.disabled = true;
            }
        } else if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Please fill correctly.");
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (value.length > 3) {
            setIsValid(true);
            if (buttonRef.current) {
                buttonRef.current.disabled = false;
            }
        } else {
            setIsValid(false);
            if (buttonRef.current) {
                buttonRef.current.disabled = true;
            }
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.warn("You must fill");
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
            <Button innerRef={buttonRef} isDisabled classes="task-button">
                SUBMIT
            </Button>
            <ToastContainer />
        </form>
    );
};

export default DashboardTaskForm;
