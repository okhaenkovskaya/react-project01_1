import styled from "styled-components";
import Avatar from "../../components/Avatar";
import BG from "../../assets/images/avatar-bg.png";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0 0 10px;
`;

const Container = styled.div`
    padding: 15px;
    background: url(${BG});
    border-radius: 10px;
`;

const ProfilePage = () => {
    return (
        <>
            <Title>Profile</Title>
            <Container>
                <Avatar bigImage={true} />
            </Container>
        </>
    );
};

export default ProfilePage;
