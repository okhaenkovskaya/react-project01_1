import styled from "styled-components";

interface StyledDivProps {
    direction: string;
}

const HeaderNavList = styled.ul<StyledDivProps>`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0 20px;
    flex-direction: ${(props) => props.direction || "row"};
`;

type Props = {
    children: React.ReactNode;
    direction: string;
} & typeof defaultProps;

const defaultProps = {
    direction: 'row',
};

const NavList = ({ children, direction }: Props) => <HeaderNavList direction={direction}>{children}</HeaderNavList>;

export default NavList;
