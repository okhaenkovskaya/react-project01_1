import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
    display: block;
    background: #5458f7;
    width: fit-content;
    padding: 7px 15px;
    border-radius: 40px;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 600;

    &:hover {
        opacity: 0.7;
    }

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 3px 0 0 6px;
    }
`;

type Props = {
    children: React.ReactNode;
    url: string;
};

const Button = ({ children, url }: Props) =>  <ButtonLink to={url}>{children}</ButtonLink>;

export default Button;
