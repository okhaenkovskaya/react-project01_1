import styled from "styled-components";

import Button from "../Link";
import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    margin: 0 0 70px;
    display: flex;
    justify-content: space-between;
    background: #191a1d;
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

const FeaturedPost = ({ post: { _id, title, body, thumbnail } }) => {
    return (
        <Container>
            <TextWrap>
                <Title>{title}</Title>
                <Text>{body}</Text>
                <Holder>
                    <Button url={`/posts/${_id}`}>
                        Read more
                        <IconArrow />
                    </Button>
                </Holder>
            </TextWrap>
            <Image>
                <img src={thumbnail} alt={title} />
            </Image>
        </Container>
    );
};

export default FeaturedPost;
