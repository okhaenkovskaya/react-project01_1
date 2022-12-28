import React, {Suspense} from 'react';
import styled from "styled-components";
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as IconNewPosts } from '../../assets/icons/new_post.svg';
import {PostsData} from '../../data/PostsData';
import DashboardPostsHead from "../../components/DashboardPostsHead";
import DashboardNoPosts from "../../components/DashboardPosts/DashboardNoPosts";
import Loader from "../../components/Loader";

const DashboardPosts = React.lazy(() => import('../../components/DashboardPosts'));
const DashboardFormPopup = React.lazy(() => import('../../components/DashboardPosts/DashboardFormPopup'));
const DashboardFormEditPopup = React.lazy(() => import('../../components/DashboardPosts/DashboardFormEditPopup'));


const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #C1C6DB;
    margin:0;
`;

const AddNewButton = styled.button`
    width: 48px;
    height: 48px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 0;
    margin: 0;
    border: 0;
    position: relative;
    
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
`;

const Posts = () => {
  let editedPost = {
    id: '',
    title: '',
    author: '',
    status: '',
    data: '',
    body: ''
  }
  const [posts, setPosts] = useState(PostsData);
  const [postId, setPostId] = useState(posts.length);
  const [isCheckedAllPosts, setIsCheckedAllPosts] = useState(false);
  const [checkedPosts, setCheckedPosts] = useState([]);
  const [showNewPopup, setShowNewPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editPostData, setEditPostData] = useState(editedPost);
  const emptyPost = {
    id: postId,
    title: '',
    author: '',
    status: '',
    data: '',
    body: ''
  }
  const [newPost, setNewPost] = useState(emptyPost);


  const deletePosts = () => {
    const filteredPosts = posts.filter(item => {
      return  !(checkedPosts.includes(item.id))
    })
    setPosts(filteredPosts)
    setIsCheckedAllPosts(false)
    setCheckedPosts([])
    toast.success('🦄🦄🦄 Wow, I\'ve got something', {
      theme: "dark",
    });
  }

  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <Title>Posts</Title>
        <AddNewButton
          onClick={() => {
            setShowNewPopup(true)
            setPostId((postId) => postId + 1)
          }}
          type="button">
          <IconNewPosts />
        </AddNewButton>


        {checkedPosts.length > 0 && <button
          onClick={deletePosts}
          type="button">
            Remove Items
        </button>}
      </Head>
      <ToastContainer />

      {posts.length === 0 && <DashboardNoPosts />}

      {posts.length > 0 && <DashboardPostsHead
        posts={posts}
        checkedPosts={checkedPosts}
        setIsCheckedAllPosts={setIsCheckedAllPosts}
        isCheckedAllPosts={isCheckedAllPosts}
        setCheckedPosts={setCheckedPosts} />
      }

      {posts.length > 0 && <DashboardPosts
        posts={posts}
        checkedPosts={checkedPosts}
        setCheckedPosts={setCheckedPosts}
        setEditPostData={setEditPostData}
        setShowEditPopup={setShowEditPopup}
        setPosts={setPosts} />}


      {showNewPopup ? <DashboardFormPopup
        setShowNewPopup={setShowNewPopup}
        setPosts={setPosts}
        setNewPost={setNewPost}
        posts={posts}
        newPost={newPost}
        emptyPost={emptyPost}
      /> : null}


      {showEditPopup ? <DashboardFormEditPopup
         editPostData={editPostData}
         setPosts={setPosts}
         posts={posts}
         setShowEditPopup={setShowEditPopup}
         setEditPostData={setEditPostData}
      /> : null}
    </Suspense>
  );
};

export default Posts;
