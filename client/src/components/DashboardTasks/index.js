import DashboardTask from "./DashboardTask";
import styled from "styled-components";

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const DashboardTasks = ({ tasks, setTasks, deleteTask, updateTask }) => {
    return (
        <Tasks>
            {tasks.map((item) => (
                <DashboardTask
                    key={item._id}
                    item={item}
                    tasks={tasks}
                    //     setEditTask={setEditTask}
                    //    editTask={editTask}
                    setTasks={setTasks}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            ))}
        </Tasks>
    );
};

export default DashboardTasks;
