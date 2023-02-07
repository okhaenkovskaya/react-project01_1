import React from "react";
import styled from "styled-components";

const IconButtonStyle = styled.button`
    background: none;
    border: 0;
    padding: 0;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;

    &.like--button {
        width: 60px;
        border: 1px solid #fff;
        padding: 0 10px;

        svg {
            display: inline-block;
            vertical-align: top;
            margin: 3px 5px 0 0;
        }
    }
`;

const IconButton = ({ children, isDisabled, clickFunction, classes, name }) => {
    return (
        <IconButtonStyle
            name={name}
            className={classes}
            disabled={isDisabled ? isDisabled : false}
            type="button"
            onClick={clickFunction}
        >
            {children}
        </IconButtonStyle>
    );
};

export default IconButton;
