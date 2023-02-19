import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import BG from "../../assets/images/avatar-bg.png";
import { AuthContext } from "../../context/auth";
import { BASE_URL_USER } from "../../data/Constans";
import { Button } from "../../components/Form";
import PageTitle from "../../components/PageTitle";
import ProfileForm from "../../components/ProfileForm";

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

const ProfilePage = () => {
    const context = useContext(AuthContext);
    const user = context.user;

    const [isOpenForm, setIsOpenForm] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    const deleteUser = (id) => {
        fetch(`${BASE_URL_USER}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => context.logout());
    };

    return (
        <>
            <Head>
                <PageTitle>Profile</PageTitle>
                <LinkWrap to="/user-list">User List</LinkWrap>
            </Head>
            <Container>
                <Avatar bigImage={true} />

                <Button
                    type={"button"}
                    classes={"small-inline-button"}
                    clickFunction={() => setIsOpenForm(!isOpenForm)}
                >
                    {isOpenForm ? "Close" : "Edit"}
                </Button>

                <Button
                    type={"button"}
                    classes={"small-inline-button"}
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

export default ProfilePage;
