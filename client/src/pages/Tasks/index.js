import React, { useState, Suspense } from "react";
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
    const [tasks, setTasks] = useState(TasksData);
    const emptyTask = {
        id: tasks.length + 1,
        title: "",
        completed: false,
        pinned: false,
    };

    const [newTask, setNewTask] = useState(emptyTask);
    const [editTask, setEditTask] = useState(emptyTask);

    return (
        <Suspense fallback={<Loader />}>
            <Title>Tasks</Title>

            <DashboardTasks
                tasks={tasks}
                setTasks={setTasks}
                editTask={editTask}
                setEditTask={setEditTask}
            />

            <DashboardTaskForm
                tasks={tasks}
                setTasks={setTasks}
                newTask={newTask}
                setNewTask={setNewTask}
                emptyTask={emptyTask}
            />
        </Suspense>
    );
};

export default Tasks;
