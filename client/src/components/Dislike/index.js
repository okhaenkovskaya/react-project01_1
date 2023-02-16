import React from "react";
import { ReactComponent as IconDisLike } from "../../assets/icons/dislike.svg";
import IconButton from "../Form/IconButton";

const Dislike = ({ likes, removeLike }) => {
    return (
        <IconButton clickFunction={removeLike} classes={"like--button"}>
            <IconDisLike />
            {likes}
        </IconButton>
    );
};

export default Dislike;
