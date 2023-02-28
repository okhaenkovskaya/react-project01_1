import React, { useState, Suspense, useEffect } from "react";

import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import { BASE_URL_TASK } from "../../data/Constans";
const DashboardTasks = React.lazy(() =>
    import("../../components/DashboardTasks")
);
const DashboardTaskForm = React.lazy(() =>
    import("../../components/DashboardTasks/DashboardTaskForm")
);

const Tasks = () => {
    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        fetch(`${BASE_URL_TASK}`)
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    const deleteTask = (e, id) => {
        fetch(`${BASE_URL_TASK}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => getTasks());
    };

    const updateTask = (id, task) => {
        fetch(`${BASE_URL_TASK}/${task._id}`, {
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

    return (
        <Suspense fallback={<Loader />}>
            <PageTitle>Tasks</PageTitle>
            <DashboardTasks
                tasks={tasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />

            <DashboardTaskForm tasks={tasks} setTasks={setTasks} />
        </Suspense>
    );
};

export default Tasks;
