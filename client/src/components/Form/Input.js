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
