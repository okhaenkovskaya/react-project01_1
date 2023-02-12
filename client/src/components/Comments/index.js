import React from "react";
import styled from "styled-components";

import { ReactComponent as IconComment } from "../../assets/icons/comment.svg";

const CommentsComponent = styled.div`
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

const Comments = ({ children }) => {
    return (
        <CommentsComponent>
            <IconComment />
            {children}
        </CommentsComponent>
    );
};

export default Comments;
