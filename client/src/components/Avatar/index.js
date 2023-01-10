import styled from "styled-components";

import { avatarData } from "../../data/AvatarData";

const Container = styled.div`
    margin: 0 auto 30px;
    padding: 15px 15px 15px 130px;
    background: #bdb2ff;
    border-radius: 12px;
    position: relative;

    ${({ bigImage }) =>
        bigImage &&
        `
    background: none;
    
    img {
        width: 100px;
        height: 100px;
        top: 0;
        left: 0;
    }
    
    > div {
        display: inline-block;
        vertical-align: top;
        background: #bdb2ff;
        border-radius: 15px;
        padding: 15px;
        min-width: 250px;
    }

  `}
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

const Avatar = ({ bigImage }) => {
    const { fullName, author, image } = avatarData;

    return (
        <Container bigImage={bigImage}>
            <Image src={image} alt={fullName} />
            <div>
                <Title>{fullName}</Title>
                <Author>{author}</Author>
            </div>
        </Container>
    );
};

export default Avatar;
