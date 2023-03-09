import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Button from "../Link/Link";
import { ReactComponent as IconArrow } from "../../assets/icons/arrow.svg";
import Like from "../Like/Like";
import Dislike from "../Dislike/Dislike";
import { BASE_URL_POST } from "../../data/Constans";

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


type Props = {
    post: PropsItem;
};

type PropsItem = {
    _id: any;
    title: string;
    body: string;
    thumbnail: string;
    likes: string | number;
};

const FeaturedPost = ({ post: { _id, title, body, thumbnail, likes } }: Props) => {
    const [updatedLikes, setUpdatedLikes] = useState<string | number>(likes);

    const addLike = () => {
        axios
            .put(`${BASE_URL_POST}/${_id}/like`)
            .then((res) => setUpdatedLikes(res.data.likes))
            .catch((error) => console.log(error));
    };

    const removeLike = () => {
        axios
            .delete(`${BASE_URL_POST}/${_id}/like`)
            .then((res) => setUpdatedLikes(res.data.likes))
            .catch((error) => console.log(error));
    };

    return (
        <Container>
            <TextWrap>
                <Title>{title}</Title>
                <Text>{body.slice(0, 50)}</Text>
                <Holder>
                    <Button url={`/posts/${_id}`}>
                        Read more
                        <IconArrow />
                    </Button>
                </Holder>
                <Like addLike={addLike} likes={updatedLikes} />
                <Dislike removeLike={removeLike} likes={updatedLikes} />
            </TextWrap>
            <Image>
                <img src={thumbnail} alt={title} />
            </Image>
        </Container>
    );
};

export default FeaturedPost;
