import styled from "styled-components";

import { NavItem, NavList } from "../Nav";
import { DashboardData } from "../../data/DashboardData";
import Avatar from "../Avatar";

const SidebarWrap = styled.div`
  width: 392px;
  background: #262835;
  border-radius: 20px;
  padding: 35px;
`;

const Sidebar = () => {
  const { navItems } = DashboardData;

  return (
    <SidebarWrap>
      <Avatar />

      <NavList direction="column">
        {navItems.map((item) => (
          <NavItem
            type={"dashboard"}
            key={item.id}
            url={item.link}
            svg={item.svg}
            isEnd={true}
          >
            {item.name}
          </NavItem>
        ))}
      </NavList>
    </SidebarWrap>
  );
};

export default Sidebar;
