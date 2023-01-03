import styled from "styled-components";

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

const DashboardFormPopup = ({
  setShowNewPopup,
  setPosts,
  posts,
  newPost,
  setNewPost,
  emptyPost,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNewPopup(false);
    setPosts(posts.concat(newPost));
    setNewPost(emptyPost);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
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
          name="author"
          type="text"
          placeholder="author"
          value={newPost.author}
        />

        <Select onChange={handleChange} name="status">
          <option>status</option>
          <option value="Publish">Publish</option>
          <option value="Future">Future</option>
          <option value="Draft">Draft</option>
        </Select>

        <Input
          onChange={handleChange}
          name="data"
          type="text"
          placeholder="data"
          value={newPost.data}
        />

        <Textarea
          onChange={handleChange}
          name="body"
          placeholder="body"
          value={newPost.body}
        ></Textarea>
        <Button>Submit</Button>
      </Form>
    </Popup>
  );
};

export default DashboardFormPopup;
