import styled from "styled-components";

import DashboardPlaceholderPie from "../../components/PieChart";
import DashboardPlaceholderLine from "../../components/LineChart";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #C1C6DB;
    margin: 0 0 10px;
`;


const Diagrams = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Dashboard = () => {
  return (
    <>
      <Title>Dashboard</Title>

      <Diagrams>
        <DashboardPlaceholderPie />

        <DashboardPlaceholderLine />
      </Diagrams>
    </>
  );
};

export default Dashboard;
