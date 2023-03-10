import styled from "styled-components";
import Post from "./Post/Post";
import Loader from "../Loader/Loader";

const PostsListContainer = styled.div`
    margin: 0 0 20px;
    display: flex;
    flex-wrap: wrap;
`;

type PostProps = {
    _id: string | number;
    title: string;
    body: string;
    thumbnail: string;
};

type Props = {
    newPostsLoading?: boolean;
    posts: PostProps[];
} & typeof defaultProps;

const defaultProps = {
    newPostsLoading: false,
};

const PostsList = ({ posts, newPostsLoading }: Props) => (
    <>
        <PostsListContainer>
            {posts.map((post: PostProps) => (
                <Post key={post._id} post={post} />
            ))}
        </PostsListContainer>
        {newPostsLoading && <Loader />}
    </>
);
PostsList.defaultProps = defaultProps;
export default PostsList;