import React from "react";
import styled from "styled-components";

const Text = styled.div`
    text-align: center;
    color: red;
    font-size: 20px;
`;

const NotFound = () => {
    return <Text>No Posts found</Text>;
};

export default NotFound;
