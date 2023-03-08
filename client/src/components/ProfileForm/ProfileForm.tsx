import { useContext } from "react";

import { Button, Input, Form } from "../Form";
import PageTitle from "../PageTitle";
import { BASE_URL_USER } from "../../data/Constans";
import { AuthContext } from "../../context/auth";

const ProfileForm = ({ setUpdatedUser, updatedUser, setIsOpenForm }) => {
    const context = useContext(AuthContext);
    const { user } = context;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
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
                context.update(data);
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
                changeFunction={(e) => handleChange(e)}
                classes="input--long"
            />

            <Input
                name="email"
                type="email"
                value={updatedUser.email}
                changeFunction={(e) => handleChange(e)}
                classes="input--long"
            />
            <Button type="submit">Update my Info</Button>
        </Form>
    );
};

export default ProfileForm;
