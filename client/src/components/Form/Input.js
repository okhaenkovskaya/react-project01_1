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
`;

const Input = ({ type, name, placeholder, value, isRequired, onChange }) => {
    return (
        <>
            <InputStyle
                type={type ? type : "text"}
                onChange={onChange}
                name={name}
                required={isRequired ? isRequired : false}
                placeholder={placeholder ? placeholder : ""}
                defaultValue={value}
            />
        </>
    );
};

export default Input;
