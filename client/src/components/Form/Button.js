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
`;

const Button = ({ children, ref, isDisabled }) => {
    return (
        <>
            <ButtonStyle ref={ref} disabled={isDisabled ? isDisabled : false}>
                {children}
            </ButtonStyle>
        </>
    );
};

export default Button;
