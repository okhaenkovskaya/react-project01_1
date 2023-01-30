import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0;
`;

const UserList = () => {
    const columns = [
        {
            name: "Name",
            selector: (row) => row.fullName,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "BUTTONS",
            selector: (row) => (
                <button type="button" onClick={(e) => deleteUser(e, row._id)}>
                    Dalete
                </button>
            ),
        },
    ];

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch("http://localhost:5010/user/list")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };

    const deleteUser = (e, id) => {
        fetch(`http://localhost:5010/user/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => getUsers());
    };

    const [users, setUsers] = useState([]);

    return (
        <>
            <Helmet>
                <title>User list Page</title>
            </Helmet>
            <Title>User list</Title>
            <DataTable columns={columns} data={users} />
        </>
    );
};

export default UserList;
