import React from "react";
import styled from "styled-components";

const HeaderNavList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0 20px;
    flex-direction: ${(props) => props.direction || "row"};
`;

const NavList = ({ children, direction }) => {
    return <HeaderNavList direction={direction}>{children}</HeaderNavList>;
};

export default NavList;
