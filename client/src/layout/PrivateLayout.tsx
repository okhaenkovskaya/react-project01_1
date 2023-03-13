import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
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

interface PrivateLayoutProps {
    children?: React.ReactNode;
}

function PrivateLayout({ children }: PrivateLayoutProps) {
    return (
        <>
            <Header />

            <Container>
                <Sidebar />
                <ContentWrap>{children ?? <Outlet />}</ContentWrap>
            </Container>

            <Footer />
        </>
    );
}

PrivateLayout.defaultProps = {
    children: null,
};

export default PrivateLayout;