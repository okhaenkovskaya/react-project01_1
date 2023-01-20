import React, { useState, Suspense, useEffect } from "react";
import styled from "styled-components";

import { TasksData } from "../../data/TasksData";
import Loader from "../../components/Loader";
const DashboardTasks = React.lazy(() =>
    import("../../components/DashboardTasks")
);
const DashboardTaskForm = React.lazy(() =>
    import("../../components/DashboardTasks/DashboardTaskForm")
);

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0 0 30px;
`;

const Tasks = () => {
    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        fetch("http://localhost:5010/task")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    const deleteTask = (e, id) => {
        fetch(`http://localhost:5010/task/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => getTasks());
    };

    const updateTask = (e, task) => {
        console.log("654654654546544654");

        fetch(`http://localhost:5010/task/${task._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => getTasks());
    };

    const [tasks, setTasks] = useState([]);

    //  const [newTask, setNewTask] = useState(emptyTask);
    // const [editTask, setEditTask] = useState(emptyTask);

    return (
        <Suspense fallback={<Loader />}>
            <Title>Tasks</Title>
            <DashboardTasks
                tasks={tasks}
                setTasks={setTasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
                // editTask={editTask}
                // setEditTask={setEditTask}
            />

            <DashboardTaskForm
                tasks={tasks}
                setTasks={setTasks}
                //  newTask={newTask}
                // setNewTask={setNewTask}
                // emptyTask={emptyTask}
            />
        </Suspense>
    );
};

export default Tasks;
