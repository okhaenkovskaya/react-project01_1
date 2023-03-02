import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { avatarData } from "../../data/AvatarData";
import { AuthContext } from "../../context/auth";

interface StyledDivProps {
    bigImage: string | undefined;
}
const Container = styled.div<StyledDivProps>`
    margin: 0 auto 30px;
    padding: 15px 15px 15px 130px;
    background: #bdb2ff;
    border-radius: 12px;
    position: relative;
    a {
        text-decoration: none;
    }
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
    
    h2 {
        color:white;
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
type Props = {
    bigImage?: string;
} & typeof defaultProps;
const defaultProps = {
    bigImage: "",
};
const Avatar = ({ bigImage }: Props) => {
    const context = useContext(AuthContext);
    const { user } = context;
    const { image } = avatarData;
    if (!user) {
        return <div>Loading...</div>;
    }
    const { fullName, email }: { fullName: string; email: string } = user;
    console.log(user, 'user')

    return (
        <Container bigImage={bigImage}>
            <Image src={image} alt={fullName} />
            <Link to="/profile">
                <Title>{fullName}</Title>
                <Author>{email}</Author>
            </Link>
        </Container>
    );
};
Avatar.defaultProps = defaultProps;
export default Avatar;