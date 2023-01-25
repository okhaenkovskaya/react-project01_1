import styled from "styled-components";
import React from "react";

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
`;

const Title = styled.h2`
    font-weight: 500;
    font-size: 42px;
    line-height: 53px;
    color: #dadada;
    margin: 0 0 50px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Input = styled.input`
    height: 63px;
    background: #bdb2ff;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 19px 40px;
    border: 0;
    display: block;
    width: calc(50% - 38px);
`;

const Select = styled.select`
    height: 63px;
    background: #bdb2ff;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 19px 40px;
    border: 0;
    display: block;
    width: calc(50% - 38px);
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

const Button = styled.button`
    height: 51px;
    background: #bdb2ff;
    border-radius: 40px;
    color: #262835;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display: block;
    width: 233px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 50px;
    background: #bdb2ff;
    border-radius: 50px;
    color: #262835;
    padding: 0;
    margin: 0;
    border: 0;
    display: block;
    width: 50px;
`;

const DashboardFormEditPopup = ({
    editedPostDB,
    updatePost,
    setShowEditPopup,
    setEditedPostDB,
}) => {
    console.log(editedPostDB, "editedPostDB");

    function loadURLToInputFiled(url) {
        getImgURL(url, (imgBlob) => {
            // Load img blob to input
            // WIP: UTF8 character error
            let fileName = "hasFilename.jpg";
            let file = new File(
                [imgBlob],
                fileName,
                { type: "image/jpeg", lastModified: new Date().getTime() },
                "utf-8"
            );
            let container = new DataTransfer();
            container.items.add(file);
            document.querySelector("#file_input").files = container.files;
        });
    }
    // xmlHTTP return blob respond
    function getImgURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            callback(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        console.log(editedPostDB, "editedPostDB");

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
            <Title>EDIT Post</Title>
            <CloseButton type="button" onClick={() => setShowEditPopup(false)}>
                Close
            </CloseButton>
            <Form onSubmit={handleSubmitEdit}>
                <Input
                    onChange={handleChangeEdit}
                    name="title"
                    type="text"
                    placeholder="title"
                    value={editedPostDB.title}
                />
                <Input
                    onChange={handleChangeEdit}
                    name="name"
                    type="text"
                    placeholder="author"
                    value={editedPostDB.name}
                />

                <Input
                    onChange={handleFileChange}
                    name="thumbnail"
                    type="file"
                />

                <Select onChange={handleChangeEdit} name="status">
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
