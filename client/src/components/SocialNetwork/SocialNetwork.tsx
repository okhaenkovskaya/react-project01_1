import { Link } from "react-router-dom";
import styled from "styled-components";

import PageTitle from "../PageTitle";

const Container = styled.div`
    text-align: center;
`;

const SocialList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        margin: 0 5px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        color: #fff;
    }
`;

type PropsWrap = {
    socialNetworkData: Props;
};

type Props = {
    title: string;
    items:  Item[]
};

type Item = {
    link: string;
    svg:  React.ReactNode | string;
};



const SocialNetwork = ({ socialNetworkData: { title, items }}: PropsWrap ) => (
    <Container>
        <PageTitle classes="small-title">{title}</PageTitle>
        <SocialList>
            {items.map((item: Item) => (
                <li key={item.link}>
                    <Link to={item.link}>{item.svg}</Link>
                </li>
            ))}
        </SocialList>
    </Container>
);

export default SocialNetwork;
