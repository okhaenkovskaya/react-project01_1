import React from "react";
import { Form, Textarea, Button } from "../Form";
import PageTitle from "../PageTitle";

const PostCommentForm = ({ handleSubmit, setNewComment, newComment }) => {
    return (
        <Form submitFunction={handleSubmit}>
            <PageTitle>Add Comment</PageTitle>
            <Textarea
                changeFunction={(e) => setNewComment(e.target.value)}
                name={"text"}
                placeholder={"Text...."}
                value={newComment}
            ></Textarea>
            <Button type={"submit"}>Add Comment</Button>
        </Form>
    );
};

export default PostCommentForm;
