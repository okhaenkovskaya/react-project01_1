import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

import { AuthContext } from "../../../context/auth";
import { BASE_URL_POST } from "../../../data/Constans";
import {
    Input,
    Button,
    IconButton,
    Form,
    Select,
    MultiSelectWrap,
} from "../../Form";
import PageTitle from "../../PageTitle";
import { ReactComponent as IconBold } from "../../../assets/icons/icon-bold.svg";
import { ReactComponent as IconItalic } from "../../../assets/icons/icon-italic.svg";
import { ReactComponent as IconUnderline } from "../../../assets/icons/icon-underline.svg";
import { ReactComponent as IconHeading } from "../../../assets/icons/icon-heading.svg";
import { ReactComponent as IconList } from "../../../assets/icons/icon-list.svg";

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

    .rmsc .dropdown-container {
        background: none !important;
        border: 0 !important;
    }
    .rmsc .gray {
        color: #262835 !important;
    }
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

            const res = await axios.post(BASE_URL_POST, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
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
            <PageTitle>Create a Post</PageTitle>

            <IconButton
                classes={"close-button"}
                clickFunction={() => setShowNewPopup(false)}
            >
                Close
            </IconButton>
            <Form classes={"popup-form"} submitFunction={handleSubmit}>
                <Input
                    changeFunction={handleChange}
                    name={"title"}
                    placeholder={"title"}
                    value={newPost.title}
                    classes={"popup-input"}
                    isRequired={true}
                />
                <Input
                    changeFunction={handleChange}
                    name={"name"}
                    placeholder={"author"}
                    value={newPost.author}
                    classes={"popup-input"}
                    isRequired={true}
                />

                <Input
                    changeFunction={handleFileChange}
                    name={"thumbnail"}
                    type={"file"}
                    classes={"popup-input"}
                />

                <MultiSelectWrap
                    options={optionsTags}
                    value={selectedTags}
                    changeFunction={setSelectedTags}
                    labelledBy={"Select Tags"}
                />

                <MultiSelectWrap
                    options={optionsCategories}
                    value={selectedCategories}
                    changeFunction={setSelectedCategories}
                    labelledBy={"Select Category"}
                />

                <Select changeFunction={handleChange} name={"status"}>
                    <option>status</option>
                    <option value="Publish">Publish</option>
                    <option value="Future">Future</option>
                    <option value="Draft">Draft</option>
                </Select>

                <Textarea>
                    <IconButton
                        classes={"textarea-button"}
                        clickFunction={handleBoldClick}
                    >
                        <IconBold />
                    </IconButton>
                    <IconButton
                        classes={"textarea-button"}
                        clickFunction={handleItalicClick}
                    >
                        <IconItalic />
                    </IconButton>
                    <IconButton
                        classes={"textarea-button"}
                        clickFunction={handleUnderlineClick}
                    >
                        <IconUnderline />
                    </IconButton>
                    <IconButton
                        classes={"textarea-button"}
                        clickFunction={handleHeadingClick}
                    >
                        <IconHeading />
                    </IconButton>
                    <IconButton
                        classes={"textarea-button"}
                        clickFunction={handleListClick}
                    >
                        <IconList />
                    </IconButton>
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
