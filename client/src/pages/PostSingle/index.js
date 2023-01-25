import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../../components/Loader";
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

    img {
        max-height: 200px;
        width: auto;
        margin: 0 30px 0 0;
    }
`;

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost();
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

    const { title, body, thumbnail } = post;

    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <Intro>
                    <img src={thumbnail} alt={title} />
                    <h1>{title}</h1>
                </Intro>
                {body}
                <PostComment />
            </Container>
        </Suspense>
    );
};

export default PostPage;
