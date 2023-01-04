import styled from "styled-components";

import Logo from "../Logo";
import { footerData } from "../../data/FooterData";
import { NavItem, NavList } from "../Nav";

const FooterContainer = styled.footer`
    background: #1e1e1e;
    padding: 80px 0;
    color: #fff;

    .footer-container {
        max-width: 1236px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .footer__info {
        width: 30%;

        p {
            font-size: 18px;
            line-height: 28px;
            margin: 20px 0 29px;
        }

        small {
            font-size: 16px;
            line-height: 1.75;
        }
    }

    .footer__menu {
        width: 56.6%;
        display: flex;
    }

    .footer__menu-wrap {
        width: 33.3333%;
    }
`;

const FooterHeading = styled.h2`
    font-size: 20px;
    line-height: 2;
    font-weight: 700;
    margin: 0 0 14px;
`;

const Footer = () => {
    const {
        logoUrl,
        infoTExt,
        copyright,
        footerNavFirst,
        footerNavSecond,
        footerNavThird,
    } = footerData;

    return (
        <FooterContainer>
            <div className="footer-container">
                <div className="footer__info">
                    <Logo logoUrl={logoUrl} />
                    <p>{infoTExt}</p>
                    <small>{copyright}</small>
                </div>
                <div className="footer__menu">
                    <div className="footer__menu-wrap">
                        <FooterHeading>{footerNavFirst.heading}</FooterHeading>
                        <NavList direction="column">
                            {footerNavFirst.items.map((item) => (
                                <NavItem
                                    margin="0 0 5px"
                                    key={item.id}
                                    url={item.link}
                                >
                                    {item.name}
                                </NavItem>
                            ))}
                        </NavList>
                    </div>

                    <div className="footer__menu-wrap">
                        <FooterHeading>{footerNavSecond.heading}</FooterHeading>
                        <NavList direction="column">
                            {footerNavSecond.items.map((item) => (
                                <NavItem
                                    margin="0 0 5px"
                                    key={item.id}
                                    url={item.link}
                                >
                                    {item.name}
                                </NavItem>
                            ))}
                        </NavList>
                    </div>

                    <div className="footer__menu-wrap">
                        <FooterHeading>{footerNavThird.heading}</FooterHeading>
                        <NavList direction="column">
                            {footerNavThird.items.map((item) => (
                                <NavItem
                                    margin="0 0 5px"
                                    key={item.id}
                                    url={item.link}
                                >
                                    {item.name}
                                </NavItem>
                            ))}
                        </NavList>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
