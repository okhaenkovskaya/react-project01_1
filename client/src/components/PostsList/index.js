import React from "react";
import styled from "styled-components";

import Post from "./Post";
import Loader from "../Loader";

const PostsListContainer = styled.div`
    margin: 0 0 20px;
    display: flex;
    flex-wrap: wrap;
`;

const PostsList = ({ posts, newPostsLoading }) => {
    return (
        <>
            <PostsListContainer>
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </PostsListContainer>

            {newPostsLoading && <Loader />}
        </>
    );
};

export default PostsList;
