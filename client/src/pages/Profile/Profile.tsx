import styled from "styled-components";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import BG from "../../assets/images/avatar-bg.png";
import { AuthContext } from "../../context/auth";
import { BASE_URL_USER } from "../../data/Constans";
import { Button } from "../../components/Form";
import PageTitle from "../../components/PageTitle";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const Container = styled.div`
    padding: 15px;
    background: url(${BG});
    border-radius: 10px;
`;

const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
`;

const LinkWrap = styled(Link)`
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #fff;
    text-decoration: none;
`;

type Props = {
    user: null | PropsUser;
    logout: any;
}

type PropsUser = {
    id: any;
    fullName: string;
    email: string;
} & typeof defaultProps;

const defaultProps = {
    id: "999",
    fullName: "TestUser",
    email: "test@test99.com",
};

const ProfilePage = () => {
    const context = useContext(AuthContext);
    const { user, logout }: Props = context;
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const [updatedUser, setUpdatedUser] = useState<PropsUser>(user);

    const deleteUser = (id: string | number) => {
        fetch(`${BASE_URL_USER}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => logout());
    };

    return (
        <>
            <Head>
                <PageTitle>Profile</PageTitle>
                <LinkWrap to="/user-list">User List</LinkWrap>
            </Head>
            <Container>
                <Avatar bigImage='' />

                <Button
                    type="button"
                    classes="small-inline-button"
                    clickFunction={() => setIsOpenForm(!isOpenForm)}
                >
                    {isOpenForm ? "Close" : "Edit"}
                </Button>

                <Button
                    type="button"
                    classes="small-inline-button"
                    clickFunction={() => deleteUser(updatedUser.id)}
                >
                    DELETE MY PROFILE
                </Button>
            </Container>

            {isOpenForm ? (
                <ProfileForm
                    setUpdatedUser={setUpdatedUser}
                    updatedUser={updatedUser}
                    setIsOpenForm={setIsOpenForm}
                />
            ) : null}
        </>
    );
};

ProfilePage.defaultProps = defaultProps;

export default ProfilePage;
