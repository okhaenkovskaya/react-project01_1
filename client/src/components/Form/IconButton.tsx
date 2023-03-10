import styled from "styled-components";

const IconButtonStyle = styled.button`
    background: none;
    border: 0;
    padding: 0;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;

    &.like--button {
        overflow: hidden;
        width: 60px;
        border: 1px solid #fff;
        padding: 0 10px;

        svg {
            display: inline-block;
            vertical-align: top;
            margin: 3px 5px 0 0;
        }
    }

    &.close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        height: 50px;
        background: #bdb2ff;
        border-radius: 50px;
        color: #262835;
        padding: 0;
        margin: 0;
        border: 0;
        display: block;
        width: 50px;
    }

    &.textarea-button {
        height: 40px;
        background: #fff;
        border-radius: 4px;
        color: #000;
        padding: 5px;
        margin: 0 3px;
        border: 0;
        display: inline-block;
        vertical-align: top;
        width: 40px;

        svg {
            width: 25px;
            height: auto;
        }
    }
`;

type Props = {
    children: React.ReactNode | string;
    isDisabled?: boolean;
    clickFunction: any;
    classes?: string;
    name?: string;
} & typeof defaultProps;

const defaultProps = {
    name: '',
    classes: '',
    isDisabled: false,
};

const IconButton = ({ children, isDisabled, clickFunction, classes, name }: Props) => (
    <IconButtonStyle
        name={name}
        className={classes}
        disabled={isDisabled}
        type="button"
        onClick={clickFunction}
    >{children}</IconButtonStyle>
);

IconButton.defaultProps = defaultProps;

export default IconButton;
