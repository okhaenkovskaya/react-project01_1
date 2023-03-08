import { ReactComponent as IconDisLike } from "../../assets/icons/dislike.svg";
import IconButton from "../Form/IconButton";

type Props = {
    likes: string;
    removeLike: void;
};

const Dislike = ({ likes, removeLike }: Props) => (
    <IconButton clickFunction={removeLike} classes="like--button">
        <IconDisLike />
        {likes}
    </IconButton>
);

export default Dislike;
