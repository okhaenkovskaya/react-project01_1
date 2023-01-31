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
    /*    const [editorState, setEditorState] = React.useState(() =>
          EditorState.createEmpty()
      );*/
    const optionsTags = [
        { label: "tag01 :grapes:", value: "tag01" },
        { label: "tag02 :mango:", value: "tag02" },
        { label: "tag03 :strawberry:", value: "tag03" },
    ];
    const optionsCategories = [
        { label: "Category01 :watermelon:", value: "Category01" },
        { label: "Category02 :pear:", value: "Category02" },
        { label: "Category03 :apple:", value: "Category03" },
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
            const res = await axios.post("http://localhost:5010/posts", formData, {
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
                <Input onChange={handleFileChange} name="thumbnail" type="file" />
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
                    <button type="submit" onClick={handleBoldClick}>
                        Bold
                    </button>
                    <button type="submit" onClick={handleItalicClick}>
                        Italic
                    </button>
                    <button type="submit" onClick={handleUnderlineClick}>
                        Underline
                    </button>
                    <button type="submit" onClick={handleHeadingClick}>
                        Heading
                    </button>
                    <button type="submit" onClick={handleListClick}>
                        List
                    </button>
                    <Editor editorState={editorState} onChange={setEditorState} />
                </Textarea>
                <Button>Submit</Button>
            </Form>
        </Popup>
    );
};
export default DashboardFormPopup;