import styled from "styled-components";

import {accountData} from '../../data/AccountData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  position: relative;
  
  img {
        position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Form = styled.form`
  padding: 50px 125px;
  position: relative;
      z-index: 2;
    background: #191A1D;
    border-radius: 10px;
    width: 804px;
    margin: 0 auto;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 53px;
  margin: 0 0 20px;
  color: #fff;
  text-align: center;
`;

const Input = styled.input`
    height: 63px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 0 40px;
    border: 0;
    display:block;
    width: 100%;
`;

const Button = styled.button`
    height: 51px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display:block;
    width: 233px;
    
    &:disabled {
      opacity: 0.2;
    }
`;

const LoginPage = () => {
  const {loginTitle, bgTitle} = accountData;


  return (
    <Container>
      <img src={bgTitle} alt={loginTitle} />

      <Form>
        <Title>{loginTitle}</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="button">Send</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
