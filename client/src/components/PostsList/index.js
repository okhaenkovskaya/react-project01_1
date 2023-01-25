import styled from "styled-components";

import Post from "./Post";
import Loader from "../Loader";

const PostsListContainer = styled.div`
    margin: 0 0 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Button = styled.button`
    display: block;
    background: #5458f7;
    width: fit-content;
    padding: 7px 35px;
    margin: 0 auto;
    border: 0;
    border-radius: 40px;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 600;

    &:hover {
        opacity: 0.7;
    }
`;

const PostsList = ({
    posts,
    newPostsLoading,
    page,
    getPosts,
    setNewPostsLoading,
    isCompleted,
}) => {
    return (
        <>
            <PostsListContainer>
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </PostsListContainer>

            {newPostsLoading && <Loader />}

            {posts.length > 0 && !isCompleted ? (
                <Button
                    onClick={() => {
                        getPosts(page);
                        setNewPostsLoading(true);
                    }}
                >
                    Load more
                </Button>
            ) : (
                ""
            )}
        </>
    );
};

export default PostsList;
