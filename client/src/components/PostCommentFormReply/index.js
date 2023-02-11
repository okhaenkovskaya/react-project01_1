import { Form, Textarea, Button } from "../Form";

const PostCommentFormReply = ({ handleReply, comment }) => {
    return (
        <Form
            submitFunction={(e) =>
                handleReply(e, comment._id, e.target.reply.value)
            }
        >
            <Textarea name={"reply"} placeholder={"Reply...."}></Textarea>
            <Button type={"submit"}>Add Comment Reply</Button>
        </Form>
    );
};

export default PostCommentFormReply;
