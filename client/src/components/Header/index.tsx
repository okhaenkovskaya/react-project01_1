import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import Logo from "./Logo/Logo";
import { headerData } from "../../data/HeaderData";
import { NavItem, NavList } from "../Nav";
import { AuthContext } from "../../context/auth";
import { ReactComponent as IconLogin } from "../../assets/icons/icon-login.svg";
import { ReactComponent as IconUserMan } from "../../assets/icons/user-man.svg";
import UserDropInfo from "./UserDropInfo/UserDropInfo";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1260px;
    margin: 0 auto;
    padding: 30px;
`;

const NavigationWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const UserWrapDrop = styled.div`
    position: relative;
`;

const LoginLink = styled(Link)`
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #fff;
    text-decoration: none;

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 0 5px 0 0;
    }
`;

const DropOpener = styled.button`
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    color: #fff;
    position: relative;
    font-weight: 700;

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 0 5px 0 0;
    }
`;


type PropsItem = {
    id: any;
    link: string;
    name: string;
};

const Header = () => {
    const { logoUrl, headerNavItems } = headerData;
    const context = useContext(AuthContext);
    const { user } = context;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <HeaderContainer>
            <Logo logoUrl={logoUrl} />

            <NavigationWrap>
                <NavList>
                    {headerNavItems.map((item: PropsItem) =>
                        user && item.link === "/Register" ? null : (
                            <NavItem key={item.id} url={item.link}>
                                {item.name}
                            </NavItem>
                        )
                    )}
                </NavList>

                {user ? (
                    <UserWrapDrop>
                        <DropOpener
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsPopupOpen(true);
                            }}
                        >
                            <IconUserMan />
                            {user.fullName}
                        </DropOpener>
                        {isPopupOpen && <UserDropInfo />}
                    </UserWrapDrop>
                ) : (
                    <LoginLink to="/login">
                        <IconLogin />
                        Login
                    </LoginLink>
                )}
            </NavigationWrap>
        </HeaderContainer>
    );
};

export default Header;
