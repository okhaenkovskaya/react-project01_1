import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const ContentWrap = styled.div`
  width: calc(100% - 490px);
  background: #262835;
  border-radius: 20px;
  padding: 30px;
`;

const PrivateLayout = () => {
  return (
    <>
      <Header />

      <Container>
        <Sidebar />

        <ContentWrap>
          <Outlet />
        </ContentWrap>
      </Container>

      <Footer />
    </>
  );
};

export default PrivateLayout;
