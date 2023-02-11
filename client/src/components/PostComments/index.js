import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth";
import { BASE_URL_POST } from "../../data/Constans";
import PostCommentForm from "../PostCommentForm";
import PostCommentFormReply from "../PostCommentFormReply";
import FirstComment from "../FirstComment";
import SecondComment from "../SecondComment";

const CommentsContainer = styled.div`
    form {
        visibility: visible;
        pointer-events: auto;
        padding: 0;
    }

    &.hide-form form {
        height: 0;
        overflow: hidden;
        visibility: hidden;
        pointer-events: none;
    }
`;

const PostComment = ({ postId }) => {
    const context = useContext(AuthContext);
    const user = context.user;
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState("");

    const getComments = async () => {
        try {
            axios
                .get(`${BASE_URL_POST}/${postId}/comments`)
                .then((res) => {
                    setComments(res.data);
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (postId !== undefined) {
            getComments();
        }
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${BASE_URL_POST}/${postId}/comments`,
                {
                    text: newComment,
                    userId: user.id,
                }
            );
            setComments(res.data.comments);
            setNewComment("");
        } catch (error) {
            console.log(error);
        }
    };

    const AddLikeComment = async (commentId) => {
        try {
            const res = await axios.patch(
                `${BASE_URL_POST}/${postId}/comments/${commentId}/like`
            );
            setComments(res.data.comments);
        } catch (error) {
            console.log(error);
        }
    };

    const ShowReplyForm = (e) => {
        const formReplyHolder = e.target.parentNode.parentNode.parentNode;
        formReplyHolder.classList.toggle("hide-form");
    };

    const handleReply = async (e, commentId, text) => {
        e.preventDefault();

        try {
            const res = await axios.patch(
                `${BASE_URL_POST}/${postId}/comments/${commentId}/reply`,
                { text }
            );
            setComments(res.data.comments);
            e.target.reply.value = "";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {user ? (
                <PostCommentForm
                    handleSubmit={handleSubmit}
                    setNewComment={setNewComment}
                    newComment={newComment}
                />
            ) : (
                <h1>You must to LoG In</h1>
            )}

            {comments.length > 0 &&
                comments.map((comment) => (
                    <CommentsContainer key={comment._id} className="hide-form">
                        <FirstComment
                            AddLikeComment={AddLikeComment}
                            ShowReplyForm={ShowReplyForm}
                            comment={comment}
                        />
                        <PostCommentFormReply
                            handleReply={handleReply}
                            comment={comment}
                        />
                        {comment.replies.map((innerComment, i) => (
                            <SecondComment
                                key={i}
                                innerComment={innerComment}
                            />
                        ))}
                    </CommentsContainer>
                ))}
        </>
    );
};

export default PostComment;
