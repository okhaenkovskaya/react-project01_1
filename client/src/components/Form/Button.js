import styled from "styled-components";

const ButtonStyle = styled.button`
    height: 51px;
    background: #000;
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display: block;
    width: 233px;

    &:disabled {
        opacity: 0.2;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &.small-inline-button {
        display: inline-block;
        vertical-align: top;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
        text-decoration: none;
        background: #999;
        border: 0;
        padding: 10px;
        margin: 0 15px 0 0;
        border-radius: 10px;
        cursor: pointer;
        width: auto;
    }

    &.small-button {
        margin: 0;
        width: auto;
        height: 30px;
        padding: 5px;
        font-size: 14px;
        line-height: 20px;
    }

    &.task-button {
        background: #bdb2ff;
        border: 1px solid #bdb2ff;
        border-radius: 8px;
        padding: 10px;
        height: 50px;
        width: 192px;
        margin: 0;
        letter-spacing: -0.5px;
        color: #262835;
        display: inline-block;
        vertical-align: top;
    }
`;

const Button = ({
    children,
    ref,
    isDisabled,
    clickFunction,
    type,
    classes,
}) => {
    return (
        <>
            <ButtonStyle
                className={classes}
                type={type}
                ref={ref}
                disabled={isDisabled ? isDisabled : false}
                onClick={clickFunction}
            >
                {children}
            </ButtonStyle>
        </>
    );
};

export default Button;
