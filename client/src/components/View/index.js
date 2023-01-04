import { ReactComponent as IconView } from "../../assets/icons/view.svg";
import styled from "styled-components";

const ViewComponent = styled.div`
    margin: 0 0 0 10px;
    font-size: 12px;
    line-height: 2;
    color: #fff;

    svg {
        display: inline-block;
        vertical-align: top;
        margin: 3px 5px 0 0;
    }
`;

const View = ({ children }) => {
    return (
        <ViewComponent>
            <IconView />
            {children}
        </ViewComponent>
    );
};

export default View;
