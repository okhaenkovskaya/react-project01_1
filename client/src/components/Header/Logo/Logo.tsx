import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoWrap = styled.div`
    display: block;
    width: 95px;
`;

const Logo = ({ logoUrl }: { logoUrl: string }) =>  (
    <LogoWrap>
        <Link to="/">
            <img src={logoUrl} alt="My Logo" />
        </Link>
    </LogoWrap>
);

export default Logo;
