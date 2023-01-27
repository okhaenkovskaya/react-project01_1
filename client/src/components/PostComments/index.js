import styled from "styled-components";

import Comments from "../Comments";
import Like from "../Like";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { ReactComponent as IconUserMan } from "../../assets/icons/user-man.svg";
import UserDropInfo from "../Header/UserDropInfo";
import { ReactComponent as IconLogin } from "../../assets/icons/icon-login.svg";

const FirstCommentContainer = styled.div`
    margin: 50px 0 30px;

    .frame {
        display: flex;
    }
`;

const FirstComment = styled.div`
    margin: 0 0 30px;
    padding: 50px 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

const SecondCommentContainer = styled.div`
    margin: 0 50px 30px;
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
    padding: 50px 30px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
`;

/*
   *  {
     text: { type: String, required: true },
     userId: { type: mongoose.Types.ObjectId, ref: "User" },
     likes: { type: Number, default: 0 },
     replies: [{ type: String }],
   },*/

const PostComment = ({ postId }) => {
    const context = useContext(AuthContext);
    const user = context.user;
    const [isLoad, setIsLoad] = useState(false);
    const [comments, setComments] = useState({});
    const [commentLikes, setCommentLike] = useState(0);
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
        console.log(e, "ShowReplyForm");
        const formReplyHolder = e.target.parentNode;

        if (formReplyHolder.classList.contains("hide-form")) {
            formReplyHolder.classList.remove("hide-form");
        } else {
            formReplyHolder.classList.add("hide-form");
        }
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
                    <textarea
                        onChange={(e) => setNewComment(e.target.value)}
                        name="text"
                        placeholder="TExt"
                        value={newComment}
                    ></textarea>
                    <button>Add Comment</button>
                </form>
            ) : (
                <p>You must to LoG In</p>
            )}

            {comments.length > 0 &&
                comments.map((comment) => (
                    <li key={comment._id} className="hide-form">
                        <h1>{comment.userId} ---UserID</h1>
                        <p>{comment.text}</p>
                        <p>{comment.likes} ---- likes</p>
                        <h2>{JSON.stringify(comment.replies)}</h2>
                        <button
                            type="button"
                            onClick={() => AddLikeComment(comment._id)}
                        >
                            Add like to comment
                        </button>
                        <br />
                        <button type="button" onClick={(e) => ShowReplyForm(e)}>
                            Reply
                        </button>

                        <form
                            onSubmit={(e) =>
                                handleReply(
                                    e,
                                    comment._id,
                                    e.target.reply.value
                                )
                            }
                        >
                            <textarea
                                name="reply"
                                placeholder="Reply...."
                            ></textarea>
                            <button>Add Comment Reply</button>
                        </form>
                    </li>
                ))}

            {/*            {comments.map((comment) => (
                <>
                    <h1>{comment.userId}</h1>
                    <p>{comment.text}</p>
                </>
            ))}*/}

            {/*            <FirstCommentContainer>
                <FirstComment>
                    <h2>First Name Last Name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut cum delectus ex ipsum itaque iusto maiores
                        molestias mollitia nam natus non pariatur perferendis
                        quae quam, sequi sunt temporibus. Facilis, officiis?
                    </p>
                </FirstComment>

                <div className="frame">
                    <Comments>120</Comments>
                    <Like>77</Like>
                </div>
            </FirstCommentContainer>
            <SecondCommentContainer>
                <Avator>FL</Avator>
                <div className="holder">
                    <SecondComment>
                        <h2>First Name Last Name</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci aliquam, architecto aut corporis,
                            cumque dicta doloremque dolorum eius ex excepturi
                            illum nihil officia perspiciatis quia quisquam quod
                            similique tenetur totam!
                        </p>
                    </SecondComment>
                    <ul>
                        <li>Reply</li>
                        <li>React</li>
                        <li>47 min ago</li>
                    </ul>
                    <em>Show 37 more replies</em>
                </div>
            </SecondCommentContainer>*/}
        </>
    );
};

export default PostComment;
