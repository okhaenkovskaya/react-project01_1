import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import BG from "../../assets/images/avatar-bg.png";
import { AuthContext } from "../../context/auth";
import { Input } from "../../components/Form";

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

const Button = styled.button`
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #fff;
    text-decoration: none;
    background: #999;
    border: 0;
    padding: 10px;
    margin: 0 15px 0 0;
    border-radius: 10px;
    cursor: pointer;
`;

const ProfilePage = () => {
    const context = useContext(AuthContext);
    const user = context.user;

    const [isOpenForm, setIsOpenForm] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5010/user/${updatedUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                context.update(data);
                setIsOpenForm(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteUser = (id) => {
        fetch(`http://localhost:5010/user/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => context.logout());
    };

    return (
        <>
            <Head>
                <Title>Profile</Title>
                <LinkWrap to="/user-list">User List -></LinkWrap>
            </Head>
            <Container>
                <Avatar bigImage={true} />

                <Button
                    type="button"
                    onClick={(e) => setIsOpenForm(!isOpenForm)}
                >
                    {isOpenForm ? "Close" : "Edit"}
                </Button>

                <Button
                    type="button"
                    onClick={(e) => deleteUser(updatedUser.id)}
                >
                    DELETE MY PROFILE
                </Button>
            </Container>

            {isOpenForm ? (
                <form onSubmit={handleSubmit}>
                    <Input
                        name="fullName"
                        type="text"
                        value={updatedUser.fullName}
                        onChange={(e) => handleChange(e)}
                    />

                    <Input
                        name="email"
                        type="email"
                        value={updatedUser.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <Button type="submit">Update my Info</Button>
                </form>
            ) : null}
        </>
    );
};

export default ProfilePage;
