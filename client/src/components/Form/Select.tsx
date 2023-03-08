import styled from "styled-components";

const SelectStyle = styled.select`
    height: 63px;
    background: #bdb2ff;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 19px 40px;
    border: 0;
    display: block;
    width: calc(50% - 38px);
`;

type Props = {
    children: React.ReactNode | string;
    classes?: string;
    name: string;
    changeFunction: any;
} & typeof defaultProps;

const defaultProps = {
    classes: '',
};

const Select = ({ children, classes, name, changeFunction }: Props) => (
    <SelectStyle className={classes} onChange={changeFunction} name={name}>
        {children}
    </SelectStyle>
);

Select.defaultProps = defaultProps;

export default Select;
