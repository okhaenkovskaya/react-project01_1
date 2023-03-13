import styled from "styled-components";

import IconButton from "../Form/IconButton";
import { ReactComponent as IconLike } from "../../assets/icons/like.svg";

const FirstCommentContainer = styled.div`
    margin: 50px 0 30px;

    .frame {
        display: flex;
    }
`;

const FirstCommentStyle = styled.div`
    margin: 0 0 30px;
    padding: 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

type Props = {
    comment: PropsComment;
    AddLikeComment: (id: any) => void;
    ShowReplyForm: (e: any) => void;
};

type PropsComment = {
    _id: any;
    text: string;
    likes: string | number;
};

const FirstComment = ({ AddLikeComment, ShowReplyForm, comment }: Props) => (
    <FirstCommentContainer>
        <FirstCommentStyle>
            <p>{comment.text}</p>
        </FirstCommentStyle>

        <div className="frame">
            <IconButton
                clickFunction={() => AddLikeComment(comment._id)}
                classes="like--button"
            >
                <IconLike />
                {comment.likes}
            </IconButton>
            <IconButton
                classes="like--button"
                clickFunction={(e: any) => ShowReplyForm(e)}
            >
                Reply
            </IconButton>
        </div>
    </FirstCommentContainer>
);

export default FirstComment;
