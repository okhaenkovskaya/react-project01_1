import styled from "styled-components";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0 0 10px;
`;

const PageTitle = ({ children }) => {
    return <Title>{children}</Title>;
};

export default PageTitle;
