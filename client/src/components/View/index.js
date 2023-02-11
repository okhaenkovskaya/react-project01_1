import styled from "styled-components";

import { ReactComponent as IconEye } from "../../assets/icons/eye.svg";

const ViewComponent = styled.div`
    margin: 0 0 0 10px;
    font-size: 12px;
    line-height: 2;
    color: #fff;

    svg {
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: top;
        margin: -2px 5px 0 0;
    }
`;

const View = ({ children }) => {
    return (
        <ViewComponent>
            <IconEye />
            {children}
        </ViewComponent>
    );
};

export default View;
