import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as IconStar } from "../../../assets/icons/icon-star.svg";
import { ReactComponent as IconStarRed } from "../../../assets/icons/icon-star-red.svg";
import { ReactComponent as IconPin } from "../../../assets/icons/icon-pin.svg";
import { ReactComponent as IconPencil } from "../../../assets/icons/icon-pencil.svg";
import { ReactComponent as IconDelete } from "../../../assets/icons/plus_circle_icon.svg";
import { IconButton } from "../../Form";

interface StyledDivProps {
    isCompleted: boolean;
    isPinned: boolean;
}

const Task = styled.div<StyledDivProps>`
    background: white;
    ${({ isCompleted }) => isCompleted && "background: #FFFBE8; order: -1"};
    ${({ isPinned }) => isPinned && "background: #C1C1C1;  order: -99"};

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

type Props = {
    item: PropsItem;
    deleteTask: (e: any, id: any) => void;
    updateTask: (e: any, updatedTask: PropsItem) => void;
};

type PropsItem = {
    _id: any;
    task: string;
    completed: boolean;
    pinned: boolean;
    createdAt: any;
};

const DashboardTask = ({ item, deleteTask, updateTask }: Props) => {
    const [isEdit, setIsEdit] = useState(false);

    const [updatedTask, setUpdatedTask] = useState<PropsItem>(item);

    const updateTaskValue = (e: any) => {
        setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
    };

    const setUpdateTask = (e: any) => {
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
                clickFunction={(e: any) =>
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
                    onChange={(e: any) => updateTaskValue(e)}
                />
            ) : (
                <Title>{item.task}</Title>
            )}

            <IconButton
                name="pinned"
                clickFunction={(e: any) =>
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

            <IconButton clickFunction={(e: any) => deleteTask(e, item._id)}>
                <IconDelete />
            </IconButton>
        </Task>
    );
};

export default DashboardTask;
