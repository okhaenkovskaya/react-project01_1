import styled from "styled-components";

import { Input, Button, IconButton, Form, Select } from "../../Form";
import PageTitle from "../../PageTitle";

const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50vw;
    max-height: 90vh;
    overflow: auto;
    background: #262835;
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%);
    padding: 50px;
    z-index: 10;
`;

const Textarea = styled.textarea`
    height: 227px;
    background: #bdb2ff;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 15px 15px;
    margin: 0 19px 40px;
    border: 0;
    display: block;
    resize: none;
    width: calc(100% - 38px);
`;

const DashboardFormEditPopup = ({
    editedPostDB,
    updatePost,
    setShowEditPopup,
    setEditedPostDB,
}) => {
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        updatePost(e, editedPostDB);
        setShowEditPopup(false);
    };

    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        setEditedPostDB({ ...editedPostDB, [name]: value });
    };

    const handleFileChange = (e) => {
        setEditedPostDB({
            ...editedPostDB,
            [e.target.name]: e.target.files[0],
        });
    };

    return (
        <Popup className="popup">
            <PageTitle>EDIT Post</PageTitle>
            <IconButton
                classes={"close-button"}
                clickFunction={() => setShowEditPopup(false)}
            >
                Close
            </IconButton>
            <Form classes={"popup-form"} submitFunction={handleSubmitEdit}>
                <Input
                    changeFunction={handleChangeEdit}
                    name={"title"}
                    placeholder={"title"}
                    value={editedPostDB.title}
                    classes={"popup-input"}
                />
                <Input
                    changeFunction={handleChangeEdit}
                    name={"name"}
                    placeholder={"author"}
                    value={editedPostDB.name}
                    classes={"popup-input"}
                />

                <Input
                    changeFunction={handleFileChange}
                    name={"thumbnail"}
                    type={"file"}
                    classes={"popup-input"}
                />

                <Select changeFunction={handleChangeEdit} name={"status"}>
                    <option>{editedPostDB.status}</option>
                    <option value="Publish">Publish</option>
                    <option value="Future">Future</option>
                    <option value="Draft">Draft</option>
                </Select>
                <Textarea
                    onChange={handleChangeEdit}
                    name="body"
                    placeholder="body"
                    value={editedPostDB.body}
                ></Textarea>
                <Button>Edit</Button>
            </Form>
        </Popup>
    );
};

export default DashboardFormEditPopup;
