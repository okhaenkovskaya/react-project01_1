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
`;

const Form = ({ children, submitFunction, innerRef }) => {
    return (
        <FormStyle ref={innerRef} onSubmit={submitFunction}>
            {children}
        </FormStyle>
    );
};

export default Form;
