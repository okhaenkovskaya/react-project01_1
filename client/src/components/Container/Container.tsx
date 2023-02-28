import styled from "styled-components";

interface StyledDivProps {
    user: object | null;
}

const ContainerStyle = styled.div<StyledDivProps>`
    margin: 0 auto;
    max-width: 1250px;
    padding: ${(props) => (props.user ? "0" : "30px")};

    svg {
        display: block;
        margin: 0 auto;
        width: 120px;
    }
`;

type Props = {
    user?: object | null;
    children: React.ReactNode;
}& typeof defaultProps;

const defaultProps = {
    user: null,
};

const Container = ({ children, user }: Props) => (
    <ContainerStyle user={user}>{children}</ContainerStyle>
);

Container.defaultProps = defaultProps;

export default Container;
