import styled from "styled-components";

import Button from "../Link";
import { ReactComponent as IconArrow } from '../../assets/icons/arrow.svg';

const Container = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  margin: 0 0 70px;
  display: flex;
  justify-content: space-between;
  background: #191A1D;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
`;

const TextWrap = styled.div`
  width: 52%;
  padding: 84px 5%;
`;

const Image = styled.div`
  width: 48%;
  
  img {
    height: 100%;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 20px;
  color: #fff;
`;

const Text = styled.div`
  margin: 0 0 20px;
`;

const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const FeaturedPost = ({beer: {id, name, description, image_url}}) => {

  return (
    <Container>
      <TextWrap>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <Holder>
          <Button url={`/posts/${id}`}>
            Read more
            <IconArrow/>
          </Button>

        </Holder>
      </TextWrap>
      <Image>
        <img src={image_url} alt={name} />
      </Image>
    </Container>
  );
};

export default FeaturedPost;
