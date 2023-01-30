import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";

import Loader from "../../components/Loader";
import Like from "../../components/Like";
import Dislike from "../../components/Dislike";
const PostComment = React.lazy(() => import("../../components/PostComments"));

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 50px 30px;
    font-size: 28px;
    line-height: 42px;
    color: #fff;
    font-weight: 300;
`;

const Intro = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 30px;
    position: relative;

    img {
        max-height: 200px;
        width: auto;
        margin: 0 30px 0 0;
    }

    span {
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [view, setView] = useState(0);

    useEffect(() => {
        getPost();
        fetchView();
    }, []);

    const getPost = () => {
        axios
            .get(`http://localhost:5010/posts/${postId}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchView = () => {
        axios
            .patch(`http://localhost:5010/posts/${postId}/viewcount`)
            .then((res) => {
                setView(res.data.views);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addLike = () => {
        axios
            .put(`http://localhost:5010/posts/${postId}/like`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const removeLike = () => {
        axios
            .delete(`http://localhost:5010/posts/${postId}/like`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const { title, body, thumbnail, createdAt, likes } = post;
    const date = new Date(Date(createdAt));

    return (
        <Suspense fallback={<Loader />}>
            <Helmet>
                <title>Single Post</title>
            </Helmet>
            <Container>
                <Intro>
                    <img src={thumbnail} alt={title} />
                    <h1>{title}</h1>

                    <span>views -> {view}</span>
                </Intro>
                {body}
                <br />
                <Like addLike={addLike} likes={likes} />
                <Dislike removeLike={removeLike} likes={likes} />
                <br />
                {date.toLocaleDateString()}
                <br />
                <PostComment postId={post._id} />
            </Container>
        </Suspense>
    );
};

export default PostPage;
