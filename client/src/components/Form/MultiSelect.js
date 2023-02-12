import React from "react";
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

const MultiSelectWrap = ({ options, value, changeFunction, labelledBy }) => {
    return (
        <MultiSelectStyle
            options={options}
            value={value}
            onChange={changeFunction}
            labelledBy={labelledBy}
        />
    );
};

export default MultiSelectWrap;
