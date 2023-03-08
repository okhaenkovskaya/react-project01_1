import styled from "styled-components";

import DashboardTask from "./DashboardTask/DashboardTask";

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const DashboardTasks = ({ tasks, deleteTask, updateTask }) => (
    <Tasks>
        {tasks.map((item) => (
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
