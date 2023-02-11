import React, { useEffect, useState, Suspense } from "react";
import DataTable from "react-data-table-component";

import { BASE_URL_USER } from "../../data/Constans";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Form/Button";
import Loader from "../../components/Loader";

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
                <Button
                    type={"button"}
                    classes={"small-button"}
                    clickFunction={(e) => deleteUser(e, row._id)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch(`${BASE_URL_USER}/list`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };

    const deleteUser = (e, id) => {
        fetch(`${BASE_URL_USER}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => getUsers());
    };

    const [users, setUsers] = useState([]);

    return (
        <Suspense fallback={<Loader />}>
            <PageTitle>User list</PageTitle>
            <DataTable columns={columns} data={users} />
        </Suspense>
    );
};

export default UserList;
