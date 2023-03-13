import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

interface PublicLayoutProps {
    children?: React.ReactNode | null;
}

function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <>
            <Header />

            {children ?? <Outlet />}

            <Footer />
        </>
    );
}

PublicLayout.defaultProps = {
    children: null,
};

export default PublicLayout;