import styled from "styled-components";

const Title = styled.div`
    padding: 50px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 2;
    color: #ffffff;
    text-align: center;
`;

const PageHeader = ({ children }) => {
    return <Title>{children}</Title>;
};

export default PageHeader;
