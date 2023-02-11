import styled from "styled-components";

const FormStyle = styled.form`
    padding: 50px 125px;
    position: relative;
    z-index: 2;
    background: #191a1d;
    border-radius: 10px;
    width: 804px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    display: block;

    &.popup-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: none;
        border-radius: 0;
        width: auto;
        padding: 0;

        h2 {
            text-align: center;
            margin: 0 0 20px;
        }
    }
`;

const Form = ({ children, submitFunction, innerRef, classes }) => {
    return (
        <FormStyle className={classes} ref={innerRef} onSubmit={submitFunction}>
            {children}
        </FormStyle>
    );
};

export default Form;
