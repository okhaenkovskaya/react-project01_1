import React from "react";
import { ReactComponent as IconLike } from "../../assets/icons/like.svg";
import IconButton from "../Form/IconButton";

type Props = {
    likes: string | number;
    addLike: () => void;
};

const Like = ({ likes, addLike }: Props) => {
    return (
        <IconButton clickFunction={addLike} classes={"like--button"}>
            <IconLike />
            {likes}
        </IconButton>
    );
};

export default Like;
