import styled from "styled-components";
import React, { useContext, useState } from "react";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

import { AuthContext } from "../../../context/auth";

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

const Textarea = styled.div`
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

const TextareaButton = styled.button`
    height: 40px;
    background: #fff;
    border-radius: 4px;
    color: #000;
    padding: 5px;
    margin: 0 3px;
    border: 0;
    display: inline-block;
    vertical-align: top;
    width: 40px;

    svg {
        width: 25px;
        height: auto;
    }
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

const SelectWrap = styled(MultiSelect)`
    display: block;
    width: calc(50% - 38px);
    margin: 0 19px 40px;

    .dropdown-container {
        background: none;
        border: 0;
    }

    .dropdown-heading {
        background: #bdb2ff;
        border-radius: 10px;
        height: 63px !important;
    }
`;

const DashboardFormPopup = ({ setShowNewPopup, setPostsDB, postsDB }) => {
    const context = useContext(AuthContext);
    const user = context.user;
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    let tags = [];
    let categories = [];

    const optionsTags = [
        { label: "tag01 🍇", value: "tag01" },
        { label: "tag02 🥭", value: "tag02" },
        { label: "tag03 🍓", value: "tag03" },
    ];

    const optionsCategories = [
        { label: "Category01 🍉", value: "Category01" },
        { label: "Category02 🍐", value: "Category02" },
        { label: "Category03 🍎", value: "Category03" },
    ];

    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        name: "",
        status: "",
        userID: user.id,
        tag: tags,
        categories: categories,
        thumbnail: "",
        slug: "",
    });

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            tags = selectedTags.map((item) => item.value);
            categories = selectedCategories.map((item) => item.value);

            formData.append("title", newPost.title);
            formData.append("body", newPost.body);
            formData.append("name", newPost.name);
            formData.append("status", newPost.status);
            formData.append("thumbnail", newPost.thumbnail);
            formData.append("slug", convertToSlug(newPost.title));
            formData.append("tag", tags);
            formData.append("categories", categories);

            const res = await axios.post(
                "http://localhost:5010/posts",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setPostsDB([...postsDB, res.data]);
            setShowNewPopup(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.files[0],
        });
    };

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleBoldClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    };

    const handleItalicClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    };

    const handleUnderlineClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    };

    const handleHeadingClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
    };

    const handleListClick = (e) => {
        e.preventDefault();
        setEditorState(
            RichUtils.toggleBlockType(editorState, "unordered-list-item")
        );
    };

    return (
        <Popup className="popup">
            <Title>Create a Post</Title>

            <CloseButton type="button" onClick={() => setShowNewPopup(false)}>
                Close
            </CloseButton>
            <Form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="title"
                    value={newPost.title}
                />
                <Input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="author"
                    value={newPost.author}
                />

                <Input
                    onChange={handleFileChange}
                    name="thumbnail"
                    type="file"
                />

                <SelectWrap
                    options={optionsTags}
                    value={selectedTags}
                    onChange={setSelectedTags}
                    labelledBy="Select Tags"
                />

                <SelectWrap
                    options={optionsCategories}
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                    labelledBy="Select Category"
                />

                <Select onChange={handleChange} name="status">
                    <option>status</option>
                    <option value="Publish">Publish</option>
                    <option value="Future">Future</option>
                    <option value="Draft">Draft</option>
                </Select>

                <Textarea>
                    <TextareaButton type="submit" onClick={handleBoldClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" />
                        </svg>
                    </TextareaButton>
                    <TextareaButton type="submit" onClick={handleItalicClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z" />
                        </svg>
                    </TextareaButton>
                    <TextareaButton
                        type="submit"
                        onClick={handleUnderlineClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
                        </svg>
                    </TextareaButton>
                    <TextareaButton type="submit" onClick={handleHeadingClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z" />
                        </svg>
                    </TextareaButton>
                    <TextareaButton type="submit" onClick={handleListClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                        </svg>
                    </TextareaButton>
                    <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                    />
                </Textarea>

                <Button>Submit</Button>
            </Form>
        </Popup>
    );
};

export default DashboardFormPopup;
