import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/auth";
import { ReactComponent as IconUser } from "../../../assets/icons/user.svg";

const NavigationDrop = styled.div`
    background: #303033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: absolute;
    width: 179px;
    top: 40px;
    left: -10px;
    padding: 13px;
    z-index: 10;
`;

const LinkButton = styled(Link)`
    display: block;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #ffffff;
`;

const UserInfo = styled.div`
    display: block;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #ffffff;
    padding: 0 0 10px 45px;
    position: relative;

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }

    span {
        display: block;
    }
`;


const UserDropInfo = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <>Please Login...</>;
    }

    return (
        <NavigationDrop>
            <UserInfo>
                <IconUser />
                <span>{user.fullName}</span>
                <span>{user.email}</span>
            </UserInfo>
            <LinkButton to="/dashboard">Dashboard</LinkButton>
            <LinkButton to="/profile">Profile</LinkButton>
            <LinkButton to="/" onClick={logout}>
                LogOut
            </LinkButton>
        </NavigationDrop>
    );
};

export default UserDropInfo;
