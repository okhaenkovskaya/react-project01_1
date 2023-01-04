import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavListItem = styled.li`
    margin: ${(props) => props.margin || "0 0 0 10px"};
`;

const NavbarLink = styled(NavLink)`
    color: #f2f2f2;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    opacity: 0.5;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
    &.active {
        font-weight: 700;
        opacity: 1;
    }

    ${({ type }) =>
        type === "dashboard" &&
        `
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    opacity: 1;
    position: relative;
    padding: 0 20px;
    
    & > svg {
      margin-right: 10px;
    }
    &:before {
      content: "";
      position: absolute;
      top: 11px;
      left: 0;
      width: 2px;
      height: 12px;
      background: #C1C6DB;
      border-radius: 0 4px 4px 0;
    }
    &.active{
      font-weight: 400;
      color: #BDB2FF;
      svg path {
        fill: #BDB2FF;
      }
      &:before {
        background: #BDB2FF;
      }
    }
  `}
`;

const NavItem = ({ children, type, url, margin, svg, isEnd }) => {
    const end = isEnd ? "end" : null;

    return (
        <NavListItem margin={margin}>
            <NavbarLink type={type} activeclassname="active" to={url} end={end}>
                {svg}
                {children}
            </NavbarLink>
        </NavListItem>
    );
};

export default NavItem;
