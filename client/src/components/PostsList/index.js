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
    background: #5458F7;
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

const PostsList = ({beers, newBeersLoading, page, onRequestBeers, setNewBeersLoading, isCompleted}) => {

  return (
    <>
      <PostsListContainer>
        {beers.map(post => (<Post key={post.id} post={post}/>))}
      </PostsListContainer>

      {newBeersLoading && <Loader />}

      {beers.length > 0 && !isCompleted ? <Button
        onClick={() => {
          onRequestBeers(page);
          setNewBeersLoading(true)
        }}>
        Load more
      </Button> : '' }
    </>
  );
};

export default PostsList;
