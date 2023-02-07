import styled from "styled-components";

const InputStyle = styled.input`
    height: 63px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    border: 0;
    display: block;
    margin: 0 19px 40px;
    width: calc(50% - 38px);

    &.input--long {
        width: 100%;
        margin: 0 0 40px;
    }

    &.task-create-input {
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -0.5px;
        color: rgba(24, 24, 25, 0.9);
        margin: 0 20px 0 0;
        padding: 0 10px;
        border: 1px solid red;
        height: 50px;
        width: 520px;
        background: #ffffff;
        border: 1px solid #e6e7e9;
        border-radius: 8px;
        display: inline-block;
        vertical-align: top;
    }
`;

const Input = ({
    type,
    name,
    placeholder,
    value,
    isRequired,
    changeFunction,
    classes,
}) => {
    return (
        <>
            <InputStyle
                className={classes}
                type={type ? type : "text"}
                onChange={changeFunction}
                name={name}
                required={isRequired ? isRequired : false}
                placeholder={placeholder ? placeholder : ""}
                defaultValue={value}
            />
        </>
    );
};

export default Input;
