import DashboardTask from "./DashboardTask";
import styled from "styled-components";

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const DashboardTasks = ({ tasks, setTasks, setEditTask, editTask }) => {
  return (
    <Tasks>
      {tasks.map(item =>
        <DashboardTask key={item.id}
          item={item}
          tasks={tasks}
          setEditTask={setEditTask}
          editTask={editTask}
          setTasks={setTasks}
        />)}
    </Tasks>
  );
};

export default DashboardTasks;
