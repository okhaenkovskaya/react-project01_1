import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
`;

const SocialList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 5px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: #fff;
  }
`;

const SocialNetwork = ({ socialNetworkData: { title, items } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SocialList>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.svg}</Link>
          </li>
        ))}
      </SocialList>
    </Container>
  );
};

export default SocialNetwork;
