import styled from "styled-components";

import { avatarData } from "../../data/AvatarData";

const Container = styled.div`
    margin: 0 auto 30px;
    padding: 15px 15px 15px 130px;
    background: #bdb2ff;
    border-radius: 12px;
    position: relative;
`;

const Image = styled.img`
    position: absolute;
    top: 15px;
    left: 26px;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #262835;
    margin: 0 0 10px;
`;

const Author = styled.h2`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: block;
    color: #262835;
`;

const Avatar = () => {
    const { fullName, author, image } = avatarData;

    return (
        <Container>
            <Image src={image} alt={fullName} />
            <Title>{fullName}</Title>
            <Author>{author}</Author>
        </Container>
    );
};

export default Avatar;
