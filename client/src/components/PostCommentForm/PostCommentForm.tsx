import { Form, Textarea, Button } from "../Form";
import PageTitle from "../PageTitle";

type Props = {
    handleSubmit: (e: any) => void;
    setNewComment: (e: any) => void;
    newComment: any;
};

const PostCommentForm = ({
                             handleSubmit,
                             setNewComment,
                             newComment,
                         }: Props) => (
    <Form submitFunction={handleSubmit}>
        <PageTitle>Add Comment</PageTitle>
        <Textarea
            changeFunction={(e: any) => setNewComment(e.target.value)}
            name="text"
            placeholder="Text...."
            value={newComment}
        />
        <Button type="submit">Add Comment</Button>
    </Form>
);

export default PostCommentForm;
