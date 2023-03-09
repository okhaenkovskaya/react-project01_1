import { useEffect, useState, Suspense } from "react";
import DataTable from "react-data-table-component";

import { BASE_URL_USER } from "../../data/Constans";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Form/Button";
import Loader from "../../components/Loader/Loader";


type PropsUser = {
    _id: any;
    fullName: string;
    email: boolean;
};

const UserList = () => {
    const [users, setUsers] = useState<PropsUser[]>([]);

    const getUsers = () => {
        fetch(`${BASE_URL_USER}/list`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };

    const deleteUser = (e: any, id: number | string) => {
        fetch(`${BASE_URL_USER}/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => getUsers());
    };

    useEffect(() => {
        getUsers();
    }, []);

    const columns = [
        {
            name: "Name",
            selector: (row: PropsUser) => row.fullName,
        },
        {
            name: "Email",
            selector: (row: PropsUser) => row.email,
        },
        {
            name: "BUTTONS",
            selector: (row: PropsUser) => (
                <Button
                    type="button"
                    classes="small-button"
                    clickFunction={(e: any) => deleteUser(e, row._id)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <Suspense fallback={<Loader />}>
            <PageTitle>User list</PageTitle>
            <DataTable columns={columns} data={users} />
        </Suspense>
    );
};

export default UserList;
