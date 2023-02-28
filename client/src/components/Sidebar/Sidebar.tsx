import styled from "styled-components";

import { NavItem, NavList } from "../Nav";
import { DashboardData as Menu } from "../../data/DashboardData";
import Avatar from "../Avatar";

const SidebarWrap = styled.div`
    width: 392px;
    background: #262835;
    border-radius: 20px;
    padding: 35px;
`;

type PropItem = {
    id: number,
    name: string,
    link: string,
    svg: React.ReactNode,
};


const Sidebar = () =>  (
        <SidebarWrap>
            <Avatar />

            <NavList direction="column">
                {Menu.map((item: PropItem) => (
                    <NavItem
                        type="dashboard"
                        key={item.id}
                        url={item.link}
                        svg={item.svg}
                        margin='15px'
                    >
                        {item.name}
                    </NavItem>
                ))}
            </NavList>
        </SidebarWrap>
    );

export default Sidebar;
