import styled from "styled-components";

const TextareaStyle = styled.textarea`
    height: 227px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 15px 15px;
    margin: 0 19px 40px;
    border: 0;
    display: block;
    resize: none;

    width: calc(100% - 38px);
`;

type Props = {
    name?: string | undefined;
    placeholder?: string;
    value?: string;
    isRequired?: boolean;
    changeFunction?: any;
} & typeof defaultProps;

const defaultProps = {
    name: '',
    placeholder: '',
    value: '',
    isRequired: false,
    changeFunction: null,
};

const Textarea = ({ name, placeholder, value, isRequired, changeFunction }: Props) => (
    <TextareaStyle
        required={isRequired}
        placeholder={placeholder}
        onChange={changeFunction}
        name={name}
        defaultValue={value}
    />
);

Textarea.defaultProps = defaultProps;

export default Textarea;
