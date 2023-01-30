import styled from "styled-components";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { ReactComponent as IconLike } from "../../assets/icons/like.svg";

const CommentsContainer = styled.div`
    &.hide-form form {
        height: 0;
        overflow: hidden;
    }
`;

const FirstCommentContainer = styled.div`
    margin: 50px 0 30px;

    .frame {
        display: flex;
    }
`;

const FirstComment = styled.div`
    margin: 0 0 30px;
    padding: 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const SecondCommentContainer = styled.div`
    margin: 0 30px 30px;
    display: flex;

    .holder {
        max-width: 507px;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
    }

    li {
        margin: 0 10px 10px 0;
    }

    em {
        font-weight: 900;
        font-size: 12px;
        line-height: 16px;
        font-style: normal;
        color: #fff;
        opacity: 0.6;
    }
`;

const Avator = styled.div`
    background: #2f80ed;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
`;

const SecondComment = styled.div`
    margin: 0 0 30px;
    padding: 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const Button = styled.button`
    margin: 0 10px 10px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: none;
    padding: 8px 15px;
    border: 1px solid #fff;
    border-radius: 10px;
`;

const Textarea = styled.textarea`
    width: 500px;
    margin: 0 10px 10px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: none;
    padding: 8px 15px;
    border: 1px solid #fff;
    border-radius: 10px;
    display: block;
    resize: none;
`;

const PostComment = ({ postId }) => {
    const context = useContext(AuthContext);
    const user = context.user;
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState("");

    const getComments = async () => {
        try {
            axios
                .get(`http://localhost:5010/posts/${postId}/comments`)
                .then((res) => {
                    setComments(res.data);
                    //   setIsLoad(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (postId != undefined) {
            getComments();
        }
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `http://localhost:5010/posts/${postId}/comments`,
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
                `http://localhost:5010/posts/${postId}/comments/${commentId}/like`
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
                `http://localhost:5010/posts/${postId}/comments/${commentId}/reply`,
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
                <form onSubmit={handleSubmit}>
                    <Textarea
                        onChange={(e) => setNewComment(e.target.value)}
                        name="text"
                        placeholder="TExt"
                        value={newComment}
                    ></Textarea>
                    <Button>Add Comment</Button>
                </form>
            ) : (
                <p>You must to LoG In</p>
            )}

            {comments.length > 0 &&
                comments.map((comment) => (
                    <CommentsContainer key={comment._id} className="hide-form">
                        <FirstCommentContainer>
                            <FirstComment>
                                <p>{comment.text}</p>
                            </FirstComment>

                            <div className="frame">
                                <Button
                                    type="button"
                                    onClick={() => AddLikeComment(comment._id)}
                                >
                                    <IconLike />
                                    &nbsp; Add Like&nbsp;
                                    {comment.likes}
                                </Button>
                                <Button
                                    type="button"
                                    onClick={(e) => ShowReplyForm(e)}
                                >
                                    Reply
                                </Button>
                            </div>
                        </FirstCommentContainer>

                        <form
                            onSubmit={(e) =>
                                handleReply(
                                    e,
                                    comment._id,
                                    e.target.reply.value
                                )
                            }
                        >
                            <Textarea
                                name="reply"
                                placeholder="Reply...."
                            ></Textarea>
                            <Button>Add Comment Reply</Button>
                        </form>

                        {comment.replies.map((innerComment) => (
                            <SecondCommentContainer>
                                <Avator>User</Avator>
                                <div className="holder">
                                    <SecondComment>
                                        <p>{innerComment}</p>
                                    </SecondComment>
                                </div>
                            </SecondCommentContainer>
                        ))}
                    </CommentsContainer>
                ))}
        </>
    );
};

export default PostComment;
