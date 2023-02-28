import { ReactComponent as IconDashboard } from "../assets/icons/dashboard.svg";
import { ReactComponent as IconPosts } from "../assets/icons/posts.svg";
import { ReactComponent as IconTasks } from "../assets/icons/tasks.svg";



/*
* type PropsDashboardData = {
    navItems:[];
};

type PropItem = {
    id: number,
    name: string,
    link: string,
    svg: React.ReactNode,
};

*
* */
export const DashboardData = [
        {
            id: 0,
            name: "Dashboard",
            link: "/Dashboard",
            svg: <IconDashboard />,
        },
        {
            id: 1,
            name: "Posts",
            link: "/Dashboard/Posts",
            svg: <IconPosts />,
        },
        {
            id: 2,
            name: "Tasks",
            link: "/Dashboard/Tasks",
            svg: <IconTasks />,
        },
    ]
