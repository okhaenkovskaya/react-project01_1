import styled from "styled-components";

import DashboardTask from "./DashboardTask/DashboardTask";

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

type Props = {
    tasks: any[];
    deleteTask: (e: any, id: any) => void;
    updateTask: (e: any, updatedTask: PropsItem ) => void;
};

type PropsItem = {
    _id: any;
    task: string;
    completed: boolean;
    pinned: boolean;
    createdAt: any;
};

const DashboardTasks = ({ tasks, deleteTask, updateTask }: Props) => (
    <Tasks>
        {tasks.map((item: PropsItem) => (
            <DashboardTask
                key={item._id}
                item={item}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        ))}
    </Tasks>
);

export default DashboardTasks;
