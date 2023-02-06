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
    color: red;
    width: 40px;
    height: 40px;
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
