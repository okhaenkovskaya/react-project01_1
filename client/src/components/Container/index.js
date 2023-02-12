import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContainerStyle = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: ${(props) => (props.user ? "0" : "30px")};

    svg {
        display: block;
        margin: 0 auto;
        width: 120px;
    }
`;

const Container = ({ children, user }) => {
    return <ContainerStyle user={user}>{children}</ContainerStyle>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.object,
};

export default Container;
