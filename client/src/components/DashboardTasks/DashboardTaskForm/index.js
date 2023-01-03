import styled from "styled-components";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Button = styled.button`
  background: #bdb2ff;
  border: 1px solid #bdb2ff;
  border-radius: 8px;
  border: 0;
  padding: 10px;
  height: 50px;
  width: 192px;
  margin: 0;
  letter-spacing: -0.5px;
  color: #262835;

  &:disabled {
    opacity: 0.5;
  }
`;

const DashboardTaskForm = ({
  setNewTask,
  newTask,
  emptyTask,
  setTasks,
  tasks,
}) => {
  const [isValid, setIsValid] = useState(false);
  const button = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      setTasks(tasks.concat(newTask));
      setNewTask(emptyTask);
      toast.success("🦄🦄🦄 Form submitted successfully.", {
        theme: "dark",
      });
      button.current.disabled = true;
    } else {
      toast.error("Please fill out the form correctly.");
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
      toast.warn("You must fill at least 3 letters");
    }
    setNewTask({ ...newTask, [name]: value, id: tasks.length + 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Type here..."
        value={newTask.title}
      />
      <Button ref={button} disabled>
        SUBMIT
      </Button>
      <ToastContainer />
    </form>
  );
};

export default DashboardTaskForm;
