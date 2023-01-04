import LogoImg from "../assets/images/logo.svg";
import { ReactComponent as IconLogin } from "../assets/icons/icon-login.svg";

export const headerData = {
    logoUrl: LogoImg,
    headerNavItems: [
        {
            id: 99,
            name: "BOOTSTRAP",
            link: "/Bootstrap",
        },
        {
            id: 0,
            name: "Home",
            link: "/",
        },
        {
            id: 1,
            name: "Dashboard",
            link: "/Dashboard",
        },
        {
            id: 2,
            name: "Contact",
            link: "/Contact",
        },
        {
            id: 3,
            name: "Register",
            link: "/Register",
        },
        {
            id: 4,
            name: "Sign in",
            link: "/Login",
            svg: <IconLogin />,
        },
    ],
};
