import { MultiSelect } from "react-multi-select-component";
import styled from "styled-components";

const MultiSelectStyle = styled(MultiSelect)`
    display: block;
    width: calc(50% - 38px);
    margin: 0 19px 40px;

    .dropdown-container {
        background: none;
        border: 0;
    }

    .dropdown-heading {
        background: #bdb2ff;
        border-radius: 10px;
        height: 63px !important;
    }

    .dropdown-content .panel-content {
        background: #bdb2ff !important;
    }

    .select-item {
        color: #000 !important;
    }
`;

type Props = {
    options: any[];
    value: any;
    changeFunction: any;
    labelledBy?: string | null;
} & typeof defaultProps;

const defaultProps = {
    labelledBy: '',
};

const MultiSelectWrap = ({ options, value, changeFunction, labelledBy }: Props) =>  (
    <MultiSelectStyle
        options={options}
        value={value}
        onChange={changeFunction}
        labelledBy={labelledBy}
    />
);

MultiSelectWrap.defaultProps = defaultProps;

export default MultiSelectWrap;
