import { ReactComponent as IconLike } from "../../assets/icons/like.svg";
import IconButton from "../Form/IconButton";

const Like = ({ likes, addLike }) => {
    return (
        <IconButton clickFunction={addLike} classes={"like--button"}>
            <IconLike />
            {likes}
        </IconButton>
    );
};

export default Like;
