import styled from "styled-components";

const Span = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 100px;

    &.publish {
        background: #f2e7fc;
        color: #8c18e2;
    }

    &.future {
        background: #cbffb2;
        color: #17be1e;
    }

    &.draft {
        background: #b0ecff;
        color: #2aabbc;
    }
`;

const DashboardPostStatus = ({ status = "" }) => {
    return <Span className={status.toLowerCase()}>{status}</Span>;
};

export default DashboardPostStatus;
