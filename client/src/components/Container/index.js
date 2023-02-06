import styled from "styled-components";

const ContainerStyle = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: ${(props) => (props.user ? "0" : "30px")};
`;

const Container = ({ children, user }) => {
    return <ContainerStyle user={user}>{children}</ContainerStyle>;
};

export default Container;
