import React, { useState, Suspense, useEffect } from "react";

import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import { BASE_URL_TASK } from "../../data/Constans";

const DashboardTasks = React.lazy(() =>
    import("../../components/DashboardTasks")
);
const DashboardTaskForm = React.lazy(() =>
    import("../../components/DashboardTasks/DashboardTaskForm/DashboardTaskForm")
);

type PropsTask = {
    _id: any;
    task: string;
    completed: boolean;
    pinned: boolean;
    createdAt: any;
};


const Tasks = () => {
    const [tasks, setTasks] = useState<PropsTask[]>([]);

    const getTasks = () => {
        fetch(`${BASE_URL_TASK}`)
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    const deleteTask = (e: any, id: number | string) => {
        fetch(`${BASE_URL_TASK}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => getTasks());
    };

    const updateTask = (id: any, task: PropsTask) => {
        fetch(`${BASE_URL_TASK}/${task._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then(() => getTasks());
    };


    useEffect(() => {
        getTasks();
    }, []);

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
