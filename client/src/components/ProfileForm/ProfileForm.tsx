import { useContext } from "react";

import { Button, Input, Form } from "../Form";
import PageTitle from "../PageTitle";
import { BASE_URL_USER } from "../../data/Constans";
import { AuthContext } from "../../context/auth";

type Props = {
    setUpdatedUser: (param: object) => void;
    setIsOpenForm: (param: boolean) => void;
    updatedUser: PropsUser
};

type PropsUser = {
    fullName: string;
    email: string;
    id: any;
};

const ProfileForm = ({ setUpdatedUser, updatedUser, setIsOpenForm }: Props) => {
    const context = useContext(AuthContext);
    const { user, update } = context;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...user, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        fetch(`${BASE_URL_USER}/${updatedUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                update(data);
                setIsOpenForm(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Form submitFunction={handleSubmit}>
            <PageTitle>Please Update your info</PageTitle>
            <Input
                name="fullName"
                value={updatedUser.fullName}
                changeFunction={(e: any) => handleChange(e)}
                classes="input--long"
            />

            <Input
                name="email"
                type="email"
                value={updatedUser.email}
                changeFunction={(e: any) => handleChange(e)}
                classes="input--long"
            />
            <Button type="submit">Update my Info</Button>
        </Form>
    );
};

export default ProfileForm;
