import { Form, Textarea, Button } from "../Form";

type Props = {
    handleReply: (e: any, id: any, value: any) => void;
    comment: any
};

const PostCommentFormReply = ({ handleReply, comment }: Props) => (
    <Form
        submitFunction={(e: any) =>
            handleReply(e, comment._id, e.target.reply.value)
        }
    >
        <Textarea name="reply" placeholder="Reply...."/>
        <Button type="submit">Add Comment Reply</Button>
    </Form>
);

export default PostCommentFormReply;
