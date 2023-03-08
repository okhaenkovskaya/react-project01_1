import styled from "styled-components";

import Button from "../../components/Link/Link";
import { notFoundImageData } from "../../data/NotFoundData";
import PageTitle from "../../components/PageTitle";

const NotFoundContainer = styled.div`
    background-image: url(${notFoundImageData.src});
    background-position: 50%;
    background-size: cover;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 513px;

    > div {
        padding: 50px;
        text-align: center;
        opacity: 0.82;
    }

    a {
        margin: 10px auto;
        min-width: 171px;
    }
`;

const NotFound = () => (
    <NotFoundContainer>
        <PageTitle>404</PageTitle>
        <Button url="/">Go to Homepage</Button>
    </NotFoundContainer>
);

export default NotFound;
