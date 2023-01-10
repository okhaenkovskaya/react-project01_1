import styled from "styled-components";

import { ReactComponent as IconLike } from "../../assets/icons/like.svg";

const LikeComponent = styled.div`
    margin: 0 0 0 10px;
    font-size: 12px;
    line-height: 2;
    color: #fff;

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 3px 5px 0 0;
    }
`;

const Like = ({ children }) => {
    return (
        <LikeComponent>
            <IconLike />
            {children}
        </LikeComponent>
    );
};

export default Like;
