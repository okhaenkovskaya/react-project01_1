import React from "react";
import styled from "styled-components";

import DashboardPlaceholderPie from "../../components/PieChart";
import DashboardPlaceholderLine from "../../components/LineChart";
import PageTitle from "../../components/PageTitle";

const Diagrams = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Dashboard = () => {
    return (
        <>
            <PageTitle>Dashboard</PageTitle>

            <Diagrams>
                <DashboardPlaceholderPie />

                <DashboardPlaceholderLine />
            </Diagrams>
        </>
    );
};

export default Dashboard;
