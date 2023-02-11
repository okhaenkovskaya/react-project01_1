import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../../components/Loader";
import Like from "../../components/Like";
import Dislike from "../../components/Dislike";
import Container from "../../components/Container";
import View from "../../components/View";
import { BASE_URL_POST } from "../../data/Constans";

const PostComment = React.lazy(() => import("../../components/PostComments"));

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

    div {
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [view, setView] = useState(0);
    const { title, body, thumbnail, createdAt, likes } = post;
    const date = new Date(Date(createdAt));

    useEffect(() => {
        getPost();
        fetchView();
    }, []);

    const getPost = () => {
        axios
            .get(`${BASE_URL_POST}/${postId}`)
            .then((res) => setPost(res.data))
            .catch((error) => console.log(error));
    };

    const fetchView = () => {
        axios
            .patch(`${BASE_URL_POST}/${postId}/viewcount`)
            .then((res) => setView(res.data.views))
            .catch((error) => console.log(error));
    };

    const addLike = () => {
        axios
            .put(`${BASE_URL_POST}/${postId}/like`)
            .then((res) => setPost(res.data))
            .catch((error) => console.log(error));
    };

    const removeLike = () => {
        axios
            .delete(`${BASE_URL_POST}/${postId}/like`)
            .then((res) => setPost(res.data))
            .catch((error) => console.log(error));
    };

    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <Intro>
                    <img src={thumbnail} alt={title} />
                    <h1>{title}</h1>
                    <View>{view}</View>
                </Intro>
                {body}
                <span style={{ textAlign: "right", display: "block" }}>
                    {date.toLocaleDateString()}
                </span>
                <Like addLike={addLike} likes={likes} />
                <Dislike removeLike={removeLike} likes={likes} />
                <br />
                <PostComment postId={post._id} />
            </Container>
        </Suspense>
    );
};

export default PostPage;
