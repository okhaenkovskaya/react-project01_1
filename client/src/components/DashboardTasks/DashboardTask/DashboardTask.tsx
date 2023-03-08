import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as IconStar } from "../../../assets/icons/icon-star.svg";
import { ReactComponent as IconStarRed } from "../../../assets/icons/icon-star-red.svg";
import { ReactComponent as IconPin } from "../../../assets/icons/icon-pin.svg";
import { ReactComponent as IconPencil } from "../../../assets/icons/icon-pencil.svg";
import { ReactComponent as IconDelete } from "../../../assets/icons/plus_circle_icon.svg";
import { IconButton } from "../../Form";

const Task = styled.div`
    background: white;
    ${(props) => props.isCompleted && "background: #FFFBE8; order: -1"};
    ${(props) => props.isPinned && "background: #C1C1C1;  order: -99"};

    border-radius: 8px;
    padding: 15px;
    margin: 0 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;

    &.pinned button[name="completed"] {
        pointer-events: none;
    }
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin: 0;
    width: calc(100% - 200px);
`;

const Input = styled.input`
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.9);
    margin: -10px 0;
    padding: 0 10px;
    border: 1px solid red;
    height: 50px;
    width: calc(100% - 200px);
`;

const DashboardTask = ({ item, deleteTask, updateTask }) => {
    const [isEdit, setIsEdit] = useState(false);

    const [updatedTask, setUpdatedTask] = useState(item);

    const updateTaskValue = (e) => {
        setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
    };

    const setUpdateTask = (e) => {
        if (e.key === "Enter") {
            updateTask(e, updatedTask);
            setIsEdit(false);
        }

        if (e.key === "Escape") {
            setIsEdit(false);
        }
    };

    return (
        <Task
            isCompleted={item.completed}
            isPinned={item.pinned}
            className={item.pinned ? "pinned" : ""}
        >
            <IconButton
                name="completed"
                clickFunction={(e) =>
                    updateTask(e, {
                        ...item,
                        completed: !item.completed,
                    })
                }
            >
                {item.completed ? <IconStarRed /> : <IconStar />}
            </IconButton>

            {isEdit ? (
                <Input
                    id={item._id}
                    name="task"
                    placeholder={item.task}
                    onKeyDown={setUpdateTask}
                    value={updatedTask.task}
                    onChange={(e) => updateTaskValue(e)}
                />
            ) : (
                <Title>{item.task}</Title>
            )}

            <IconButton
                name="pinned"
                clickFunction={(e) =>
                    updateTask(e, {
                        ...item,
                        pinned: !item.pinned,
                        completed: false,
                    })
                }
            >
                <IconPin />
            </IconButton>

            <IconButton clickFunction={() => setIsEdit(!isEdit)}>
                <IconPencil />
            </IconButton>

            <IconButton clickFunction={(e) => deleteTask(e, item._id)}>
                <IconDelete />
            </IconButton>
        </Task>
    );
};

export default DashboardTask;
