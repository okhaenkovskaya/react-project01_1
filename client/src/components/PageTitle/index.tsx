import React from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0 0 10px;

    &.small-title {
        font-size: 16px;
        line-height: 20px;
    }
`;

const PageTitle = ({ children, classes }) => {
    return <Title className={classes}>{children}</Title>;
};

export default PageTitle;
