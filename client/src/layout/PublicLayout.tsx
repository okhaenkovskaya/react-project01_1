import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const PublicLayout = () => (
    <>
        <Header />

        <Outlet />

        <Footer />
    </>
);

export default PublicLayout;
