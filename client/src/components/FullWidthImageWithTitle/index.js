import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding: 150px 30px;
  margin: 0 0 30px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

const Title = styled.div`
  margin: 0;
  position: relative;
  font-style: normal;
  font-weight: 300;
  font-size: 120px;
  line-height: 1;
  color: #fff;
  text-align: center;
  z-index: 2;
`;

const FullWidthImageWithTitle = ({ fullImageData: { alt, src }, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src={src} alt={alt} />
    </Container>
  );
};

export default FullWidthImageWithTitle;
