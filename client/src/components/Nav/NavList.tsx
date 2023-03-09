import styled from "styled-components";

interface StyledDivProps {
    direction: string | null;
}

const HeaderNavList = styled.ul<StyledDivProps>`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0 20px;
    flex-direction: ${({ direction }) => direction || "row"};
`;

type Props = {
    children: React.ReactNode;
    direction?: string | null;
} & typeof defaultProps;

const defaultProps = {
    direction: 'row',
};

const NavList = ({ children, direction }: Props) => <HeaderNavList direction={direction}>{children}</HeaderNavList>;

NavList.defaultProps = defaultProps;

export default NavList;
