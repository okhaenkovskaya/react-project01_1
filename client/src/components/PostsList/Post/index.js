import Button from "../../Link";
import styled from "styled-components";

import { ReactComponent as IconArrow } from "../../../assets/icons/arrow.svg";

const Container = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  margin: 0 38px 38px;
  width: calc(33.33% - 76px);
  background: #191a1d;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
`;

const TextWrap = styled.div`
  padding: 20px 20px;
`;

const Image = styled.div`
  margin: 0;

  img {
    height: 100px;
    width: auto;
    object-fit: cover;
    margin: 0 auto;
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

const Post = ({ post: { id, name, description, image_url } }) => {
  let slicedText = description;
  if (description.length > 40) {
    slicedText = description.slice(0, 39);
    slicedText += "...";
  }

  return (
    <Container>
      <Image>
        <img src={image_url} alt={name} />
      </Image>
      <TextWrap>
        <Title>{name}</Title>
        <Text>{slicedText}</Text>
        <Holder>
          <Button url={`/posts/${id}`}>
            Read more
            <IconArrow />
          </Button>
        </Holder>
      </TextWrap>
    </Container>
  );
};

export default Post;
