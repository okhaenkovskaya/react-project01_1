import styled from "styled-components";

import { ReactComponent as IconLike } from "../../assets/icons/like.svg";

const LikeComponent = styled.button`
    margin: 0 0 0 10px;
    background: none;
    padding: 8px 15px;
    border: 1px solid #fff;
    font-size: 12px;
    line-height: 2;
    color: #fff;

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 3px 5px 0 0;
        transform: rotate(180deg);
    }
`;

const Dislike = ({ likes, removeLike }) => {
    return (
        <LikeComponent onClick={removeLike}>
            <IconLike />
            Remove Like
            {likes}
        </LikeComponent>
    );
};

export default Dislike;
