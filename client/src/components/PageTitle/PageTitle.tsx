import styled from "styled-components";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0 0 10px;

    &.small-title {
        font-size: 16px;
        line-height: 20px;
    }
`;

type Props = {
    children: React.ReactNode;
    classes?: string;
} & typeof defaultProps;

const defaultProps = {
    classes: '',
};

const PageTitle = ({ children, classes }: Props) => (<Title className={classes}>{children}</Title>);

PageTitle.defaultProps = defaultProps;

export default PageTitle;
