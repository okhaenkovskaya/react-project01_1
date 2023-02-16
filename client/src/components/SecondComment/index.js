import React from "react";
import styled from "styled-components";

const SecondCommentContainer = styled.div`
    margin: 0 30px 30px;
    display: flex;

    .holder {
        max-width: 507px;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
    }

    li {
        margin: 0 10px 10px 0;
    }

    em {
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
        font-style: normal;
        color: #fff;
        opacity: 0.6;
    }
`;
const Avatar = styled.div`
    background: #2f80ed;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
`;

const SecondCommentStyle = styled.div`
    margin: 0 0 30px;
    padding: 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const SecondComment = ({ innerComment }) => {
    return (
        <SecondCommentContainer>
            <Avatar>User</Avatar>
            <div className="holder">
                <SecondCommentStyle>
                    <p>{innerComment}</p>
                </SecondCommentStyle>
            </div>
        </SecondCommentContainer>
    );
};

export default SecondComment;
