import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../../components/Loader/Loader";
import Like from "../../components/Like/Like";
import Dislike from "../../components/Dislike/Dislike";
import Container from "../../components/Container";
import View from "../../components/View";
import { BASE_URL_POST } from "../../data/Constans";

const PostComment = React.lazy(
    () => import("../../components/PostComments/PostComments")
);

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

type Props = {
    title: string;
    body: string;
    thumbnail: string;
    createdAt: any;
    likes: number | string;
    _id: any;
};

type PostParams = {
    postId: string;
};

const PostPage = () => {
    const { postId } = useParams<PostParams>();
    const [post, setPost] = useState<Props>({
        title: "",
        body: "",
        thumbnail: "",
        createdAt: "",
        likes: 0,
        _id: "",
    });
    const [view, setView] = useState<number>(0);
    const date = new Date(post.createdAt);

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

    useEffect(() => {
        getPost();
        fetchView();
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <Intro>
                    <img src={post.thumbnail} alt={post.title} />
                    <h1>{post.title}</h1>
                    <View>{view}</View>
                </Intro>
                {post.body}
                <span style={{ textAlign: "right", display: "block" }}>
                    {date.toLocaleDateString()}
                </span>
                <Like addLike={addLike} likes={post.likes} />
                <Dislike removeLike={removeLike} likes={post.likes} />
                <br />
                <PostComment postId={post._id} />
            </Container>
        </Suspense>
    );
};

export default PostPage;
